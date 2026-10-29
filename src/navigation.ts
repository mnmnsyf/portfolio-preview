import { sections } from './data/site'
import { projectGroups } from './data/projects'
import { articulateArena } from './data/publications'

export type SectionId = (typeof sections)[number]['id']
export interface SectionRoute {
  section: SectionId
  target: string | null
}

/** The About page gathers what used to be four separate sections. */
export const aboutParts = [
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'awards', title: 'Awards' },
  { id: 'news', title: 'Updates' },
] as const

/** Sections that were retired in the move to skill modules, and where they live now. */
const legacySections = new Map<string, SectionRoute>([
  ...aboutParts.map((part): [string, SectionRoute] => [
    part.id,
    { section: 'about', target: part.id },
  ]),
  ['skills', { section: 'engine', target: null }],
])

const sectionIds = new Set<string>(sections.map((section) => section.id))
const targetSections = new Map<string, SectionId>([[articulateArena.id, 'research']])
for (const part of aboutParts) targetSections.set(part.id, 'about')
for (const group of projectGroups) {
  targetSections.set(group.id, 'projects')
  for (const project of group.projects) targetSections.set(project.id, 'projects')
}

export function sectionHref(section: SectionId): string {
  return section === 'top' ? '#/' : `#/${section}`
}

/** Resolve modern section URLs and previously shared one-page anchors. */
export function resolveRoute(hash: string): SectionRoute {
  let value: string
  try {
    value = decodeURIComponent(hash.replace(/^#/, ''))
  } catch {
    return { section: 'top', target: null }
  }
  if (value.startsWith('/')) {
    const [section, target] = value.slice(1).split('/')
    if (section && sectionIds.has(section)) {
      return {
        section: section as SectionId,
        target: target && targetSections.get(target) === section ? target : null,
      }
    }
    const legacy = section ? legacySections.get(section) : undefined
    if (legacy) return legacy
  } else {
    if (sectionIds.has(value)) return { section: value as SectionId, target: null }
    const legacy = legacySections.get(value)
    if (legacy) return legacy
    const section = targetSections.get(value)
    if (section) return { section, target: value }
  }
  return { section: 'top', target: null }
}
