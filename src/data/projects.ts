import type { ProjectGroup } from './types'

const engineRendering: ProjectGroup = {
  id: 'engine-rendering',
  title: 'Engine & Rendering',
  blurb: 'Rendering pipelines and engine-level systems.',
  projects: [
    {
      id: 'angle-graphics-sdk',
      title: 'ANGLE Graphics SDK & Developer Tools',
      tech: ['C++', 'C#', '.NET', 'EGL', 'OpenGL ES', 'ANGLE'],
      summary:
        'A .NET graphics SDK built on ANGLE, connecting a native C++ EGL bridge to managed OpenGL ES APIs and developer tools.',
      metrics: [
        'GLES 3.0 bindings generated from Khronos XML, with idempotency tests',
        'Deterministic rendering comparisons across native C++ and managed C# demos',
      ],
      body: [
        'Built a native EGL bridge and dynamically loaded GLES entry points for offscreen rendering with pixel readback and window-surface presentation. The managed SDK exposes context-bound GPU resources with explicit disposal and thread-access checks.',
        'Generated GLES 3.0 bindings from Khronos XML, preserving existing signatures and testing generator idempotency. Native C++ and managed C# demos produce images for deterministic rendering comparisons.',
        'Added a WinForms demo host with renderer/plugin hot reload, shader recompilation with last-working-shader fallback, and rendering benchmarks to make iteration and validation easier.',
      ],
      links: [
        { label: 'Source code & documentation', href: 'https://github.com/mnmnsyf/angle-dotnet' },
      ],
      note: 'Built on the upstream ANGLE project; my work is the native bridge, managed SDK, validation, and developer tooling. Windows / .NET 9.',
      mediaColumns: 1,
      media: [
        {
          kind: 'image',
          src: '/angle-sdk-architecture.svg',
          alt: 'Managed C# SDK connected through a native C++ EGL bridge to ANGLE and the GPU',
          caption: 'SDK architecture: managed resources and API bindings over a native EGL bridge.',
        },
      ],
    },
    {
      id: 'path-tracing-denoising',
      links: [{ label: 'Pipeline overview', href: '/denoising-workflow.svg' }],
      title: 'Path Tracing Denoising with Deep Learning',
      role: 'Personal project · In progress',
      period: 'Sep 2026 – Present',
      tech: [
        'C++',
        'Unreal Engine 5',
        'Deep Learning',
        'PyTorch',
        'SVGF',
        'DLSS Ray Reconstruction',
      ],
      summary:
        'An ongoing deep-learning project combining UE5 training-data collection, PyTorch neural denoiser training, and baseline comparisons to study reconstruction quality and temporal stability in low-sample-count path tracing.',
      body: [
        'Built an Unreal Engine 5 data collection pipeline to prepare path-traced rendering data for neural denoiser training.',
        'Implemented an SVGF denoising baseline and integrated NVIDIA DLSS Ray Reconstruction into a comparative benchmarking pipeline.',
        'Currently training a neural denoiser in PyTorch to investigate reconstruction quality and temporal stability at low sample counts. The project is ongoing; measured results will be added as experiments are completed.',
      ],
      note: 'Personal project, started September 2026. Neural denoiser training and evaluation are ongoing.',
      mediaColumns: 1,
      media: [
        {
          kind: 'image',
          src: '/denoising-workflow.svg',
          alt: 'UE5 rendering data feeding baseline comparison and neural denoiser training, evaluated for quality and temporal stability',
          caption: 'Project workflow; neural denoiser training is still in progress.',
        },
      ],
    },
    {
      id: 'engine-subsystems',
      title: 'AI-Assisted Shader Authoring & Multithreaded Engine Systems',
      period: 'Jan – May 2026',
      tech: ['C++', 'Lua', 'DirectX 11', 'HLSL', 'Python'],
      summary:
        'A shader-authoring tool with live HLSL recompilation, alongside animation, physics and rendering subsystems in the course-provided PrimeEngine framework.',
      body: [
        'The external tool connects to a live engine session. Manual controls, presets and natural-language input generate editable parameters or HLSL snippets within fixed templates.',
        'Applying a change recompiles the shader without restarting the engine. Failed compilations retain the last working shader and report the error.',
        'My engine subsystems include layered skeletal animation, multithreaded ECS physics with independent update cycles, and GPU instance culling through the Rendering Hardware Interface.',
      ],
      links: [
        { label: 'Live shader demo', href: 'https://mnmnsyf.github.io/engine-shader-live.mp4' },
        { label: 'Course repository', href: 'https://github.com/mnmnsyf/csci522-peworkspace' },
      ],
      note: 'PrimeEngine is the course framework; the subsystems and tooling described here are my own work.',
      mediaColumns: 1,
      media: [
        {
          kind: 'video',
          src: '/engine-shader-live.mp4',
          poster: '/engine-shader-live-poster.jpg',
          alt: 'The boss aura changing from orange fireballs to cyan orbs after applying a generated effect',
          caption:
            'Before, prompt, after: the boss aura goes from orange fireballs to cyan orbs on Apply, with the engine still running. Tool on the right, live session on the left.',
        },
        {
          kind: 'image',
          src: '/engine-authoring-tool.jpg',
          alt: 'Shader authoring tool interface',
          caption: 'The authoring tool: presets, manual parameters, and natural-language input',
        },
      ],
    },
    {
      id: 'software-rasterizer',
      title: 'C++ Software Rasterizer',
      period: 'Nov – Dec 2025',
      tech: ['C++'],
      summary:
        'A CPU software rasterizer written in C++, with a programmable shader pipeline and textured OBJ rendering.',
      metrics: ['Fragment-shades meshes of 10,000+ vertices'],
      mediaColumns: 1,
      body: [
        'Implemented rasterization, Z-buffering and a programmable shader pipeline from first principles, with no external graphics API.',
        'Added perspective-correct interpolation and Blinn–Phong lighting; compared flat, Gouraud and Phong shading on the same geometry.',
      ],
      links: [{ label: 'Source code', href: 'https://github.com/mnmnsyf/SoftRendererDemo' }],
      media: [
        {
          kind: 'image',
          src: '/raster-shading.jpg',
          alt: 'Flat, Gouraud and Phong shading compared',
          caption: 'Flat, Gouraud and Phong shading, same geometry and light',
        },
        {
          kind: 'image',
          src: '/raster-obj.jpg',
          alt: 'Textured character mesh rendered by the software rasterizer',
          caption: 'Textured OBJ mesh, rasterized and shaded on the CPU',
        },
      ],
    },
  ],
}

