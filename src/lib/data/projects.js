// Projects Data - All projects with primary key IDs
// Easily editable constants file

export const PROJECT_TYPES = {
  SIDE_PROJECT: 'side_project',
  PROFESSIONAL: 'professional',
  ACADEMIC: 'academic'
};

export const PROJECT_STATUS = {
  LIVE: 'live',
  IN_DEVELOPMENT: 'in_development',
  ARCHIVED: 'archived'
};

// Helper to parse project dates for sorting (returns timestamp, null dates = ongoing = Infinity)
function parseProjDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? null : d.getTime();
}

export const PROJECTS = {
  zemly_ai: {
    id: 'zemly_ai',
    name: 'Zemly.AI',
    logo: null,
    icon: 'FaHeadset',
    links: {
      "Zemly.AI Portal": 'https://zemly.ai/'
    },
    github: null,
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.IN_DEVELOPMENT,
    description: 'AI voice agent platform for 24/7 property management call handling.',
    overview: `Lead developer of the core AI agent system and major contributor to the React + Rust agent-orchestrator platform for Zemly.AI — a 24/7 property management call-handling system that autonomously answers, triages, and escalates tenant and landlord calls based on configurable agency policies. Led a team of 4 engineers on the core agent side, built in Python with Twilio for telephony, Azure for cloud infrastructure, OpenAI for conversational intelligence, and MongoDB for persistent state and call records. Beyond the agent layer, contributed substantially to the orchestrator platform — working across the React frontend and Rust backend to ensure end-to-end system coherence.

Made key architectural decisions spanning both the core agent and orchestrator, directly interfaced with stakeholders, and coordinated cross-team alignment between the two systems.

Additionally built an automated evaluation platform (Python server + Svelte frontend) that uses an evaluator agent to systematically test and benchmark the core agent's performance — enabling data-driven iteration on agent quality.`,
    experience_id: 'geveo',
    technology_ids: ['python', 'rust', 'react', 'mongodb', 'azure', 'twilio', 'openai', 'azure_openai', 'azure_ai_search', 'rag', 'svelte'],
    start_date: 'Jan 2026',
    end_date: null,
    images: []
  },
  dova: {
    id: 'dova',
    name: 'DOVA',
    logo: '/imgs/projects/logos/dova.png',
    links: {
      'Investor Portal': 'http://dova-prod-public-portal.azurewebsites.net/'
    },
    github: null,
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.IN_DEVELOPMENT,
    description: 'Fractional investment platform for data center infrastructure on the blockchain.',
    overview: `Sole developer on a full-stack decentralized application enabling fractional investment in data center infrastructure. Built and maintained three separate codebases: an XRPL-integrated smart contract layer, a Node.js backend API, and dual React frontends (investor portal and admin portal). The investor portal features Web3Auth and Xaman (XUMM) wallet authentication, Sumsub KYC verification, and XRPL-based investment NFT management and trading. The admin portal provides property and investment management capabilities.

Added a unit test suite for complete smart contract testing and evaluation establishing new quality standards. Implemented smart contract health check functionality for proactive monitoring and early issue detection. Designed data models for investment tracking, yield calculations, and NFT marketplace logic, balancing multiple security constraints. Documented the complete API flow for all backend services. Managed Azure DevOps CI/CD pipelines for contract upgrades and static web app deployments. Followed an MVP-first approach to deliver initial functionality rapidly before full implementation.`,
    experience_id: 'geveo',
    technology_ids: ['javascript', 'nodejs', 'react', 'xrpl', 'web3auth', 'azure', 'azure_devops', 'sumsub_kyc', 'xaman_wallet', 'sql'],
    start_date: 'Sep 2025',
    end_date: 'Dec 2025',
    images: [
      { url: '/imgs/projects/screenshots/dova/dova_investor_1.png', caption: 'Investor portal Data Centers page showing available facilities with capacity, target raise, funding progress, and tier classifications for investment.' },
      { url: '/imgs/projects/screenshots/dova/dova_investor_2.png', caption: 'Investments tracking view with sortable table of holdings across data centers, funding status, dates, and amounts, alongside an interactive distribution donut chart.' },
      { url: '/imgs/projects/screenshots/dova/dova_investor_3.png', caption: 'Yield Allocations page featuring a cumulative revenue chart over time, visualizing returns across multiple data center investments with filterable data series.' },
      { url: '/imgs/projects/screenshots/dova/dova_admin_1.png', caption: 'Admin portal dashboard showing a management overview of Data Centers, KYC verification status, and Investments with funding progress and active investor counts.' },
      { url: '/imgs/projects/screenshots/dova/dova_admin_2.png', caption: 'Data Centers management view with cards displaying individual facilities, their funding targets, raised amounts, progress bars, and investor participation details.' },
    ]
  },
  medaivo: {
    id: 'medaivo',
    name: 'MedAIvo',
    logo: '/imgs/projects/logos/medAIvo-logo.png',
    links: {
      'Product Page': 'https://medaivo.everpower.io/',
      'Web Portal': 'https://medaivo-app.everpower.io/'
    },
    github: null,
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.IN_DEVELOPMENT,
    description: 'Decentralized healthcare dApp with AI-powered medical record management.',
    overview: `Led a team of 3 developers building a healthcare dApp combining RAG-powered AI with decentralized security for sensitive medical records. Managed parallel development across multiple technology stacks — smart contracts, backend API, web portal (React), and mobile app (React Native) — while maintaining regular stakeholder demos and business requirement meetings with the client and medical advisors.

Designed a novel decentralized key-splitting encryption algorithm for secure distributed access control of patient data. Architected a local-first medical records solution where sensitive patient data persists on the user's device with a controlled upload workflow during consultations — addressing stringent privacy and regulatory constraints. Implemented multiple security layers combining Web3Auth social login, smart contract authentication, local device storage, and encryption. Built Azure OpenAI-powered search indexing with patient data filtering to maintain strict data isolation across users. Successfully navigated a major architectural pivot mid-project — redesigning the entire indexing and storage system from Azure Data Tables to local-first persistence — without compromising AI functionality or timelines. Integrated vector search capabilities using Azure AI Search for intelligent healthcare query resolution.`,
    experience_id: 'geveo',
    technology_ids: ['javascript', 'nodejs', 'react', 'react_native', 'xrpl', 'web3auth', 'azure', 'azure_openai', 'azure_storage', 'azure_ai_search', 'sql', 'rag', 'vector_search'],
    start_date: 'May 2025',
    end_date: 'Sep 2025',
    images: []
  },
  tripq: {
    id: 'tripq',
    name: 'TripQ',
    logo: '/imgs/projects/logos/tripq_logo.png',
    links: {
      'Product Page': 'https://tripq.everpower.io/',
      'Web Portal': 'https://tripq.geveo.com/'
    },
    github: null,
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.IN_DEVELOPMENT,
    description: 'AI travel assistant with blockchain-based rewards and voice interaction.',
    overview: `Developed the AI chat assistant component for a travel platform integrating intelligent recommendations with blockchain-based rewards. Built the conversational interface using the OpenAI Assistants API with tool calling (function calling) to seamlessly bridge AI capabilities with existing business logic — enabling the chatbot to query live booking data, pricing, and availability without disrupting established workflows. Implemented per-user conversation thread management to ensure stateful, isolated chat sessions in a distributed environment — critical for production reliability. Integrated RealTime-GPT for voice-to-voice interaction. Built an initial real-time chatbot POC to validate feasibility before committing to full implementation. Provided comprehensive knowledge transfer sessions for the TripQ payment portal development to enable team continuity.`,
    experience_id: 'geveo',
    technology_ids: ['javascript', 'nodejs', 'react', 'openai', 'azure_openai', 'azure_ai_search', 'azure_storage', 'rag', 'xrpl', 'web3auth', 'azure'],
    start_date: 'Feb 2025',
    end_date: 'Apr 2025',
    images: [
      { url: '/imgs/projects/screenshots/tripq/tripq1.png', caption: 'Hotel search and booking interface with integrated AI chatbot assistant. Users can search properties, view available reservations, and get AI-powered travel recommendations in real time.' },
      { url: '/imgs/projects/screenshots/tripq/tripq2.png', caption: 'Hotel detail page displaying room types with pricing in both USD and XRP. Supports blockchain-based payments through XRPL integration with room selection and booking.' }
    ]
  },
  everpower_chatbot: {
    id: 'everpower_chatbot',
    name: 'Everpower Chatbot',
    logo: '/imgs/projects/logos/everpower-logo1.png',
    links: {
      'Everpower Labs': 'https://everpower.io/',
    },
    github: null,
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.LIVE,
    description: 'RAG chatbot for Evernode documentation, support, and developer Q&A.',
    overview: `Single-handedly developed Geveo's first Azure OpenAI RAG chatbot with minimal supervision or guidance — establishing a new reusable architectural pattern for the organization. The chatbot is specialized in Evernode documentation, past GitHub Issues conversations, community forum discussions, and troubleshooting knowledge, answering questions about hosting, dApp development, client libraries, and smart contracts. Delivered a production-ready implementation within a 1-month commitment. Self-directed the entire process: researching Azure OpenAI services, designing the RAG pipeline with Azure AI Search for retrieval, and building the React-based frontend. This implementation became the reference architecture for subsequent AI projects at Geveo.`,
    experience_id: 'geveo',
    technology_ids: ['javascript', 'nodejs', 'react', 'rag', 'azure', 'azure_openai', 'azure_storage', 'azure_ai_search'],
    start_date: 'Jan 2025',
    end_date: 'Feb 2025',
    images: [
      { url: '/imgs/projects/screenshots/everpower_chatbot/epc3.png', caption: 'Embedded chatbot widget on the Everpower Labs website, providing contextual AI assistance about Evernode.' },
      { url: '/imgs/projects/screenshots/everpower_chatbot/epc2.png', caption: 'Conversation view showing a RAG-powered responses.' },
      { url: '/imgs/projects/screenshots/everpower_chatbot/epc1.png', caption: 'Landing screen with the chat interface.' },
    ]
  },
  evernode: {
    id: 'evernode',
    name: 'Evernode',
    logo: '/imgs/projects/logos/evernode.png',
    links: {
      'Evernode Labs': 'https://www.evernode.org/',
      'GitHub Repo': 'https://github.com/EvernodeXRPL/'
    },
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.LIVE,
    description: 'Decentralized smart contract hosting platform (DePIN) on the XRP Ledger.',
    overview: `Served as a core developer on Evernode, a decentralized application hosting (DePIN) platform built on the XRP Ledger, powering a network of over 12,000 nodes worldwide. Worked on the platform's core infrastructure including the HotPocket consensus engine and Sashimono host management software.

Implemented major features from scratch including the node audit tool for hosts, dud host reporting functionality, fallback server connections, EVR limit controls during instance acquisition, a debugging log tool (with proof-of-work implementation), regular key management tooling, and Evernode Dashboard UI updates. Enhanced existing systems by migrating release infrastructure from Azure Blob Storage to GitHub, refining instance acquisition and cluster creation logic, modifying the auto-update service process, and implementing accumulated reward sending logic for cost optimization. Improved platform stability through fallback server connections and xahaud server desync handling.

Resolved critical incidents affecting the worldwide Evernode network: restored the testnet following an XRPL rollback disruption and patched a Sashimono dependency breakage in the Docker workflow. Investigated and resolved infrastructure issues including Docker API version compatibility, Ubuntu 24 migration (LXD → systemd-nspawn), and multi-server installation across test environments. Fixed a decimal precision bug in tenant refunds where floating-point values exceeded XRPL's 15-digit limit (solved with decimal.js).

Was solely responsible for maintaining Xahau accounts and VMs related to Geveo's dApp clusters. Created a Xahau mainnet account monitoring dashboard for operational visibility and monitoring spreadsheets for cluster expiry tracking and VM allocation management. Provided ongoing Evernode technical support and guidance to other DApps teams across the organization. Actively maintained both internal and public documentation, updating it after each implementation.`,
    experience_id: 'geveo',
    technology_ids: ['javascript', 'nodejs', 'react', 'c', 'xrpl', 'xahau', 'shell', 'docker', 'blockchain', 'ubuntu'],
    start_date: 'Jul 2023',
    end_date: 'Feb 2025',
    images: []
  },
  pems_autoissue: {
    id: 'pems_autoissue',
    name: 'PEMS AutoISSUE',
    logo: null,
    icon: 'TbParking',
    links: { "Product Page":"https://duncansolutions.com.au/compliance/"},
    github: null,
    proj_type: PROJECT_TYPES.PROFESSIONAL,
    status: PROJECT_STATUS.LIVE,
    description: 'Parking enforcement management system used by Australian regulatory bodies.',
    overview: `Contributed as a software engineering intern to Duncan Solutions' AutoISSUE — a long-standing parking enforcement platform used by regulatory bodies across Australia since 1986, including the Australian Federal Police. The system integrates with vehicle sensors, LPR technology, pay-by-phone applications, parking meters, and managed resident permit schemes.

Worked across the full stack: React/TypeScript frontend with Redux state management and Kendo UI, .NET 6 backend, and Azure services (Cosmos DB, Table Storage, Blob Storage, Functions, Service Bus, APIM). Contributed through feature development, bug fixes, unit test implementations, code reviews, and documentation.`,
    experience_id: 'geveo_intern',
    technology_ids: ['typescript', 'react', 'redux', 'dotnet', 'azure', 'azure_cosmos_db', 'azure_service_bus', 'azure_functions', 'azure_storage'],
    start_date: 'Jan 2022',
    end_date: 'Jun 2022',
    images: []
  },
  road_accident_prevention: {
    id: 'road_accident_prevention',
    name: 'Road Accident Prevention System',
    logo: null,
    icon: 'FaRoad',
    links: {},
    github: null,
    proj_type: PROJECT_TYPES.ACADEMIC,
    status: PROJECT_STATUS.ARCHIVED,
    description: 'ML-powered platform for road accident prediction and prevention.',
    overview: `Led a team of 5 building a web and mobile platform that interfaces with a machine learning model to predict road accidents. Developed the React frontend, Node.js backend microservices, and MongoDB data layer. Served as project leader — coordinating across team members, managing deliverables, and ensuring end-to-end system integration between the ML model and user-facing interfaces.`,
    experience_id: 'uom',
    technology_ids: ['javascript', 'nodejs', 'react', 'mongodb'],
    start_date: 'Aug 2020',
    end_date: 'May 2021',
    images: []
  },
  pedestrian_protector: {
    id: 'pedestrian_protector',
    name: 'Pedestrian Protector',
    logo: null,
    icon: 'FaPersonWalking',
    links: {},
    github: null,
    proj_type: PROJECT_TYPES.ACADEMIC,
    status: PROJECT_STATUS.ARCHIVED,
    description: 'Embedded safety system for alerting drivers and pedestrians at crossings.',
    overview: `Built an ATMEGA32-based embedded system that alerts drivers of upcoming pedestrian crossings and warns pedestrians of approaching vehicles using ultrasonic sensors. Responsible for PCB design and fabrication, sensor integration, and pedestrian detection logic.`,
    experience_id: 'uom',
    technology_ids: ['atmega32'],
    start_date: 'Dec 2018',
    end_date: 'Dec 2019',
    images: []
  },
  synthetic_facial_classifier: {
    id: 'synthetic_facial_classifier',
    name: 'Synthetic Facial Image Classifier',
    logo: null,
    icon: 'TbFaceId',
    links: {
      'Final Report': 'https://drive.google.com/file/d/1J8ZRzluSwnBRSqZ9N0wPhytTCDZfR-uf/view?usp=sharing'
    },
    github: null,
    proj_type: PROJECT_TYPES.ACADEMIC,
    status: PROJECT_STATUS.ARCHIVED,
    description: 'Neural network system for detecting and classifying synthetic facial images.',
    overview: `Part of the group research project "Detection of Synthetic Voice, Video, Images and Text in Social Media Content" — a multi-module system tackling deepfake detection across all major media types. My individual contribution was the Synthetic Facial Image Detection module.

Developed a neural network-based system that detects and classifies synthetic facial images across three major types of facial synthesis: entire face synthesis, face swapping, and face morphing. Created SynFace — a balanced dataset of 12,000 images combining real and synthesized facial data from multiple established sources to address the lack of diverse training data in existing approaches. Designed SFIC (Synthetic Facial Image Classifier) — a Siamese Neural Network architecture that leverages pairwise comparison of facial landmarks (e.g., ocular symmetry, corneal highlight shape) to detect physiological inconsistencies introduced by synthesis. The model not only identifies whether a facial image is synthetic but also determines the specific synthesis method used.

SFIC outperformed established architectures including Xception, ResNet50, and EfficientNet-B0, achieving 74.13% accuracy and 73.83% F1-score on multi-class classification — demonstrating improved generalizability over single-type detection approaches.`,
    experience_id: 'uom',
    technology_ids: ['python', 'tensorflow', 'keras'],
    start_date: 'Oct 2022',
    end_date: 'Jul 2023',
    images: []
  },
  pelapotha_plus: {
    id: 'pelapotha_plus',
    name: 'Pelapotha+',
    logo: '/imgs/projects/logos/pelapotha.jpg',
    links: {
      'YouTube Demo': 'https://youtu.be/I10YrYF_UhY?si=lyrQVJseRKKKjh4d'
    },
    github: null,
    proj_type: PROJECT_TYPES.SIDE_PROJECT,
    status: PROJECT_STATUS.ARCHIVED,
    description: 'Augmented reality app for interactive educational experiences.',
    overview: `An augmented reality educational application built with Unity and Vuforia engine for interactive learning experiences.`,
    experience_id: 'uom',
    technology_ids: ['vuforia', 'unity', 'augmented_reality'],
    start_date: 'Nov 2021',
    end_date: 'Dec 2021',
    images: []
  },
  covid_dashboard: {
    id: 'covid_dashboard',
    name: 'SL COVID-19 Dashboard',
    logo: null,
    icon: 'TbVirus',
    links: {
      'GitHub Repo': 'https://github.com/du1ana/covid-19-dashboard'
    },
    proj_type: PROJECT_TYPES.SIDE_PROJECT,
    status: PROJECT_STATUS.ARCHIVED,
    description: 'Real-time COVID-19 statistics dashboard for Sri Lanka.',
    overview: `A real-time COVID-19 statistics dashboard for Sri Lanka, visualizing pandemic data with interactive charts.`,
    experience_id: null,
    technology_ids: ['javascript', 'react'],
    start_date: 'Mar 2020',
    end_date: 'Apr 2020',
    images: []
  }
};

export const getProjectById = (id) => PROJECTS[id] || null;
export const getAllProjects = () => Object.values(PROJECTS).sort((a, b) => {
  // Sort by end_date desc (null end_date = ongoing = most recent), then start_date desc
  const aEnd = a.end_date ? parseProjDate(a.end_date) : Infinity;
  const bEnd = b.end_date ? parseProjDate(b.end_date) : Infinity;
  if (bEnd !== aEnd) return bEnd - aEnd;
  const aStart = parseProjDate(a.start_date) ?? -Infinity;
  const bStart = parseProjDate(b.start_date) ?? -Infinity;
  return bStart - aStart;
});
export const getProjectsByExperience = (experienceId) =>
  Object.values(PROJECTS).filter(p => p.experience_id === experienceId);
export const getProjectsByTechnology = (techId) =>
  Object.values(PROJECTS).filter(p => p.technology_ids.includes(techId));
export const getProjectsByType = (type) =>
  Object.values(PROJECTS).filter(p => p.proj_type === type);
export const getProjectsByStatus = (status) =>
  Object.values(PROJECTS).filter(p => p.status === status);
