export type IconName = 'mail' | 'github' | 'cv' | 'linkedin' | 'scholar'

export interface NavLink {
  label: string
  href: string
  icon: IconName
}

/** Public identity and recruiting information. */
export const site = {
  name: 'Fiona She',
  roleLine: 'Software Engineer · C++ Systems, Performance & Tooling',
  photo: { src: '/portrait.jpg', alt: 'Fiona She' },

  /**
   * Rendered with v-html so institution and advisor names can carry links, the
   * way an academic homepage bio does. These are authored here as constants —
   * no external or user input reaches this field.
   */
  bio: [
    `I'm a software engineer who builds performance-critical C++ systems, from real-time
     simulation that keeps 10,000+ entities on screen to developer-facing SDKs and tools.`,
    `At
     <a href="https://www.digisky.com/" target="_blank" rel="noopener">Chengdu Digital Sky</a>
     I spent over two years, intern to full-time, shipping production C++ for
     <a href="https://www.digisky.com/product/mo" target="_blank" rel="noopener">Mandate Order</a>,
     now on Steam Early Access. I started on the algorithm-heavy systems (spatial queries, graph routing
     for 1,000+ agents, Voronoi land ownership) and moved into architecture: a multithreaded ECS
     and the game's input and UI systems.`,
    `<strong>Seeking 2027 full-time software engineering roles in C++ software systems, backend and infrastructure,
     performance engineering, and graphics &amp; simulation.</strong> M.S. in Computer Science at
     <a href="https://www.usc.edu/" target="_blank" rel="noopener">USC</a> (graphics track), graduating May 2027;
     current coursework includes CSCI 566: Deep Learning and Its Applications.`,
    `Algorithms are my foundation: I'm an ICPC medalist and mentored my university's contest team.
     I'm also a research assistant at the
     <a href="https://www.math.ucla.edu/aivc/" target="_blank" rel="noopener">AIVC Lab</a> at UCLA, advised by Prof.
     <a href="https://www.math.ucla.edu/~cffjiang/index.html" target="_blank" rel="noopener">Chenfanfu Jiang</a>,
     and second author of <a href="#/research/articulatearena">ArticulateArena</a> (arXiv, submitted to ICLR).`,
    `Recent independent work: an <a href="#/projects/angle-graphics-sdk">ANGLE-based .NET graphics SDK</a>
     with a native C++ bridge, generated bindings and deterministic rendering tests, and
     <a href="#/projects/path-tracing-denoising">deep learning for path-tracing denoising</a>:
     a UE5 training-data pipeline plus a neural denoiser I am training in PyTorch, compared against SVGF
     and DLSS Ray Reconstruction.`,
  ],

  lastUpdated: 'October 2026',
}

export const navLinks: NavLink[] = [
  { label: 'Email', href: 'mailto:sheyfff@gmail.com', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/mnmnsyf', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yongfei-she/',
    icon: 'linkedin',
  },
]

/** Direct routes to the strongest public evidence. */
export const featuredWork = [
  {
    label: 'Research · Second author',
    title: 'ArticulateArena',
    href: '#/research/articulatearena',
    image: '/articulatearena-category.png',
    alt: 'Five joint types covered by ArticulateArena',
  },
  {
    label: 'C++ / C# · SDK & Tools',
    title: 'ANGLE Graphics SDK',
    href: '#/projects/angle-graphics-sdk',
    image: '/angle-sdk-architecture.svg',
    alt: 'ANGLE graphics SDK architecture',
  },
  {
    label: 'UE5 / PyTorch · In progress',
    title: 'Path Tracing Denoising',
    href: '#/projects/path-tracing-denoising',
    image: '/denoising-workflow.svg',
    alt: 'Path-tracing denoising training and evaluation workflow',
  },
]

/** Independent sections in sidebar order. */
export const sections = [
  { id: 'top', label: 'Entry' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'news', label: 'Updates' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
] as const