const animationSimulation: ProjectGroup = {
  id: 'animation-simulation',
  title: 'Animation & Simulation',
  blurb:
    'Character animation and physical simulation, with the tooling to measure whether they are right.',
  projects: [
    {
      id: 'mocap-interpolation',
      title: 'Motion Capture Interpolation & Analysis',
      period: 'Spring 2026',
      tech: ['C++', 'OpenGL'],
      summary:
        'ASF/AMC motion reconstruction across four interpolation schemes, with tooling built to see and measure the difference between them.',
      metrics: [
        'Bezier quaternion interpolation costs 21x linear Euler — 1108 ms against 52 ms, averaged over 1000 runs',
      ],
      body: [
        'Reconstructed motion capture frames using linear Euler, Bezier Euler, SLERP quaternion, and Bezier SLERP quaternion interpolation.',
        'Built the analysis and visualization tooling alongside it: overlapping playback against the input motion, ghosting trails, motion paths, gimbal lock detection, and benchmarks comparing each scheme on visual quality against runtime cost.',
        'The comparison quantified what the theory predicts. On root rotation the input peaks near -105 degrees; SLERP tracks it to -117 while linear Euler overshoots past -135, and the cost table shows what that accuracy is worth in milliseconds.',
      ],
      mediaColumns: 2,
      links: [{ label: 'Source code', href: 'https://github.com/mnmnsyf/csci520-mocap' }],
      media: [
        {
          kind: 'image',
          src: '/mocap-euler-vs-slerp.png',
          alt: 'Input, linear Euler and SLERP quaternion angle curves compared',
          caption: 'Root Z rotation: linear Euler overshoots where SLERP tracks the input',
        },
        {
          kind: 'image',
          src: '/mocap-benchmark.png',
          alt: 'Computation time per interpolation scheme',
          caption: 'Average time per run over 1000 repeats',
        },
        {
          kind: 'video',
          src: '/mocap-slerp-comparison.mp4',
          poster: '/mocap-slerp-poster.jpg',
          alt: 'Input motion played back against SLERP quaternion reconstruction',
          caption: 'Input motion overlaid with the SLERP quaternion reconstruction',
        },
      ],
    },
    {
      id: 'ik-skinning',
      title: 'Inverse Kinematics with Skinning',
      period: 'Spring 2026',
      tech: ['C++', 'OpenGL', 'ADOL-C', 'Eigen'],
      summary:
        'An interactive IK system where dragging a handle solves for joint angles and the mesh deforms in real time — with the Jacobian obtained by automatically differentiating the forward kinematics.',
      body: [
        'Forward kinematics composes global joint transforms from local Euler angles under Maya conventions (M = T · JO · R) with configurable rotation orders; linear blend skinning drives the mesh from the resulting transforms.',
        'IK solves (JᵀJ + αI)Δθ = JᵀΔb with Tikhonov regularisation, using ADOL-C to differentiate the forward kinematics into the Jacobian and Eigen’s LDLT to solve it. A pseudoinverse solver built on SVD is available at runtime as an alternative, since it degrades more gracefully on rank-deficient configurations.',
        'Dual quaternion skinning can be toggled against LBS, which removes the candy-wrapper volume loss that shows up at the armadillo’s shoulders under large joint rotations.',
        'Handles can also be placed at mesh vertices rather than joints. There the ADOL-C tape records the entire pipeline — forward kinematics, skinning transforms, blend — so the Jacobian maps joint angles directly to vertex positions.',
        'Large drags are subdivided into up to three intermediate solves with the per-joint angle change clamped, which converges more reliably than one long step. A scripted stair climb drives four handles at once, with parabolic foot arcs and the root translating to track the body.',
      ],
      mediaColumns: 1,
      links: [{ label: 'Source code', href: 'https://github.com/mnmnsyf/csci520-ik' }],
      media: [
        {
          kind: 'image',
          src: '/ik-lbs-vs-dqs.jpg',
          alt: 'Linear blend skinning compared with dual quaternion skinning',
          caption: 'Linear blend skinning, left; dual quaternion skinning, right',
        },
        {
          kind: 'video',
          src: '/ik-demo.mp4',
          poster: '/ik-demo-poster.jpg',
          alt: 'IK and skinning demo across armadillo, dragon and hand models',
          caption: 'Automated pass over three rigs: IK solvers, skinning modes, vertex handles',
        },
      ],
    },
    {
      id: 'jello-simulation',
      title: 'Mass-Spring Deformable Simulation',
      period: 'Spring 2026',
      tech: ['C++', 'OpenGL'],
      links: [{ label: 'Source code', href: 'https://github.com/mnmnsyf/csci520-jello' }],
      summary:
        'An 8×8×8 mass-spring lattice with structural, shear and bend springs, integrated with Euler or RK4 and colliding against analytic geometry.',
      body: [
        'Collision response is constraint-based rather than penalty-based. A penalty spring injects energy on fast impacts and eventually explodes; resolving positions against the constraint instead stays stable.',
        'A volume-conservation pressure force keeps the lattice from collapsing or inverting during high-speed collisions and fast mouse drags. That one force is what made the simulation robust enough to be worth playing with.',
        'Past the box walls, the cube collides against inclined planes, spheres and cones, and against a second cube through node-to-node repulsion. Force fields are sampled by trilinear interpolation.',
        'A travelling sine wave field with buoyancy and Stokes drift carries the cube along like water. Dragging works both globally, with the force aligned to the camera so the cube moves the way the mouse does, and per-node through a spring anchor that pulls neighbouring points along smoothly.',
      ],
      media: [
        {
          kind: 'image',
          src: '/jello-scene.jpg',
          alt: 'Deformable cube in a scene with helix, sphere, cone and inclined planes',
          caption: 'Collision geometry: helix, sphere, cone and inclined planes',
        },
        {
          kind: 'video',
          src: '/jello-demo.mp4',
          poster: '/jello-demo-poster.jpg',
          alt: 'Mass-spring cube simulation',
          caption: 'Constraint-based collision response with volume conservation',
        },
      ],
    },
  ],
}

