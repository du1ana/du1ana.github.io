// Technologies Data - All technologies with primary key IDs
// Easily editable constants file

export const TECH_CATEGORIES = {
  LANGUAGE: 'language',
  FRAMEWORK: 'framework',
  PLATFORM: 'platform',
  DATABASE: 'database',
  TOOL: 'tool',
  SERVICE: 'service',
  BLOCKCHAIN: 'blockchain'
};

export const TECHNOLOGIES = {
  // Languages
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    logo: null,
    icon: 'SiJavascript',
    category: TECH_CATEGORIES.LANGUAGE,
    description: 'High-level, dynamic programming language for web development.'
  },
  c: {
    id: 'c',
    name: 'C',
    logo: null,
    icon: 'SiC',
    category: TECH_CATEGORIES.LANGUAGE,
    description: 'Low-level systems programming language.'
  },
  shell: {
    id: 'shell',
    name: 'Shell',
    logo: null,
    icon: 'SiGnubash',
    category: TECH_CATEGORIES.LANGUAGE,
    description: 'Command-line scripting for automation and system administration.'
  },

  // Frameworks & Libraries
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    logo: null,
    icon: 'SiNodedotjs',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'JavaScript runtime for building server-side applications.'
  },
  react: {
    id: 'react',
    name: 'React',
    logo: null,
    icon: 'SiReact',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'JavaScript library for building user interfaces.'
  },
  react_native: {
    id: 'react_native',
    name: 'React Native',
    logo: null,
    icon: 'SiReact',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Framework for building native mobile applications with React.'
  },
  unity: {
    id: 'unity',
    name: 'Unity',
    logo: null,
    icon: 'SiUnity',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Cross-platform game engine for 2D and 3D development.'
  },
  vuforia: {
    id: 'vuforia',
    name: 'Vuforia Engine',
    logo: null,
    icon: 'TbCube',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Augmented reality SDK for mobile and digital eyewear.'
  },

  // Platforms & Infrastructure
  docker: {
    id: 'docker',
    name: 'Docker',
    logo: null,
    icon: 'SiDocker',
    category: TECH_CATEGORIES.PLATFORM,
    description: 'Container platform for building and deploying applications.'
  },
  ubuntu: {
    id: 'ubuntu',
    name: 'Ubuntu',
    logo: null,
    icon: 'SiUbuntu',
    category: TECH_CATEGORIES.PLATFORM,
    description: 'Linux distribution for servers and cloud infrastructure.'
  },

  // Azure Services
  azure: {
    id: 'azure',
    name: 'Microsoft Azure',
    logo: null,
    icon: 'TbBrandAzure',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Microsoft cloud computing platform and services.'
  },
  azure_openai: {
    id: 'azure_openai',
    name: 'Azure OpenAI Service',
    logo: null,
    icon: 'SiOpenai',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Azure-hosted OpenAI models for AI applications.'
  },
  azure_storage: {
    id: 'azure_storage',
    name: 'Azure File Storage',
    logo: null,
    icon: 'TbCloud',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Cloud file storage service in Azure.'
  },
  azure_ai_search: {
    id: 'azure_ai_search',
    name: 'Azure AI Search',
    logo: null,
    icon: 'TbSearch',
    category: TECH_CATEGORIES.SERVICE,
    description: 'AI-powered search service for applications.'
  },

  // Databases
  sql: {
    id: 'sql',
    name: 'SQL',
    logo: null,
    icon: 'TbDatabase',
    category: TECH_CATEGORIES.DATABASE,
    description: 'Structured Query Language for relational databases.'
  },
  vector_search: {
    id: 'vector_search',
    name: 'Vector Search',
    logo: null,
    icon: 'TbVector',
    category: TECH_CATEGORIES.DATABASE,
    description: 'Semantic search using vector embeddings.'
  },

  // AI & ML
  rag: {
    id: 'rag',
    name: 'RAG',
    logo: null,
    icon: 'TbBrain',
    category: TECH_CATEGORIES.TOOL,
    description: 'Retrieval-Augmented Generation for enhanced AI responses.'
  },
  augmented_reality: {
    id: 'augmented_reality',
    name: 'Augmented Reality',
    logo: null,
    icon: 'TbCube',
    category: TECH_CATEGORIES.TOOL,
    description: 'Technology overlaying digital content on the real world.'
  },

  // Blockchain & Web3
  xrpl: {
    id: 'xrpl',
    name: 'XRPL',
    logo: null,
    icon: 'SiRipple',
    category: TECH_CATEGORIES.BLOCKCHAIN,
    description: 'XRP Ledger - decentralized blockchain platform.'
  },
  blockchain: {
    id: 'blockchain',
    name: 'Blockchain',
    logo: null,
    icon: 'EosIconsBlockchain',
    category: TECH_CATEGORIES.BLOCKCHAIN,
    description: 'Distributed ledger technology for decentralized applications.'
  },
  web3auth: {
    id: 'web3auth',
    name: 'Web3Auth',
    logo: null,
    icon: 'RiPassValidLine',
    category: TECH_CATEGORIES.BLOCKCHAIN,
    description: 'Authentication infrastructure for Web3 applications.'
  },
  xaman_wallet: {
    id: 'xaman_wallet',
    name: 'Xaman Wallet',
    logo: null,
    icon: 'BxWallet',
    category: TECH_CATEGORIES.BLOCKCHAIN,
    description: 'Non-custodial wallet for XRP Ledger.'
  },

  // Third-party Services
  sumsub_kyc: {
    id: 'sumsub_kyc',
    name: 'Sumsub KYC',
    logo: null,
    icon: 'RiShieldUserLine',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Identity verification and KYC compliance platform.'
  },

  // ML Frameworks
  tensorflow: {
    id: 'tensorflow',
    name: 'TensorFlow',
    logo: null,
    icon: 'SiTensorflow',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Open-source machine learning framework by Google.'
  },
  keras: {
    id: 'keras',
    name: 'Keras',
    logo: null,
    icon: 'SiKeras',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'High-level neural network API running on top of TensorFlow.'
  },

  // Languages (new)
  python: {
    id: 'python',
    name: 'Python',
    logo: null,
    icon: 'SiPython',
    category: TECH_CATEGORIES.LANGUAGE,
    description: 'High-level programming language for AI, scripting, and backend development.'
  },
  rust: {
    id: 'rust',
    name: 'Rust',
    logo: null,
    icon: 'SiRust',
    category: TECH_CATEGORIES.LANGUAGE,
    description: 'Systems programming language focused on safety and performance.'
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    logo: null,
    icon: 'SiTypescript',
    category: TECH_CATEGORIES.LANGUAGE,
    description: 'Typed superset of JavaScript for scalable application development.'
  },

  // Frameworks (new)
  svelte: {
    id: 'svelte',
    name: 'Svelte',
    logo: null,
    icon: 'SiSvelte',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Lightweight component framework that compiles to vanilla JavaScript.'
  },
  redux: {
    id: 'redux',
    name: 'Redux',
    logo: null,
    icon: 'SiRedux',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Predictable state container for JavaScript applications.'
  },
  dotnet: {
    id: 'dotnet',
    name: '.NET',
    logo: null,
    icon: 'SiDotnet',
    category: TECH_CATEGORIES.FRAMEWORK,
    description: 'Microsoft cross-platform framework for building applications.'
  },

  // Services (new)
  twilio: {
    id: 'twilio',
    name: 'Twilio',
    logo: null,
    icon: 'SiTwilio',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Cloud communications platform for voice, messaging, and video.'
  },
  openai: {
    id: 'openai',
    name: 'OpenAI',
    logo: null,
    icon: 'SiOpenai',
    category: TECH_CATEGORIES.SERVICE,
    description: 'AI platform providing GPT models and the Assistants API.'
  },
  azure_cosmos_db: {
    id: 'azure_cosmos_db',
    name: 'Azure Cosmos DB',
    logo: null,
    icon: 'TbDatabase',
    category: TECH_CATEGORIES.DATABASE,
    description: 'Globally distributed NoSQL database service on Azure.'
  },
  azure_service_bus: {
    id: 'azure_service_bus',
    name: 'Azure Service Bus',
    logo: null,
    icon: 'TbCloud',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Enterprise message broker for decoupled cloud applications.'
  },
  azure_functions: {
    id: 'azure_functions',
    name: 'Azure Functions',
    logo: null,
    icon: 'TbBrandAzure',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Serverless compute service for event-driven applications on Azure.'
  },
  azure_devops: {
    id: 'azure_devops',
    name: 'Azure DevOps',
    logo: null,
    icon: 'TbBrandAzure',
    category: TECH_CATEGORIES.SERVICE,
    description: 'Microsoft DevOps platform for CI/CD pipelines and project management.'
  },

  // Databases (new)
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    logo: null,
    icon: 'SiMongodb',
    category: TECH_CATEGORIES.DATABASE,
    description: 'Document-oriented NoSQL database for modern applications.'
  },

  // Blockchain (new)
  xahau: {
    id: 'xahau',
    name: 'Xahau',
    logo: null,
    icon: 'SiRipple',
    category: TECH_CATEGORIES.BLOCKCHAIN,
    description: 'Smart contract sidechain network for the XRP Ledger ecosystem.'
  },
  // Embedded / Hardware
  atmega32: {
    id: 'atmega32',
    name: 'ATMEGA32',
    logo: null,
    icon: 'FaMicrochip',
    category: TECH_CATEGORIES.PLATFORM,
    description: 'AVR 8-bit microcontroller used for embedded systems development.'
  }
};

export const getTechnologyById = (id) => TECHNOLOGIES[id] || null;
export const getAllTechnologies = () => Object.values(TECHNOLOGIES);
export const getTechnologiesByCategory = (category) =>
  Object.values(TECHNOLOGIES).filter(t => t.category === category);
