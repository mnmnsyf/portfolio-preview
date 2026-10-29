/**
 * Simplified Chinese text, keyed by the English it replaces (whitespace is
 * normalized before lookup). Keep the English in the content files as the
 * source of truth; when an English string changes, update its key here too.
 * Names, products and technologies without an entry stay in English.
 */
export const zh: Record<string, string> = {
  // ── Site chrome ──────────────────────────────────────────────
  'Skip to content': '跳到正文',
  Entry: '首页',
  Projects: '项目',
  Research: '科研',
  Experience: '经历',
  Updates: '动态',
  Education: '教育',
  Awards: '奖项',
  Skills: '技能',
  'Selected projects': '精选项目',
  'Personal Website': '个人网站',
  'Main navigation': '主导航',
  Résumé: '简历',
  'Résumé (PDF)': '简历（PDF，英文）',
  'Jump to': '快速跳转',
  'Open command palette': '打开命令面板',
  'Switch to light theme': '切换到浅色主题',
  'Switch to dark theme': '切换到深色主题',
  'back to introduction': '返回首页',

  // Footer
  'Seeking 2027 full-time roles': '寻找 2027 年全职岗位',
  'Systems, graphics, simulation —': '系统、图形、仿真 ——',
  'let’s talk.': '欢迎联系。',
  Copy: '复制',
  Copied: '已复制',
  'Contact and profiles': '联系方式与主页',
  'Los Angeles': '洛杉矶',
  'Last updated': '最后更新',
  'October 2026': '2026 年 10 月',
  Email: '邮箱',

  // Entry page
  'Welcome to my personal website.': '欢迎来到我的个人网站。',
  Now: '现在',
  'Research · UCLA AIVC Lab': '科研 · UCLA AIVC 实验室',
  Study: '学业',
  'M.S. CS · USC, May 2027': 'USC 计算机硕士 · 2027 年 5 月毕业',
  Algorithms: '算法',
  'ICPC silver medalist': 'ICPC 银牌',
  'Open to': '求职意向',
  '2027 full-time SDE roles': '2027 年游戏开发全职岗位',
  'Selected work': '精选作品',
  'Get in touch': '联系我',
  'Move to disturb the field · click to add a site.': '移动鼠标扰动图案 · 点击添加一个站点。',
  'Voronoi partitions also ran': 'Voronoi 划分也用在了',
  'land ownership in Mandate Order →': 'Mandate Order 的地块归属上 →',
  About: '关于我',
  'In numbers': '数据一览',
  'All projects →': '全部项目 →',
  Shipped: '已上线',
  'Mandate Order featured screenshots': 'Mandate Order 精选截图',
  'Digital Sky · Steam Early Access · Aug 2026': '数字天空 · Steam 抢先体验 · 2026 年 8 月',
  'A Warring States war city-builder with real-time battles of thousands of soldiers. I built production C++ systems for it in Unreal Engine 5: threat-aware routing, spatial grouping, command relay, Voronoi land plots, the battle frontline, the skill system, and the input and UI layers.':
    '一款战国题材的战争城建游戏，实时战斗规模达数千士兵。我用 Unreal Engine 5 为它开发了多个上线的 C++ 系统：威胁感知寻路、空间分组、军令传递、Voronoi 地块、战场前线、技能系统，以及输入和 UI 框架。',
  'Inside the systems': '查看系统细节',
  Latest: '最新动态',
  'All updates →': '全部动态 →',

  // Bio (authored HTML)
  "I'm a software engineer who builds performance-critical C++ systems, from graph and spatial algorithms in a shipped real-time strategy game to developer-facing SDKs and tools.":
    '我是一名游戏开发，专注于构建对性能要求很高的 C++ 系统：从一款已上线的实时策略游戏中的图算法和空间算法，到面向开发者的 SDK 和工具。',
  'At <a href="https://www.digisky.com/" target="_blank" rel="noopener">Chengdu Digital Sky</a> (intern to full-time, two-plus years) I owned eight production systems for <a href="https://www.digisky.com/product/mo" target="_blank" rel="noopener">Mandate Order</a>, now on Steam Early Access: pathfinding for 1,000+ agents, spatial indexing, a data-driven skill system, and the input and UI frameworks.':
    '我在<a href="https://www.digisky.com/" target="_blank" rel="noopener">成都数字天空</a>工作了两年多（从实习到转正），负责 <a href="https://www.digisky.com/product/mo" target="_blank" rel="noopener">Mandate Order</a> 的八个线上系统，这款游戏现已在 Steam 抢先体验发售：包括支持 1,000+ 单位的寻路、空间索引、数据驱动的技能系统，以及输入和 UI 框架。',
  '<strong>Seeking 2027 full-time roles in C++ software systems, backend and infrastructure, and performance engineering.</strong> M.S. in Computer Science at <a href="https://www.usc.edu/" target="_blank" rel="noopener">USC</a>, May 2027 (current course: CSCI 566 Deep Learning). ICPC medalist; research assistant at UCLA\'s <a href="https://www.math.ucla.edu/aivc/" target="_blank" rel="noopener">AIVC Lab</a> and co-first author of <a href="#/research/articulatearena">ArticulateArena</a>. Recently: an <a href="#/projects/angle-graphics-sdk">ANGLE-based .NET graphics SDK</a> and <a href="#/projects/path-tracing-denoising">deep learning for path-tracing denoising</a> in PyTorch.':
    '<strong>正在寻找 2027 年游戏开发全职岗位，方向为 C++ 游戏系统、引擎与工具，以及性能优化。</strong>目前在 <a href="https://www.usc.edu/" target="_blank" rel="noopener">USC</a> 攻读计算机科学硕士，2027 年 5 月毕业（在修课程：CSCI 566 深度学习）。ICPC 奖牌获得者；UCLA <a href="https://www.math.ucla.edu/aivc/" target="_blank" rel="noopener">AIVC 实验室</a>研究助理，<a href="#/research/articulatearena">ArticulateArena</a> 共同第一作者。近期项目：基于 ANGLE 的 <a href="#/projects/angle-graphics-sdk">.NET 图形 SDK</a>，以及用 PyTorch 做的<a href="#/projects/path-tracing-denoising">路径追踪深度学习降噪</a>。',
  'Software Engineer · C++ Systems, Performance & Tooling': '游戏开发 · C++ 系统、性能与工具',

  // Stat strip
  'production systems owned in a shipped UE5 game': '个由我负责、已随 UE5 游戏上线的系统',
  'Mandate Order · Digital Sky': 'Mandate Order · 数字天空',
  'concurrent agents on dynamic road-graph routing': '个单位同时在动态路网上寻路',
  'Multi-source Dijkstra': '多源 Dijkstra',
  'less connectivity computation at a 1,000-unit workload': '1,000 单位规模下连通性计算量的降幅',
  'Spatial hashing · uniform grid': '空间哈希 · 均匀网格',
  'years of production C++, intern to full-time': '年线上 C++ 开发经验，从实习到全职',
  'Chengdu Digital Sky': '成都数字天空',

  // Work index
  'Shipped · UE5 · C++': '已上线 · UE5 · C++',
  'Research · co-first author': '科研 · 共同第一作者',
  'UE5 · PyTorch · ongoing': 'UE5 · PyTorch · 进行中',
  'Mass-Spring Soft Body': '质点弹簧软体',
  'Simulation · live demo': '仿真 · 在线演示',
  'Inverse Kinematics & Skinning': '逆向运动学与蒙皮',
  'Animation · live demo': '动画 · 在线演示',
  'Path Tracing Denoising': '路径追踪降噪',
  'ANGLE Graphics SDK': 'ANGLE 图形 SDK',

  // Command palette
  'Command palette': '命令面板',
  'Search projects, sections, links…': '搜索项目、栏目、链接…',
  Sections: '栏目',
  Elsewhere: '其他链接',
  Actions: '操作',
  'Toggle light / dark theme': '切换浅色 / 深色主题',
  'Switch to Chinese / English': '切换中文 / English',
  'No matches for': '没有匹配',
  move: '移动',
  open: '打开',
  results: '条结果',

  // Projects page
  'Project index': '项目目录',
  'Project index (compact)': '项目目录（紧凑）',
  projects: '个项目',
  'switch project': '切换项目',
  'Previous project': '上一个项目',
  'Next project': '下一个项目',
  'Adjacent projects': '相邻项目',
  '← Previous': '← 上一个',
  'Next project →': '下一个项目 →',
  'Live demo': '在线演示',
  Technologies: '技术栈',
  resources: '相关资源',
  'Technical notes & more visuals': '技术细节与更多图片',
  Results: '成果',
  'Systems I owned': '我负责的系统',
  'What I built': '我做了什么',
  'Write-up': '详细介绍',
  'Concept art': '概念美术',
  'technical notes': '技术细节',
  'Collapse notes': '收起细节',
  Illustration: '示意图',
  'Your browser does not support the video tag.': '你的浏览器不支持视频播放。',
  'Open full-size image': '查看大图',
  visuals: '图片',
  'Show visual': '显示图片',

  // Screenshot carousel
  'Mandate Order screenshots': 'Mandate Order 截图',
  'Mandate Order project screenshots': 'Mandate Order 项目截图',
  'Open full-size screenshot': '查看截图大图',
  'Previous screenshot': '上一张截图',
  'Next screenshot': '下一张截图',
  'Choose screenshot': '选择截图',
  'Show screenshot': '显示截图',
  'Play slideshow': '播放幻灯片',
  'Pause slideshow': '暂停幻灯片',
  'Official game screenshots ·': '官方游戏截图 ·',
  'Mandate Order — fortified settlement in an autumn mountain landscape':
    'Mandate Order：秋日山间的设防聚落',
  'Mandate Order — farmland, irrigation paths, and a riverside settlement':
    'Mandate Order：农田、水渠与河边聚落',
  'Mandate Order — archers attacking a fortified settlement': 'Mandate Order：弓箭手进攻设防聚落',
  'Mandate Order — snow-covered city and surrounding mountain terrain':
    'Mandate Order：雪中的城池与周围山地',

  // Experience and education labels
  'Advised by': '导师',
  Honors: '荣誉',
  Coursework: '课程',

  // Live demos
  Live: '实时',
  'Jacobian IK · 2D chain': '雅可比 IK · 二维关节链',
  'move the pointer to set the target · it follows a path when idle':
    '移动鼠标设置目标 · 空闲时目标会沿路径移动',
  'A planar re-creation of the solver structure, not the original C++ code: damped least squares Δθ = Jᵀ(JJᵀ + λ²I)⁻¹e with per-joint step clamping, or the Jacobian transpose for comparison. Push the target out of reach to see damping keep the chain calm.':
    '这是求解器结构的二维浏览器复现，不是原始 C++ 代码：阻尼最小二乘 Δθ = Jᵀ(JJᵀ + λ²I)⁻¹e，并对每个关节的步长做限制；也可以切换到雅可比转置法对比。把目标拖到够不着的地方，可以看到阻尼让关节链保持平稳。',
  'Interactive inverse kinematics chain following the pointer': '跟随鼠标的交互式逆向运动学关节链',
  'Damped LS': '阻尼最小二乘',
  'Mass-spring soft body · 2D': '质点弹簧软体 · 二维',
  'drag any node · flick it into the sphere': '拖动任意节点 · 把它甩向圆球',
  'A small in-browser re-creation of the idea, not the original C++ code: structural, shear and bend springs, constraint-based collisions, and an area-preserving pressure force. Springs colour by strain.':
    '这是该思路的一个小型浏览器复现，不是原始 C++ 代码：包含结构、剪切和弯曲弹簧，基于约束的碰撞，以及保持面积的压力。弹簧颜色表示形变大小。',
  'Interactive mass-spring soft body that can be dragged with the pointer':
    '可以用鼠标拖动的交互式质点弹簧软体',
  Pressure: '压力',
  on: '开',
  off: '关',
  Springs: '弹簧',
  'Drop again': '重新掉落',
  nodes: '个节点',
  springs: '根弹簧',
  area: '面积',
  'semi-implicit Euler': '半隐式欧拉',
  substeps: '个子步',

  // ── Dates and places ─────────────────────────────────────────
  'Sep 2026': '2026 年 9 月',
  'Aug 2026': '2026 年 8 月',
  'Jun 2026': '2026 年 6 月',
  'May 2026': '2026 年 5 月',
  'Jan 2026': '2026 年 1 月',
  'Dec 2025': '2025 年 12 月',
  'Jun 2023': '2023 年 6 月',
  'May 2023': '2023 年 5 月',
  'Dec 2022': '2022 年 12 月',
  'Oct 2022': '2022 年 10 月',
  'Aug 2022': '2022 年 8 月',
  'Jul 2022': '2022 年 7 月',
  'Jan 2026 – May 2027 (expected)': '2026 年 1 月 – 2027 年 5 月（预计）',
  'Jun 2026 – Present': '2026 年 6 月 – 至今',
  'Sep 2023 – Dec 2025': '2023 年 9 月 – 2025 年 12 月',
  'Sep 2020 – Jun 2023': '2020 年 9 月 – 2023 年 6 月',
  'Sep 2026 – Present': '2026 年 9 月 – 至今',
  'Jan – May 2026': '2026 年 1 月 – 5 月',
  'Nov – Dec 2025': '2025 年 11 月 – 12 月',
  'Spring 2026': '2026 年春季',
  'arXiv preprint · Sep 2026': 'arXiv 预印本 · 2026 年 9 月',
  'Los Angeles, CA': '美国加州洛杉矶',
  'Chengdu, China': '中国成都',

  // ── Updates ──────────────────────────────────────────────────
  'ArticulateArena: A Metric for Articulated Kinematics is on arXiv. Co-first author; contributions to joint-motion metric development and multi-model evaluation.':
    'ArticulateArena: A Metric for Articulated Kinematics 已发布在 arXiv。我是共同第一作者，参与了关节运动度量的设计和多模型评测。',
  Paper: '论文',
  'Project & demos': '项目主页与演示',
  'Mandate Order — the game I worked on as a C++ software engineer — launched in Steam Early Access on August 12.':
    '我作为 C++ 游戏开发参与制作的游戏 Mandate Order 于 8 月 12 日在 Steam 开启抢先体验。',
  'Joined the Artificial Intelligence & Visual Computing Lab at UCLA as a research assistant, advised by Prof. Chenfanfu Jiang, working on end-to-end texture generation and data augmentation for multi-part 3D assets.':
    '加入 UCLA 人工智能与视觉计算实验室（AIVC Lab）担任研究助理，导师为蒋陈凡夫教授，研究多部件 3D 资产的端到端纹理生成和数据增强。',
  'AIVC Lab': 'AIVC 实验室',
  'Finished the spring semester at USC: engine subsystems and a natural-language shader authoring tool in PrimeEngine, plus motion capture interpolation, inverse kinematics with skinning, and a mass-spring simulation.':
    '完成 USC 春季学期：在 PrimeEngine 中实现了引擎子系统和自然语言着色器编写工具，还完成了动作捕捉插值、带蒙皮的逆向运动学和质点弹簧仿真。',
  'Started the M.S. in Computer Science at USC, on the graphics track.':
    '开始在 USC 攻读计算机科学硕士，方向为图形学。',
  'Completed over two years at Chengdu Digital Sky, from intern to full-time C++ software engineer, building production systems for Mandate Order, a commercial strategy game.':
    '在成都数字天空工作两年多，从实习到全职做 C++ 游戏开发，为商业策略游戏 Mandate Order 开发线上系统。',

  // ── Skills ───────────────────────────────────────────────────
  'Production C++ systems and performance work, algorithms and data structures, software architecture and developer tooling, with depth in real-time graphics, simulation and deep learning.':
    '线上 C++ 系统与性能优化、算法与数据结构、软件架构与开发者工具，并在实时图形、仿真和深度学习方面有深入实践。',
  Languages: '编程语言',
  Systems: '系统',
  'Data Structures & Algorithms': '数据结构与算法',
  'Graph & Spatial Algorithms': '图算法与空间算法',
  'Performance Optimization': '性能优化',
  'Architecture & Tooling': '架构与工具',
  'Input & UI Frameworks': '输入与 UI 框架',
  'SDK & API Design': 'SDK 与 API 设计',
  'Code Generation': '代码生成',
  'Hot Reload': '热重载',
  'Editor & Debug Tools': '编辑器与调试工具',
  'Testing & Validation': '测试与验证',
  'Deterministic Rendering Tests': '确定性渲染测试',
  Benchmarking: '基准测试',
  'Multi-model Evaluation': '多模型评测',
  Graphics: '图形',
  Simulation: '仿真',
  Kinematics: '运动学',
  'Physics Simulation': '物理仿真',
  'Animation Systems': '动画系统',
  'Deep Learning': '深度学习',
  'Neural Denoising': '神经网络降噪',
  'Training-Data Pipelines': '训练数据管线',
  'Engines & Tools': '引擎与工具',

  // ── Awards ───────────────────────────────────────────────────
  'Silver Medal': '银牌',
  'Bronze Medal': '铜牌',
  'Gold Medal': '金牌',
  'First Prize': '一等奖',
  'Sichuan Provincial Collegiate Programming Contest': '四川省大学生程序设计竞赛',
  'ICPC Invitational — Shaanxi': 'ICPC 邀请赛（陕西）',
  'ICPC Invitational — Nanjing': 'ICPC 邀请赛（南京）',
  "CCPC Women's Finals": 'CCPC 女生专场',
  'Baidu Star Programming Contest (C/C++ Division)': '百度之星程序设计大赛（C/C++ 组）',
  'China Collegiate Algorithm Design & Programming Contest': '中国大学生算法设计与编程挑战赛',

  // ── Education ────────────────────────────────────────────────
  'University of Southern California': '南加州大学（USC）',
  'M.S. Computer Science': '计算机科学硕士',
  'Graphics track': '图形学方向',
  'Game Engine Development': '游戏引擎开发',
  'Computer Animation and Simulation': '计算机动画与仿真',
  'Foundations of Artificial Intelligence': '人工智能基础',
  'CSCI 566: Deep Learning and Its Applications (in progress)':
    'CSCI 566：深度学习及其应用（在修）',
  'Chengdu University of Information Technology': '成都信息工程大学',
  'B.Eng., School of Computer Science': '工学学士，计算机学院',
  'National Scholarship: 1st in program (2023)': '国家奖学金：专业第一（2023）',
  'University Merit Scholarship: Highest Tier (2021 & 2022)':
    '校级优秀奖学金：最高等级（2021、2022）',
  'Computer Graphics': '计算机图形学',
  'Data Structures': '数据结构',
  'Discrete Mathematics': '离散数学',
  'Probability Theory': '概率论',
  Databases: '数据库',
  'Software Engineering': '软件工程',
  'Network Game Programming': '网络游戏编程',
  'Unity Game Programming': 'Unity 游戏编程',
  'Unreal Engine Game Programming': 'Unreal Engine 游戏编程',

  // ── Experience ───────────────────────────────────────────────
  'Artificial Intelligence & Visual Computing Lab, UCLA': 'UCLA 人工智能与视觉计算实验室',
  'Research Assistant': '研究助理',
  'ArticulateArena paper': 'ArticulateArena 论文',
  'Prof. Chenfanfu Jiang': '蒋陈凡夫教授',
  'Co-first author of ArticulateArena: A Metric for Articulated Kinematics, available on arXiv.':
    'ArticulateArena: A Metric for Articulated Kinematics 的共同第一作者，论文已发布在 arXiv。',
  'Contributed to representation-invariant joint-motion metrics and standardized evaluation protocols for articulated objects.':
    '参与设计与表示方式无关的关节运动度量，以及铰接物体的标准化评测流程。',
  'Built and ran multi-model experiments covering model execution, quality assessment, and comparative analysis.':
    '搭建并运行多模型实验，涵盖模型运行、质量评估和对比分析。',
  'Chengdu Digital Sky Technology': '成都数字天空科技',
  'Software Engineer (C++ / Unreal Systems)': '游戏开发（C++ / Unreal 系统）',
  'Digital Sky': '数字天空',
  'Mandate Order on Steam': 'Steam 上的 Mandate Order',
  'Shipped production C++ systems for Mandate Order, a commercial Unreal Engine 5 strategy game released on Steam Early Access, growing from intern to full-time engineer.':
    '为商业 Unreal Engine 5 策略游戏 Mandate Order 开发并上线了多个 C++ 系统，游戏已在 Steam 抢先体验发售；从实习做到全职。',
  'Cut connectivity computation by 85% at the typical 1,000-unit workload with spatial hashing on a uniform grid; built a templated KD-tree, union-find and DBSCAN library for 5,000+ unit scenes.':
    '用均匀网格上的空间哈希，把典型 1,000 单位场景下的连通性计算量降低了 85%；为 5,000+ 单位的场景实现了模板化的 KD 树、并查集和 DBSCAN 库。',
  'Built a threat-aware pathfinding service (heap-based multi-source Dijkstra) for 1,000+ concurrent agents, with batched, queue-based state sync to the AI thread.':
    '开发了威胁感知寻路服务（基于堆的多源 Dijkstra），支持 1,000+ 个单位同时寻路，并通过批量队列把状态同步给 AI 线程。',
  'Owned the data-driven skill system for 100+ abilities on the project’s multithreaded ECS: triggers decoupled from execution, commander skill preview and release, and Unreal Mass projectile processors.':
    '负责项目多线程 ECS 上的数据驱动技能系统，覆盖 100+ 个技能：触发与执行解耦、将领技能预览与释放，以及 Unreal Mass 投射物处理器。',
  'Designed reusable input and UI frameworks: prioritized input contexts with reference-counted action monitoring, a stack-based UI layer manager, and a registry-based settings system.':
    '设计了可复用的输入和 UI 框架：带优先级的输入上下文和引用计数的动作监听、基于栈的 UI 层级管理器，以及基于注册表的设置系统。',
  'Implemented Floyd–Warshall routing with cached next hops for command relay across 50+ signal-tower nodes, and Voronoi land partitioning with grid-approximated adjacency.':
    '用 Floyd–Warshall 实现军令传递路由并缓存下一跳，覆盖 50+ 个烽火台节点；实现了 Voronoi 地块划分，用网格近似计算相邻关系。',
  'Built reusable behavior-tree components, reducing implementation time by approximately 50%.':
    '开发了可复用的行为树组件，开发时间减少约 50%。',
  'Mandate Order Steam store page': 'Mandate Order 的 Steam 商店页面',
  'Mandate Order on Steam Early Access': 'Steam 抢先体验中的 Mandate Order',
  'Data Structures & Algorithms Lab, Chengdu University of Information Technology':
    '成都信息工程大学 数据结构与算法实验室',
  Member: '成员',
  'University website': '学校官网',
  'Represented the university at ICPC, CCPC and Lan Qiao Cup, winning multiple medals including an ICPC silver.':
    '代表学校参加 ICPC、CCPC 和蓝桥杯，获得多枚奖牌，包括 ICPC 银牌。',
  'Mentored new team members on algorithmic approach and contest strategy; prepared daily practice sets, ran mock contests, and taught at winter and summer training camps.':
    '指导新队员的解题思路和比赛策略；准备每日训练题、组织模拟赛，并在寒暑假集训中授课。',

  // ── Research ─────────────────────────────────────────────────
  'Co-first author': '共同第一作者',
  'Evaluating articulated objects by the motions their joints induce, rather than comparing joint parameters independently.':
    '通过关节带来的运动来评估铰接物体，而不是单独比较各个关节参数。',
  'ArticulateArena-20K: 19,977 articulated objects with verified kinematics':
    'ArticulateArena-20K：19,977 个运动学经过验证的铰接物体',
  'My contributions include joint-motion metric development and multi-model evaluation experiments at UCLA’s Artificial Intelligence & Visual Computing Lab.':
    '我在 UCLA 人工智能与视觉计算实验室的贡献包括关节运动度量的设计和多模型评测实验。',
  'The collaborative work introduces a representation-invariant metric for joint motion, extends it to kinematic trees, and evaluates reconstruction methods on a shared articulated-object suite.':
    '这项合作研究提出了一种与表示方式无关的关节运动度量，把它推广到运动学树，并在统一的铰接物体数据集上评测各种重建方法。',
  'Read paper': '阅读论文',
  'Co-first author. arXiv preprint, September 27, 2026; submitted to ICLR. See the linked paper for the complete author list as published.':
    '共同第一作者。arXiv 预印本，2026 年 9 月 27 日发布；已投稿 ICLR。完整作者列表以论文为准。',
  'Fixed, prismatic, revolute, continuous and helical joints with example articulated objects':
    '固定、平移、旋转、连续和螺旋五种关节及对应的铰接物体示例',
  'Five joint types covered by the metric. Figure from ArticulateArena.':
    '该度量覆盖的五种关节类型。图片来自 ArticulateArena 论文。',
  'Articulated Objects': '铰接物体',
  Evaluation: '评测',
  'My contributions: metric and evaluation': '我的贡献：度量与评测',
  'Metric design': '度量设计',
  Experiments: '实验',
  'Representation-invariant joint-motion metric': '与表示无关的关节运动度量',
  'Kinematic trees': '运动学树',

  // ── Project groups ───────────────────────────────────────────
  'Production Work · Digital Sky': '工作项目 · 数字天空',
  'C++ gameplay and engine systems for Mandate Order, released on Steam Early Access.':
    '为 Mandate Order 开发的 C++ 玩法与引擎系统，游戏已在 Steam 抢先体验发售。',
  'Engine & Rendering': '引擎与渲染',
  'Rendering pipelines and engine-level systems.': '渲染管线与引擎层系统。',
  'Animation & Simulation': '动画与仿真',
  'Character animation and physical simulation, with the tooling to measure whether they are right.':
    '角色动画与物理仿真，以及用来验证结果是否正确的工具。',
  'Production Systems & Gameplay': '系统与玩法',
  'Navigation, geometry and rendering systems in Unreal Engine 5 projects.':
    'Unreal Engine 5 项目中的导航、几何与渲染系统。',

  // Common project text
  'Code generation': '代码生成',
  'Deep learning': '深度学习',
  'Physics simulation': '物理仿真',
  'Multi-model evaluation': '多模型评测',
  'Source code': '源代码',
  Multithreading: '多线程',

  // ANGLE Graphics SDK
  'ANGLE Graphics SDK & Developer Tools': 'ANGLE 图形 SDK 与开发者工具',
  'A .NET graphics SDK built on ANGLE, connecting a native C++ EGL bridge to managed OpenGL ES APIs and developer tools.':
    '基于 ANGLE 的 .NET 图形 SDK，通过原生 C++ EGL 桥接层连接托管的 OpenGL ES API 和开发者工具。',
  'GLES 3.0 bindings generated from Khronos XML, with idempotency tests':
    '从 Khronos XML 自动生成 GLES 3.0 绑定，并有幂等性测试',
  'Deterministic rendering comparisons across native C++ and managed C# demos':
    '原生 C++ 与托管 C# 示例之间的确定性渲染对比',
  'Built a native EGL bridge and dynamically loaded GLES entry points for offscreen rendering with pixel readback and window-surface presentation. The managed SDK exposes context-bound GPU resources with explicit disposal and thread-access checks.':
    '实现了原生 EGL 桥接层并动态加载 GLES 入口函数，支持带像素回读的离屏渲染和窗口表面显示。托管 SDK 提供与上下文绑定的 GPU 资源，带显式释放和线程访问检查。',
  'Generated GLES 3.0 bindings from Khronos XML, preserving existing signatures and testing generator idempotency. Native C++ and managed C# demos produce images for deterministic rendering comparisons.':
    '从 Khronos XML 生成 GLES 3.0 绑定，保留已有函数签名，并测试生成器的幂等性。原生 C++ 和托管 C# 示例输出图像，用于确定性渲染对比。',
  'Added a WinForms demo host with renderer/plugin hot reload, shader recompilation with last-working-shader fallback, and rendering benchmarks to make iteration and validation easier.':
    '加入 WinForms 演示宿主，支持渲染器和插件热重载、着色器重新编译（失败时回退到上一个可用的着色器）以及渲染基准测试，让迭代和验证更方便。',
  'Source code & documentation': '源代码与文档',
  'Built on the upstream ANGLE project; my work is the native bridge, managed SDK, validation, and developer tooling. Windows / .NET 9.':
    '基于上游 ANGLE 项目；我的工作是原生桥接层、托管 SDK、验证和开发者工具。Windows / .NET 9。',
  'Managed C# SDK connected through a native C++ EGL bridge to ANGLE and the GPU':
    '托管 C# SDK 通过原生 C++ EGL 桥接层连接到 ANGLE 和 GPU',
  'SDK architecture: managed resources and API bindings over a native EGL bridge.':
    'SDK 架构：原生 EGL 桥接层之上的托管资源和 API 绑定。',
  'Native EGL bridge and GPU resource API': '原生 EGL 桥接层与 GPU 资源 API',
  'C++ / C# interop': 'C++ / C# 互操作',
  'Resource lifetime': '资源生命周期',
  'Thread safety': '线程安全',
  'Generated GLES bindings': '自动生成 GLES 绑定',
  'Idempotency tests': '幂等性测试',
  'Deterministic tests': '确定性测试',
  'Developer tooling: hot reload and benchmarks': '开发者工具：热重载与基准测试',
  'Failure fallback': '失败回退',
  'ANGLE graphics SDK architecture': 'ANGLE 图形 SDK 架构',

  // Path tracing denoising
  'Pipeline overview': '流程概览',
  'Path Tracing Denoising with Deep Learning': '基于深度学习的路径追踪降噪',
  'Personal project · In progress': '个人项目 · 进行中',
  'An ongoing deep-learning project combining UE5 training-data collection, PyTorch neural denoiser training, and baseline comparisons to study reconstruction quality and temporal stability in low-sample-count path tracing.':
    '一个进行中的深度学习项目：结合 UE5 训练数据采集、PyTorch 神经网络降噪器训练和基线对比，研究低采样路径追踪的重建质量和时间稳定性。',
  'Built an Unreal Engine 5 data collection pipeline to prepare path-traced rendering data for neural denoiser training.':
    '搭建了 Unreal Engine 5 数据采集管线，为神经网络降噪器训练准备路径追踪渲染数据。',
  'Implemented an SVGF denoising baseline and integrated NVIDIA DLSS Ray Reconstruction into a comparative benchmarking pipeline.':
    '实现了 SVGF 降噪基线，并把 NVIDIA DLSS Ray Reconstruction 集成到对比基准测试流程中。',
  'Currently training a neural denoiser in PyTorch to investigate reconstruction quality and temporal stability at low sample counts. The project is ongoing; measured results will be added as experiments are completed.':
    '目前正在用 PyTorch 训练神经网络降噪器，研究低采样数下的重建质量和时间稳定性。项目仍在进行中，实验完成后会补充测量结果。',
  'Personal project, started September 2026. Neural denoiser training and evaluation are ongoing.':
    '个人项目，2026 年 9 月开始。神经网络降噪器的训练和评测仍在进行中。',
  'UE5 rendering data feeding baseline comparison and neural denoiser training, evaluated for quality and temporal stability':
    'UE5 渲染数据用于基线对比和神经网络降噪器训练，并评估质量和时间稳定性',
  'Project workflow; neural denoiser training is still in progress.':
    '项目流程；神经网络降噪器的训练仍在进行中。',
  'Path-tracing denoising training and evaluation workflow': '路径追踪降噪的训练与评测流程',
  'UE5 training-data pipeline': 'UE5 训练数据管线',
  'Data pipeline': '数据管线',
  'Baselines and benchmarking harness': '基线与基准测试框架',
  'Neural denoiser training (in progress)': '神经网络降噪器训练（进行中）',
  'Temporal stability': '时间稳定性',

  // Engine subsystems
  'AI-Assisted Developer Tool & Multithreaded ECS Real-Time Engine':
    'AI 辅助开发工具与多线程 ECS 实时引擎',
  'A real-time engine extended with multithreaded ECS simulation, skeletal animation and GPU culling, plus an AI-assisted shader authoring tool that hot-swaps HLSL into the running engine with a safe fallback. Built on the course-provided PrimeEngine framework.':
    '一个实时引擎，扩展了多线程 ECS 仿真、骨骼动画和 GPU 剔除，并配有 AI 辅助的着色器编写工具，可以把 HLSL 热替换到正在运行的引擎里，失败时安全回退。基于课程提供的 PrimeEngine 框架。',
  'Shader changes applied live, with no engine restart': '着色器修改实时生效，无需重启引擎',
  'Failed compiles fall back to the last working shader': '编译失败时回退到上一个可用的着色器',
  'An external authoring tool connects to a live engine session. Manual controls, presets and natural-language prompts generate editable parameters or HLSL snippets inside fixed templates, which keeps AI output constrained and reviewable.':
    '外部编写工具连接到正在运行的引擎。手动调节、预设和自然语言提示都会在固定模板内生成可编辑的参数或 HLSL 片段，让 AI 的输出受约束、可审查。',
  'Applying a change hot-reloads the shader without restarting the engine. A failed compile keeps the last working shader and reports the error, so a bad edit never takes down the running session.':
    '应用修改时会热重载着色器，不用重启引擎。编译失败会保留上一个可用的着色器并报告错误，所以一次错误的修改不会让运行中的引擎崩溃。',
  'On the engine side I added multithreaded ECS physics with independent update cycles, layered skeletal animation, and GPU instance culling through the Rendering Hardware Interface.':
    '在引擎端，我加入了更新周期相互独立的多线程 ECS 物理、分层骨骼动画，以及通过渲染硬件接口（RHI）实现的 GPU 实例剔除。',
  'Live shader demo': '实时着色器演示',
  'Course repository': '课程仓库',
  'PrimeEngine is the course framework; the subsystems and tooling described here are my own work.':
    'PrimeEngine 是课程框架；这里介绍的子系统和工具是我自己完成的。',
  'The boss aura changing from orange fireballs to cyan orbs after applying a generated effect':
    '应用生成的效果后，Boss 光环从橙色火球变成青色光球',
  'Before, prompt, after: the boss aura goes from orange fireballs to cyan orbs on Apply, with the engine still running. Tool on the right, live session on the left.':
    '修改前、提示词、修改后：点击 Apply 后，Boss 光环从橙色火球变成青色光球，引擎全程保持运行。右边是工具，左边是运行中的引擎。',
  'Shader authoring tool interface': '着色器编写工具界面',
  'The authoring tool: presets, manual parameters, and natural-language input':
    '编写工具：预设、手动参数和自然语言输入',
  'AI-assisted authoring tool for a live engine': '面向运行中引擎的 AI 辅助编写工具',
  'Developer tooling': '开发者工具',
  'LLM integration': 'LLM 集成',
  'Constrained generation': '受约束的生成',
  'Hot reload with safe fallback': '带安全回退的热重载',
  'Hot reload': '热重载',
  'Fault tolerance': '容错',
  'Error handling': '错误处理',
  'Multithreaded ECS engine subsystems': '多线程 ECS 引擎子系统',
  'Skeletal animation': '骨骼动画',
  'GPU culling': 'GPU 剔除',

  // Software rasterizer
  'C++ Software Rasterizer': 'C++ 软件光栅化渲染器',
  'A CPU software rasterizer written in C++, with a programmable shader pipeline and textured OBJ rendering.':
    '用 C++ 编写的 CPU 软件光栅化渲染器，带可编程着色器管线，支持渲染带纹理的 OBJ 模型。',
  '5M+ fragments/sec': '每秒 5M+ 片元',
  'Renders meshes of 10,000+ vertices': '可渲染 10,000+ 顶点的网格',
  'Implemented rasterization, Z-buffering and a programmable shader pipeline from first principles, with no external graphics API.':
    '不依赖任何图形 API，从零实现了光栅化、Z 缓冲和可编程着色器管线。',
  'Added perspective-correct interpolation and Blinn–Phong lighting; compared flat, Gouraud and Phong shading on the same geometry.':
    '加入了透视校正插值和 Blinn–Phong 光照；在同一几何体上对比了 Flat、Gouraud 和 Phong 着色。',
  'Flat, Gouraud and Phong shading compared': 'Flat、Gouraud 和 Phong 着色对比',
  'Flat, Gouraud and Phong shading, same geometry and light':
    'Flat、Gouraud 和 Phong 着色，几何体和光照相同',
  'Textured character mesh rendered by the software rasterizer':
    '软件光栅化渲染器渲染的带纹理角色网格',
  'Textured OBJ mesh, rasterized and shaded on the CPU':
    '带纹理的 OBJ 网格，在 CPU 上完成光栅化和着色',
  'Rasterization pipeline from first principles': '从零实现的光栅化管线',
  'Programmable shaders': '可编程着色器',
  'Perspective-correct shading': '透视校正着色',
  Interpolation: '插值',
  'Shading models': '着色模型',

  // Mocap
  'Motion Capture Interpolation & Analysis': '动作捕捉插值与分析',
  'ASF/AMC motion reconstruction across four interpolation schemes, with tooling built to see and measure the difference between them.':
    '用四种插值方法重建 ASF/AMC 动作数据，并开发了工具来直观对比和测量它们的差异。',
  'Bezier quaternion interpolation costs 21x linear Euler — 1108 ms against 52 ms, averaged over 1000 runs':
    'Bezier 四元数插值耗时是线性欧拉插值的 21x：1000 次运行平均 1108 ms 对 52 ms',
  'Reconstructed motion capture frames using linear Euler, Bezier Euler, SLERP quaternion, and Bezier SLERP quaternion interpolation.':
    '用线性欧拉、Bezier 欧拉、SLERP 四元数和 Bezier SLERP 四元数四种插值方法重建动作捕捉帧。',
  'Built the analysis and visualization tooling alongside it: overlapping playback against the input motion, ghosting trails, motion paths, gimbal lock detection, and benchmarks comparing each scheme on visual quality against runtime cost.':
    '同时开发了分析和可视化工具：与输入动作叠加回放、残影轨迹、运动路径、万向节锁检测，以及比较各方法视觉质量和运行耗时的基准测试。',
  'The comparison quantified what the theory predicts. On root rotation the input peaks near -105 degrees; SLERP tracks it to -117 while linear Euler overshoots past -135, and the cost table shows what that accuracy is worth in milliseconds.':
    '对比结果量化了理论上的预期。在根节点旋转上，输入的峰值约为 -105 度；SLERP 跟到 -117 度，而线性欧拉冲过了 -135 度。耗时表则说明了这份精度要多花多少毫秒。',
  'Input, linear Euler and SLERP quaternion angle curves compared':
    '输入、线性欧拉和 SLERP 四元数的角度曲线对比',
  'Root Z rotation: linear Euler overshoots where SLERP tracks the input':
    '根节点 Z 轴旋转：线性欧拉出现过冲，SLERP 能贴合输入',
  'Computation time per interpolation scheme': '各插值方法的计算耗时',
  'Average time per run over 1000 repeats': '重复 1000 次的平均单次耗时',
  'Input motion played back against SLERP quaternion reconstruction':
    '输入动作与 SLERP 四元数重建结果对比回放',
  'Input motion overlaid with the SLERP quaternion reconstruction':
    '输入动作与 SLERP 四元数重建结果叠加显示',
  'Four interpolation schemes': '四种插值方法',
  Quaternions: '四元数',
  'Bézier curves': '贝塞尔曲线',
  'Analysis and visualization tooling': '分析与可视化工具',
  Visualization: '可视化',
  'Debug tooling': '调试工具',
  'Accuracy measured against cost': '精度与耗时的权衡测量',
  'Trade-off analysis': '权衡分析',

  // IK
  'Inverse Kinematics with Skinning': '带蒙皮的逆向运动学',
  'An interactive IK system where dragging a handle solves for joint angles and the mesh deforms in real time — with the Jacobian obtained by automatically differentiating the forward kinematics.':
    '一个交互式 IK 系统：拖动控制点就会求解关节角度，网格实时变形；雅可比矩阵通过对正向运动学自动微分得到。',
  'Forward kinematics composes global joint transforms from local Euler angles under Maya conventions (M = T · JO · R) with configurable rotation orders; linear blend skinning drives the mesh from the resulting transforms.':
    '正向运动学按 Maya 约定（M = T · JO · R）由局部欧拉角组合出关节的全局变换，旋转顺序可配置；线性混合蒙皮再用这些变换驱动网格。',
  'IK solves (JᵀJ + αI)Δθ = JᵀΔb with Tikhonov regularisation, using ADOL-C to differentiate the forward kinematics into the Jacobian and Eigen’s LDLT to solve it. A pseudoinverse solver built on SVD is available at runtime as an alternative, since it degrades more gracefully on rank-deficient configurations.':
    'IK 使用 Tikhonov 正则化求解 (JᵀJ + αI)Δθ = JᵀΔb：用 ADOL-C 对正向运动学自动微分得到雅可比矩阵，再用 Eigen 的 LDLT 求解。运行时还可以切换到基于 SVD 的伪逆求解器，它在秩亏的姿态下表现更稳。',
  'Dual quaternion skinning can be toggled against LBS, which removes the candy-wrapper volume loss that shows up at the armadillo’s shoulders under large joint rotations.':
    '可以在对偶四元数蒙皮和 LBS 之间切换。对偶四元数蒙皮消除了犰狳模型肩部在大角度旋转时出现的“糖纸扭曲”体积塌陷。',
  'Handles can also be placed at mesh vertices rather than joints. There the ADOL-C tape records the entire pipeline — forward kinematics, skinning transforms, blend — so the Jacobian maps joint angles directly to vertex positions.':
    '控制点也可以放在网格顶点上，而不只是关节上。这时 ADOL-C 会记录整个流程（正向运动学、蒙皮变换、混合），所以雅可比矩阵直接把关节角度映射到顶点位置。',
  'Large drags are subdivided into up to three intermediate solves with the per-joint angle change clamped, which converges more reliably than one long step. A scripted stair climb drives four handles at once, with parabolic foot arcs and the root translating to track the body.':
    '大幅拖动会被拆成最多三次中间求解，并限制每个关节的角度变化，比一步到位收敛得更可靠。脚本化的爬楼梯动画同时驱动四个控制点，脚部走抛物线，根节点随身体平移。',
  'Linear blend skinning compared with dual quaternion skinning':
    '线性混合蒙皮与对偶四元数蒙皮对比',
  'Linear blend skinning, left; dual quaternion skinning, right':
    '左：线性混合蒙皮；右：对偶四元数蒙皮',
  'IK and skinning demo across armadillo, dragon and hand models':
    '在犰狳、龙和手部模型上的 IK 与蒙皮演示',
  'Automated pass over three rigs: IK solvers, skinning modes, vertex handles':
    '在三个骨架上自动演示：IK 求解器、蒙皮模式、顶点控制点',
  'Forward kinematics and skinning': '正向运动学与蒙皮',
  'Linear algebra': '线性代数',
  'Transform hierarchies': '变换层级',
  'Linear blend skinning': '线性混合蒙皮',
  'Jacobian IK solver': '雅可比 IK 求解器',
  'Automatic differentiation': '自动微分',
  'Least squares': '最小二乘',
  'Dual quaternion skinning': '对偶四元数蒙皮',
  'Dual quaternions': '对偶四元数',
  'Volume preservation': '体积保持',
  'Handles on mesh vertices': '网格顶点上的控制点',
  'End-to-end Jacobian': '端到端雅可比矩阵',
  'Stable large drags and scripted motion': '稳定的大幅拖动与脚本动画',
  'Numerical stability': '数值稳定性',
  'Step clamping': '步长限制',

  // Jello
  'Mass-Spring Deformable Simulation': '质点弹簧可变形体仿真',
  'An 8×8×8 mass-spring lattice with structural, shear and bend springs, integrated with Euler or RK4 and colliding against analytic geometry.':
    '一个 8×8×8 的质点弹簧网格，包含结构、剪切和弯曲弹簧，用欧拉法或 RK4 积分，并与解析几何体发生碰撞。',
  'Collision response is constraint-based rather than penalty-based. A penalty spring injects energy on fast impacts and eventually explodes; resolving positions against the constraint instead stays stable.':
    '碰撞响应基于约束而不是惩罚力。惩罚弹簧在高速碰撞时会注入能量，最终导致仿真爆炸；直接按约束修正位置则能保持稳定。',
  'A volume-conservation pressure force keeps the lattice from collapsing or inverting during high-speed collisions and fast mouse drags. That one force is what made the simulation robust enough to be worth playing with.':
    '体积守恒的压力让网格在高速碰撞和快速拖动时不会塌陷或翻转。正是这一个力让仿真稳定到值得上手玩。',
  'Past the box walls, the cube collides against inclined planes, spheres and cones, and against a second cube through node-to-node repulsion. Force fields are sampled by trilinear interpolation.':
    '除了盒子墙壁，立方体还会与斜面、球体和圆锥碰撞，并通过节点间斥力与另一个立方体碰撞。力场通过三线性插值采样。',
  'A travelling sine wave field with buoyancy and Stokes drift carries the cube along like water. Dragging works both globally, with the force aligned to the camera so the cube moves the way the mouse does, and per-node through a spring anchor that pulls neighbouring points along smoothly.':
    '带浮力和 Stokes 漂移的行进正弦波场会像水流一样带动立方体。拖动支持两种方式：整体拖动时力与相机对齐，立方体跟着鼠标方向移动；单节点拖动时通过弹簧锚点平滑地带动周围的点。',
  'Deformable cube in a scene with helix, sphere, cone and inclined planes':
    '场景中的可变形立方体，周围有螺旋体、球体、圆锥和斜面',
  'Collision geometry: helix, sphere, cone and inclined planes':
    '碰撞几何体：螺旋体、球体、圆锥和斜面',
  'Mass-spring cube simulation': '质点弹簧立方体仿真',
  'Constraint-based collision response with volume conservation': '基于约束的碰撞响应，带体积守恒',
  'Constraint-based collision response': '基于约束的碰撞响应',
  Constraints: '约束',
  'Volume-preserving pressure': '保持体积的压力',
  Robustness: '鲁棒性',
  'Collisions with analytic geometry': '与解析几何体的碰撞',
  'Collision detection': '碰撞检测',
  'Trilinear interpolation': '三线性插值',
  'Force fields and interaction': '力场与交互',
  'Force fields': '力场',
  'Interaction design': '交互设计',

  // Mandate Order
  'Software Engineer (C++)': '游戏开发（C++）',
  'Algorithms & Data Structures': '算法与数据结构',
  'System Design': '系统设计',
  'Production C++ on a shipped Unreal Engine 5 4X strategy game, intern to full-time over two-plus years. I owned eight systems across graph algorithms, spatial indexing, data-driven gameplay, and input and UI frameworks.':
    '一款已上线的 Unreal Engine 5 4X 策略游戏，我在这里写了两年多的线上 C++ 代码，从实习到全职。我负责八个系统，涵盖图算法、空间索引、数据驱动玩法，以及输入和 UI 框架。',
  '85% less connectivity computation at the typical 1,000-unit workload':
    '典型 1,000 单位场景下连通性计算量减少 85%',
  '1,000+ concurrent agents served by the pathfinding system': '寻路系统同时服务 1,000+ 个单位',
  '8 production systems owned, from algorithms to frameworks': '负责 8 个线上系统，从算法到框架',
  'Shipped on Steam Early Access, 12 Aug 2026': '2026 年 8 月 12 日在 Steam 抢先体验上线',
  'A Warring States 4X strategy game by Chengdu Digital Sky with real-time battles of thousands of units. The engine architecture (a multithreaded ECS with GPU instancing at 10,000+ entities) belonged to the project; the systems below are the ones I designed and owned on top of it.':
    '成都数字天空开发的战国题材 4X 策略游戏，实时战斗规模达数千个单位。引擎架构（支持 10,000+ 实体 GPU 实例化的多线程 ECS）属于项目本身；下面这些系统是我在它之上设计并负责的。',
  'Official Site': '官网',
  'Content here complies with the project confidentiality agreement.': '此处内容符合项目保密协议。',
  'Ancient chariot': '古代战车',
  'Character portrait': '角色立绘',
  'Siege weapon': '攻城器械',
  'Threat-aware pathfinding service': '威胁感知寻路服务',
  'A road map where a blue route bends around a hatched danger zone while the dashed shortest path cuts through it':
    '一张道路图：蓝色路线绕开了斜线标出的危险区，而虚线表示的最短路径直接穿过危险区',
  'Routes bend around danger, for 1,000+ concurrent agents.':
    '路线会绕开危险区域，同时服务 1,000+ 个单位。',
  'Graph algorithms': '图算法',
  'Priority queue': '优先队列',
  'Message queue': '消息队列',
  'Heap-based multi-source Dijkstra over a road graph that changes at runtime. Edge weights combine distance, road type, ownership and nearby threats, serving 1,000+ concurrent agents.':
    '在运行时会变化的路网上做基于堆的多源 Dijkstra。边权综合了距离、道路类型、领地归属和附近的威胁，同时服务 1,000+ 个单位。',
  'Road updates are batched into commands and handed to the AI thread through a queue instead of sharing state across threads.':
    '道路更新被批量打包成命令，通过队列交给 AI 线程，而不是在线程之间共享状态。',
  'Spatial indexing and connectivity': '空间索引与连通性',
  'Spatial hashing': '空间哈希',
  'Uniform grid': '均匀网格',
  'KD-tree': 'KD 树',
  'Union-find': '并查集',
  Profiling: '性能分析',
  'Unit grouping needs connected components of soldiers within a distance threshold, rebuilt in real time for selection, formations and pathfinding.':
    '单位分组需要找出距离阈值内士兵的连通分量，并为选取、阵型和寻路实时重建。',
  'For the typical 1,000-unit workload I replaced the naive search with spatial hashing on a uniform grid, cutting connectivity computation by 85%. A templated k-dimensional KD-tree (with union-find and DBSCAN) is kept for 5,000–6,000-unit scenes, where it pays off. Both paths are instrumented with stat counters.':
    '针对典型的 1,000 单位场景，我把朴素搜索换成均匀网格上的空间哈希，连通性计算量减少了 85%。模板化的 k 维 KD 树（配合并查集和 DBSCAN）保留给 5,000–6,000 单位的场景，在那里它更划算。两条路径都加了统计计数器。',
  'Connected components computed over unit clusters': '对单位集群计算连通分量',
  'Command relay routing': '军令传递路由',
  'Beacon towers on hills linked into a network; a blue signal hops along the shortest chain from a command tent to distant soldiers':
    '山上的烽火台连成网络；蓝色信号沿最短链路从指挥帐篷逐跳传给远处的士兵',
  'Orders hop tower to tower along the shortest chain.': '军令沿最短链路在烽火台之间逐跳传递。',
  Caching: '缓存',
  'Complexity trade-offs': '复杂度权衡',
  'All-pairs shortest paths and next hops per beacon network, cached and rebuilt only when the network changes: an O(V³) rebuild buys constant-time lookups for every order.':
    '为每个烽火台网络计算全源最短路径和下一跳，结果缓存起来，只在网络变化时重建：用一次 O(V³) 的重建换来每条军令的常数时间查询。',
  'Command relay through signal beacons': '通过烽火台传递军令',
  'Voronoi land partitioning': 'Voronoi 地块划分',
  'Computational geometry': '计算几何',
  'Grid spatial index': '网格空间索引',
  'Graph traversal': '图遍历',
  Heap: '堆',
  'Imports SVG Voronoi cells as land plots. Because plots have deliberate gaps, adjacency is approximated on a bounded grid (16–64 cells per axis), trading precision for speed.':
    '把 SVG 中的 Voronoi 单元导入为地块。由于地块之间刻意留有间隙，相邻关系在有界网格上近似计算（每个轴 16–64 格），用精度换速度。',
  'Construction expands outward from a central building, taking the next plot from a heap ordered by occupancy and distance.':
    '建设从中心建筑向外扩展，每次从按占用情况和距离排序的堆中取出下一个地块。',
  'Voronoi-based plot management': '基于 Voronoi 的地块管理',
  'Dynamic frontline extraction': '动态前线提取',
  'Grid algorithms': '网格算法',
  'Boundary extraction': '边界提取',
  'Real-time updates': '实时更新',
  'Tracks faction ownership per grid cell, collects the edges between opposing cells into continuous border segments, and smooths them with sine offsets.':
    '记录每个网格的阵营归属，把敌对格子之间的边收集成连续的边界线段，再用正弦偏移让它更平滑。',
  'Dynamic battle frontline': '动态战场前线',
  'Input framework and command handling': '输入框架与指令处理',
  'Framework design': '框架设计',
  'API design': 'API 设计',
  'Reference counting': '引用计数',
  'State machine': '状态机',
  'Reusable input APIs on Unreal Enhanced Input: prioritized mapping contexts, reference-counted action monitoring and action allow/deny lists, shared across game modes.':
    '基于 Unreal Enhanced Input 的可复用输入 API：带优先级的映射上下文、引用计数的动作监听，以及动作白名单和黑名单，在各个游戏模式之间共用。',
  'A configuration-driven instruction manager for selection and command gestures, plus an in-game debug view of firing actions.':
    '配置驱动的指令管理器，处理选取和指令手势，还有一个游戏内调试视图，显示正在触发的动作。',
  'UI layer stack and settings system': 'UI 层级栈与设置系统',
  'UI architecture': 'UI 架构',
  'Stack-based navigation': '基于栈的导航',
  'Registry pattern': '注册表模式',
  'Reusable components': '可复用组件',
  'A CommonUI manager with per-player root layouts and tagged layer stacks for predictable screen navigation, and a settings system built on a registry with reusable controls.':
    '一个 CommonUI 管理器，为每个玩家提供根布局和带标签的层级栈，让界面跳转可预测；还有一个基于注册表、带可复用控件的设置系统。',
  'Data-driven skill system': '数据驱动的技能系统',
  'Data-driven design': '数据驱动设计',
  'Event-driven architecture': '事件驱动架构',
  Decoupling: '解耦',
  'Configuration-driven system for 100+ abilities across commanders and AI units, with triggers decoupled from execution so abilities are added and tuned in configuration rather than code.':
    '配置驱动的系统，覆盖将领和 AI 单位的 100+ 个技能。触发与执行解耦，所以新增和调整技能只需改配置，不用改代码。',
  'Projectiles run as Mass ECS entities through processors I wrote for initialization, movement, collision and hits.':
    '投射物作为 Mass ECS 实体运行，由我编写的处理器负责初始化、移动、碰撞和命中。',

  // Sight Tour
  'Post-Process Materials': '后处理材质',
  'Stereo Rendering': '立体渲染',
  'Amblyopia rehabilitation built on custom stereo rendering — channel-isolated content and a hand-written anaglyph post-process material that puts a therapeutic target in front of one eye at a time.':
    '基于自定义立体渲染的弱视康复游戏：通过颜色通道隔离的内容和手写的红青立体后处理材质，每次只让一只眼睛看到训练目标。',
  'A first-person game supporting vision rehabilitation for children with amblyopia. It is not really a shooter: the weapon solves arithmetic problems, and objects carry grating textures chosen to stimulate the weaker eye. The rendering work is what makes the therapy possible.':
    '一款帮助弱视儿童做视力康复的第一人称游戏。它其实不算射击游戏：武器是用来解算术题的，物体表面带有刺激弱视眼的光栅纹理。正是渲染上的工作让这种训练成为可能。',
  'Shape recognition challenge': '形状识别挑战',
  'Collect shape-matching spheres and strike the corresponding target':
    '收集形状匹配的球，并击中对应的目标',
  'Anaglyph 3D effect': '红青立体 3D 效果',
  'Red-cyan stereoscopic view with arithmetic challenges': '带算术挑战的红青立体画面',
  'Fine vision training': '精细视力训练',
  'Objects that demand fine visual attention are drawn in the red channel only (255, 0, 0) — the floating answer above each ball, for instance. Behind red-cyan glasses, only the red lens resolves that text. Placing the amblyopic eye behind the red lens forces it to do the reading, so both eyes stay engaged while the weaker one carries the detail work.':
    '需要仔细看的物体只画在红色通道 (255, 0, 0) 里，比如每个球上方漂浮的答案。戴上红青眼镜后，只有红色镜片能看清这些文字。把弱视眼放在红色镜片后面，就迫使它来读这些内容，两只眼睛都在工作，而细节由较弱的那只眼负责。',
  'Normal view': '正常视角',
  'Blue lens': '蓝色镜片',
  'Through the blue lens': '透过蓝色镜片',
  'Red lens': '红色镜片',
  'Through the red lens': '透过红色镜片',
  'Stereoscopic training': '立体视觉训练',
  'The stereo effect is produced by a custom post-process material rather than engine stereo support: it shifts each object’s red channel slightly left and the cyan channels (green and blue) slightly right. With the offsets tuned, red-cyan glasses resolve a genuine sense of depth.':
    '立体效果来自自定义的后处理材质，而不是引擎自带的立体支持：它把每个物体的红色通道稍微左移，青色通道（绿和蓝）稍微右移。调好偏移量后，戴红青眼镜就能看到真实的纵深感。',
  'Not every child with amblyopia has impaired depth perception, so the effect is a settings-menu toggle rather than always-on.':
    '并不是每个弱视儿童的深度知觉都有问题，所以这个效果是设置菜单里的开关，而不是一直开启。',
  'Anaglyph stereoscopic effect': '红青立体效果',
  'Raster vision training': '光栅视觉训练',
  'Quick time events put a rotating black-and-white grating at the centre of the screen with a key prompt in its middle, drawn so that only the red lens resolves it. The amblyopic eye has to focus and respond under time pressure, which turns a standard QTE into targeted training.':
    'QTE 会在屏幕中央放一个旋转的黑白光栅，中间是按键提示，而且只有红色镜片能看清。弱视眼必须在时间压力下集中注意力并做出反应，这样普通的 QTE 就变成了有针对性的训练。',
  'QTE with red key prompt over a rotating grating': '旋转光栅上带红色按键提示的 QTE',
  'Color-channel isolation': '颜色通道隔离',
  Rendering: '渲染',
  'Post-process shaders': '后处理着色器',
  'Stereo rendering': '立体渲染',
  'Shader effects': '着色器效果',
  'Real-time input': '实时输入',

  // ORCA
  'ORCA Collision Avoidance in UE5': 'UE5 中的 ORCA 避障',
  'Multi-Agent Navigation': '多智能体导航',
  'Unreal’s built-in RVO avoidance degrades as agent count climbs, so I implemented ORCA inside the engine as a reusable subsystem.':
    'Unreal 自带的 RVO 避障在单位数量增加时效果变差，所以我在引擎里把 ORCA 实现成了一个可复用的子系统。',
  'Stable avoidance for hundreds of simultaneous agents': '数百个单位同时移动时依然稳定避障',
  'ORCA (Optimal Reciprocal Collision Avoidance) gives more predictable and stable behaviour than RVO at scale. I implemented optimal velocity computation and reciprocal velocity obstacles as a custom navigation layer, available across projects rather than bolted onto one.':
    'ORCA（最优互惠避障）在大规模场景下比 RVO 更可预测、更稳定。我把最优速度计算和互惠速度障碍实现成一个自定义导航层，可以在多个项目中使用，而不是绑定在某一个项目上。',
  'ORCA collision avoidance': 'ORCA 避障',
  'ORCA as a reusable navigation layer': '把 ORCA 做成可复用的导航层',
  'Multi-agent systems': '多智能体系统',
  'Collision avoidance': '避障',
  'Reusable subsystem': '可复用子系统',

  // Smaller projects
  'Smaller Projects': '其他小项目',
  'Prototypes exploring different gameplay mechanics and visual styles.':
    '探索不同玩法机制和视觉风格的原型。',
}
