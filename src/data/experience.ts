import type { Experience } from './types'

export const experience: Experience[] = [
  {
    org: 'Artificial Intelligence & Visual Computing Lab, UCLA',
    role: 'Research Assistant',
    links: [
      { label: 'AIVC Lab', href: 'https://www.math.ucla.edu/aivc/' },
      { label: 'ArticulateArena paper', href: 'https://arxiv.org/abs/2609.33931' },
    ],
    period: 'Jun 2026 – Present',
    location: 'Los Angeles, CA',
    advisor: {
      label: 'Prof. Chenfanfu Jiang',
      href: 'https://www.math.ucla.edu/~cffjiang/index.html',
    },
    bullets: [
      'Second author of ArticulateArena: A Metric for Articulated Kinematics, available on arXiv.',
      'Contributed to representation-invariant joint-motion metrics and standardized evaluation protocols for articulated objects.',
      'Built and ran multi-model experiments covering model execution, quality assessment, and comparative analysis.',
    ],
  },
  {
    org: 'Chengdu Digital Sky Technology',
    role: 'Software Engineer · C++ / Unreal Systems',
    links: [
      { label: 'Digital Sky', href: 'https://www.digisky.com/' },
      { label: 'Mandate Order on Steam', href: 'https://store.steampowered.com/app/1733690' },
    ],
    period: 'Jul 2024 – Dec 2025 · Full-time',
    location: 'Chengdu, China',
    bullets: [
      'Built production C++ engine and simulation systems for Mandate Order, released on Steam Early Access.',
      'Owned the skill system on the project’s multithreaded ECS architecture (GPU-instanced rendering at 10,000+ entities): data-driven ability configuration, event triggers decoupled from execution, commander skill preview and release, and Unreal Mass projectile processors.',
      'Built dynamic road-graph routing with heap-based multi-source Dijkstra for threat-aware and supply routes, supporting 1,000+ concurrent agents; batched road-state synchronization across GameWorld and AIWorld.',
      'Built the resource supply manager: headquarters deliveries, transport efficiency and resource updates driven by configuration tables.',
      'Built the Enhanced Input tooling (prioritized mapping contexts, reference-counted action monitoring, action filtering), a CommonUI layer-stack manager and the game-settings registry and screens.',
      'Partitioned terrain with Voronoi diagrams to derive plot adjacency, backing the in-game construction system.',
    ],
    media: [
      {
        kind: 'image',
        src: '/mandate-order.png',
        alt: 'Mandate Order Steam store page',
        caption: 'Mandate Order on Steam Early Access',
      },
    ],
  },
  {
    org: 'Chengdu Digital Sky Technology',
    role: 'Software Engineer Intern · C++ / Unreal Systems',
    links: [
      { label: 'Digital Sky', href: 'https://www.digisky.com/' },
      { label: 'Mandate Order', href: 'https://www.digisky.com/product/mo' },
    ],
    period: 'Sep 2023 – Jul 2024 · Internship',
    location: 'Chengdu, China',
    bullets: [
      'Built a reusable templated C++ spatial library (k-dimensional KD-tree, union-find connected components, DBSCAN) for unit grouping, instrumented with Unreal stat counters.',
      'Implemented Floyd–Warshall shortest paths for command relay across 50+ connected signal-tower nodes.',
      'Built reusable behavior-tree components, reducing implementation time by approximately 50%.',
      'Delivered a playable tavern-management and farming prototype within one month with cross-functional teammates.',
    ],
  },
  {
    org: 'Data Structures & Algorithms Lab, Chengdu University of Information Technology',
    role: 'Member',
    links: [{ label: 'University website', href: 'https://www.cuit.edu.cn/' }],
    period: 'Sep 2020 – Jun 2023',
    location: 'Chengdu, China',
    bullets: [
      'Represented the university at ICPC, CCPC and Lan Qiao Cup, winning multiple medals including an ICPC silver.',
      'Mentored new team members on algorithmic approach and contest strategy; prepared daily practice sets, ran mock contests, and taught at winter and summer training camps.',
    ],
  },
]