const gameplayEngineering: ProjectGroup = {
  id: 'gameplay-engineering',
  title: 'Production Systems & Gameplay',
  blurb: 'Navigation, geometry and rendering systems in Unreal Engine 5 projects.',
  projects: [
    {
      id: 'project-mo',
      title: 'Mandate Order',
      role: 'Software Engineer (C++)',
      period: 'Sep 2023 – Dec 2025',
      tech: [
        'C++',
        'Unreal Engine 5',
        'Graph Algorithms',
        'Spatial Data Structures',
        'Unreal Mass (ECS)',
      ],
      summary:
        'Over two years of production C++ on a commercial Unreal Engine 5 strategy game, from internship to full-time, through its Steam Early Access launch. Building on the project’s multithreaded ECS architecture, I owned the algorithm-heavy systems (threat-aware routing, spatial grouping, command relay, Voronoi land ownership, the battle frontline) and then took on architecture work: input tooling, the UI layer stack and the game-settings system.',
      metrics: [
        '1,000+ concurrent agents on threat-aware road-graph routing',
        '8 production systems owned, from graph algorithms to input and UI architecture',
        'Released on Steam Early Access, 12 Aug 2026',
      ],
      body: [
        'Mandate Order is a Warring States war city-builder by Chengdu Digital Sky, with real-time battles of thousands of soldiers. The engine side, a multithreaded ECS with GPU-instanced rendering at 10,000+ entities, was the project’s architecture; my systems were built on it and had to stay within its frame budget. The systems below are the ones I designed and owned.',
      ],
      links: [
        { label: 'Steam', href: 'https://store.steampowered.com/app/1733690' },
        { label: 'Official Site', href: 'https://www.digisky.com/product/mo' },
      ],
      note: 'Content here complies with the project confidentiality agreement.',
      media: [
        { kind: 'image', src: '/project-mo-chariot.png', alt: 'Ancient chariot' },
        { kind: 'image', src: '/project-mo-character.png', alt: 'Character portrait' },
        { kind: 'image', src: '/project-mo-siege.png', alt: 'Siege weapon' },
      ],
      modules: [
        {
          title: 'Threat-aware routing on a dynamic road graph',
          body: [
            'Units and supply move along a road network that changes during play: roads are built, damaged, reclaimed and change ownership. Routes have to reflect both distance and danger, for many agents at once.',
            'I implemented a heap-based multi-source Dijkstra: the heap is seeded from several start nodes with initial distances, then weighted edges are relaxed. Edge weights combine distance, road type, faction-owned targets and nearby enemies in battle, which is what makes the routes threat-aware. The system serves 1,000+ concurrent agents.',
            'Road state lives in the game world while AI runs on its own thread. Road creation, runtime state, visibility, connectivity and ownership changes are batched into commands and sent through a queue to the AI world, rather than shared directly across threads.',
          ],
        },
        {
          title: 'Spatial grouping: KD-tree and union-find connected components',
          body: [
            'Convex hulls over unit clusters drive squad averaging, mouse selection, pathfinding and faction alignment, and they are rebuilt in real time. The prerequisite step is grouping soldiers connected within a distance threshold and picking the largest group.',
            'I wrote a reusable, templated k-dimensional KD-tree with radius queries and combined it with union-find to compute connected components; the same library includes a configurable DBSCAN clustering utility. Tree construction, radius queries and component computation are instrumented with Unreal stat counters, and the caller can switch between depth-first search and the KD-tree paths so each can be profiled against the other.',
          ],
          media: [
            {
              kind: 'video',
              src: '/connected-component-optimization.mp4',
              poster: '/connected-component-poster.png',
              alt: 'Connected components computed over unit clusters',
            },
          ],
        },
        {
          title: 'Command relay through a beacon graph',
          body: [
            'Players issue orders to distant units through chains of signal beacons. Each commander’s beacon zone forms a graph that changes as beacons are added or lost.',
            'I used Floyd–Warshall to compute all-pairs hop distances and next hops for each zone and cached both tables. A rebuild is O(V³) and runs only when the zone changes; in exchange, every relay lookup during play is a table read. The trade-off fits because zones are small and change far less often than orders are sent.',
          ],
          media: [
            {
              kind: 'video',
              src: '/flag-command.mp4',
              poster: '/flag-command-poster.png',
              alt: 'Command relay through signal beacons',
            },
          ],
        },
        {
          title: 'Voronoi-based plot management',
          body: [
            'Buildings own land, and land ownership is a Voronoi partition. Plot cells authored in a web tool are imported as SVG polygons and attached to the buildings that own them, scaled and rotated to match each building in the 3D world.',
            'The hard part was adjacency. This game deliberately leaves gaps between plots, which breaks the usual shared-edge search. I approximated it instead: polygon vertices are mapped onto a bounded grid (16–64 cells per axis, derived from the cell count), and cells that share grid positions become neighbours. Grid resolution trades precision against speed, which made adjacency cheap enough to recompute during play.',
            'In construction mode, the plot manager expands outward from a central building through adjacent plots, skipping invalid and occupied ones, and takes the next candidate from a heap ordered by occupancy and squared distance.',
          ],
          media: [
            {
              kind: 'video',
              src: '/voronoi-tile-management.mp4',
              poster: '/voronoi-tile-management-poster.png',
              alt: 'Voronoi-based plot management',
            },
          ],
        },
        {
          title: 'Dynamic battle frontline',
          body: [
            'The frontline is the shifting boundary between engaged armies. I partitioned the terrain into a grid, determined which force occupies each cell, then collected and ordered the edges between adjacent cells held by different factions into continuous border segments.',
            'Sampling segment endpoints through sine offsets gives the line a wave-like edge instead of a hard polygonal one.',
          ],
          media: [
            {
              kind: 'image',
              src: '/dynamic-battle-frontline-1.png',
              alt: 'Dynamic battle frontline',
            },
            {
              kind: 'image',
              src: '/dynamic-battle-frontline-2.png',
              alt: 'Dynamic battle frontline',
            },
          ],
        },
        {
          title: 'Input tooling and command handling',
          body: [
            'The game switches between operation modes and temporary interaction layers, and actions must be rebindable. I built the Enhanced Input tooling the game code uses: helpers for action binding, adding and removing mapping contexts with configured priorities, reference-counted monitoring of action events, and black/white-list filtering of actions.',
            'I also wrote the instruction manager interface for player selection and command gestures, such as box selection and right-click orders, driven by configured game states, and an in-game debug widget that shows which input actions fire, for diagnosing binding problems.',
          ],
        },
        {
          title: 'UI layer stack and game settings',
          body: [
            'I built the CommonUI manager that gives each player a root layout and pushes activatable widgets onto gameplay-tagged layer stacks, so screens open and close in a predictable order.',
            'On top of it I built the game-settings system: a settings registry and manager, reusable controls (dropdown entries, a brightness screen, buttons with shared text styling) and a read-only hint for shortcuts that cannot be rebound.',
          ],
        },
        {
          title: 'Projectiles in Unreal Mass (ECS)',
          body: [
            'Working within the project’s ECS architecture, I defined the Mass trait for bullets and the processors for their initialization and per-frame updates, which iterate bullet fragments chunk by chunk to handle movement, collision checks and hits.',
          ],
        },
      ],
    },
    {
      id: 'sight-tour',
      links: [{ label: 'Source code', href: 'https://github.com/mnmnsyf/SightTour' }],
      title: 'Sight Tour',
      period: '2023',
      tech: ['Unreal Engine 5', 'C++', 'Post-Process Materials', 'Stereo Rendering'],
      summary:
        'Amblyopia rehabilitation built on custom stereo rendering — channel-isolated content and a hand-written anaglyph post-process material that puts a therapeutic target in front of one eye at a time.',
      body: [
        'A first-person game supporting vision rehabilitation for children with amblyopia. It is not really a shooter: the weapon solves arithmetic problems, and objects carry grating textures chosen to stimulate the weaker eye. The rendering work is what makes the therapy possible.',
      ],
      media: [
        {
          kind: 'image',
          src: '/sight-tour-arena.png',
          alt: 'Shape recognition challenge',
          caption: 'Collect shape-matching spheres and strike the corresponding target',
        },
        {
          kind: 'image',
          src: '/sight-tour-anaglyph.png',
          alt: 'Anaglyph 3D effect',
          caption: 'Red-cyan stereoscopic view with arithmetic challenges',
        },
      ],
      modules: [
        {
          title: 'Fine vision training',
          body: [
            'Objects that demand fine visual attention are drawn in the red channel only (255, 0, 0) — the floating answer above each ball, for instance. Behind red-cyan glasses, only the red lens resolves that text. Placing the amblyopic eye behind the red lens forces it to do the reading, so both eyes stay engaged while the weaker one carries the detail work.',
          ],
          variants: [
            { label: 'Normal view', src: '/fine-vision-main.png', alt: 'Normal view' },
            {
              label: 'Blue lens',
              src: '/fine-vision-blue-glasses.png',
              alt: 'Through the blue lens',
            },
            { label: 'Red lens', src: '/fine-vision-red-glasses.png', alt: 'Through the red lens' },
          ],
        },
        {
          title: 'Stereoscopic training',
          body: [
            'The stereo effect is produced by a custom post-process material rather than engine stereo support: it shifts each object’s red channel slightly left and the cyan channels (green and blue) slightly right. With the offsets tuned, red-cyan glasses resolve a genuine sense of depth.',
            'Not every child with amblyopia has impaired depth perception, so the effect is a settings-menu toggle rather than always-on.',
          ],
          media: [
            {
              kind: 'image',
              src: '/stereoscopic-training.png',
              alt: 'Anaglyph stereoscopic effect',
            },
          ],
        },
        {
          title: 'Raster vision training',
          body: [
            'Quick time events put a rotating black-and-white grating at the centre of the screen with a key prompt in its middle, drawn so that only the red lens resolves it. The amblyopic eye has to focus and respond under time pressure, which turns a standard QTE into targeted training.',
          ],
          media: [
            {
              kind: 'image',
              src: '/raster-vision-training.png',
              alt: 'QTE with red key prompt over a rotating grating',
            },
          ],
        },
      ],
    },
    {
      id: 'orca',
      links: [{ label: 'Source code', href: 'https://github.com/mnmnsyf/ORCA_UE5' }],
      title: 'ORCA Collision Avoidance in UE5',
      tech: ['Unreal Engine 5', 'C++', 'Multi-Agent Navigation'],
      summary:
        'Unreal’s built-in RVO avoidance degrades as agent count climbs, so I implemented ORCA inside the engine as a reusable subsystem.',
      metrics: ['Stable avoidance for hundreds of simultaneous agents'],
      body: [
        'ORCA (Optimal Reciprocal Collision Avoidance) gives more predictable and stable behaviour than RVO at scale. I implemented optimal velocity computation and reciprocal velocity obstacles as a custom navigation layer, available across projects rather than bolted onto one.',
      ],
      media: [
        {
          kind: 'video',
          src: '/orca-algorithm.mp4',
          poster: '/orca-poster.png',
          alt: 'ORCA collision avoidance',
        },
      ],
    },
    {
      id: 'others',
      links: [
        { label: 'Jumping Party', href: 'https://github.com/mnmnsyf/JumpingParty' },
        { label: 'Tavern & Adventure', href: 'https://github.com/mnmnsyf/TavernAndAdventure' },
        { label: 'Little Adventurer', href: 'https://github.com/mnmnsyf/LittleAdventurer' },
      ],
      title: 'Smaller Projects',
      tech: ['Unreal Engine 5', 'C++'],
      summary: 'Prototypes exploring different gameplay mechanics and visual styles.',
      media: [
        {
          kind: 'image',
          src: '/jumping-party.png',
          alt: 'Jumping Party',
          caption: 'Jumping Party',
        },
        {
          kind: 'image',
          src: '/tavern-adventure.png',
          alt: 'Tavern and Adventure',
          caption: 'Tavern and Adventure',
        },
        {
          kind: 'image',
          src: '/little-adventure.png',
          alt: 'Little Adventure',
          caption: 'Little Adventure',
        },
      ],
    },
  ],
}

export const projectGroups: ProjectGroup[] = [
  {
    id: 'production-work',
    title: 'Production Work · Digital Sky',
    blurb: 'C++ gameplay and engine systems for Mandate Order, released on Steam Early Access.',
    projects: gameplayEngineering.projects.filter((project) => project.id === 'project-mo'),
  },
  engineRendering,
  animationSimulation,
  {
    ...gameplayEngineering,
    projects: gameplayEngineering.projects.filter((project) => project.id !== 'project-mo'),
  },
]
