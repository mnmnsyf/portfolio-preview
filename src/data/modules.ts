/**
 * The site is organized by capability. Each module states what the author can
 * do, lists the skills behind it, and points at the evidence: Mandate Order
 * systems shown in full (by their index in that project's modules) and other
 * projects as cards that open their own page.
 */
export interface SkillModule {
  id: 'engine' | 'gameplay' | 'graphics'
  title: string
  /** One sentence a recruiter can repeat back. */
  claim: string
  skills: string[]
  /** Mandate Order systems shown in full, as indices into its modules. */
  systems: number[]
  /** Further Mandate Order systems shown as one-line cards. */
  briefSystems?: number[]
  /** Other projects, by id, shown as evidence cards. */
  projects: string[]
}

export const skillModules: SkillModule[] = [
  {
    id: 'engine',
    title: 'Engine & Systems',
    claim:
      'Large-scale real-time systems in C++: multithreaded simulation, spatial data structures and graph algorithms that hold up at thousands of units.',
    skills: [
      'C++',
      'Multithreading',
      'Unreal Mass (ECS)',
      'Spatial hashing',
      'KD-tree',
      'Graph algorithms',
      'Performance Optimization',
      'Unreal Insights',
    ],
    systems: [0, 1],
    briefSystems: [2, 3, 4],
    projects: ['engine-subsystems', 'orca'],
  },
  {
    id: 'gameplay',
    title: 'Gameplay & Tools',
    claim:
      'Gameplay frameworks and developer tools: data-driven abilities, input and UI layers, code generation and hot reload.',
    skills: [
      'Data-driven design',
      'Unreal Enhanced Input',
      'CommonUI',
      'Behavior trees',
      'Code Generation',
      'Hot Reload',
      'Editor & Debug Tools',
      'C# / .NET',
    ],
    systems: [7, 5, 6],
    projects: ['angle-graphics-sdk', 'sight-tour', 'others'],
  },
  {
    id: 'graphics',
    title: 'Graphics & Simulation',
    claim:
      'Rendering and physics built from first principles: a software rasterizer, post-process shaders, inverse kinematics with skinning, and soft-body simulation with live demos.',
    skills: [
      'DirectX 11 / HLSL',
      'OpenGL / OpenGL ES',
      'Post-process shaders',
      'Kinematics',
      'Physics Simulation',
      'Animation Systems',
      'PyTorch',
    ],
    systems: [],
    projects: [
      'software-rasterizer',
      'ik-skinning',
      'jello-simulation',
      'mocap-interpolation',
      'path-tracing-denoising',
    ],
  },
]
