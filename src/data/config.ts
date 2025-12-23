// ============================================================================
// RESUME DATA - Single Source of Truth
// ============================================================================
// Update this file to update your entire website.
// All components should import and reference RESUME_DATA from this file.
// ============================================================================

// ─────────────────────────────────────────────────────────────────────────────
// Type Definitions
// ─────────────────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  highlight: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors?: string;
  courses: string[];
}

export interface WorkExperience {
  company: string;
  location: string;
  title: string;
  team?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Project {
  name: string;
  platform?: string;
  link?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  education: Education[];
  skills: SkillCategory[];
  languages: Language[];
  workExperience: WorkExperience[];
  projects: Project[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Resume Data
// ─────────────────────────────────────────────────────────────────────────────

export const RESUME_DATA: ResumeData = {
  // ═══════════════════════════════════════════════════════════════════════════
  // Personal Information
  // ═══════════════════════════════════════════════════════════════════════════
  personal: {
    name: "Fandi Yi",
    address: "7 Mabelle Ave, Toronto, ON M9A 0C9",
    phone: "514-550-9528",
    email: "fandiyi2333@gmail.com",
    linkedin: "https://www.linkedin.com/in/fandi-yi-/",
    github: "https://github.com/Bubbletea98",
    highlight:
      "I am a builder and problem solver with over 6 years' Experience in Machine learning. Skilled in multimodal LLMs, agentic frameworks, and RAG, with end-to-end expertise from model design to deployment and optimization. At RBC, I lead a team to develop LLM-driven agentic chatbot that streamline enterprise operations and projected 30% reduction in operational time for entire enterprise change management team. Outside of work, I co-authored a MODELS 2023 paper on LLM taxonomy generation and contribute to Sherpa, an open-source LLM agentic framework.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Education
  // ═══════════════════════════════════════════════════════════════════════════
  education: [
    {
      institution: "McGill University",
      degree: "Master of Management in Analytics",
      startDate: "2020/08",
      endDate: "2021/12",
      gpa: "3.89/4.00",
      honors: "Entrance Scholarship",
      courses: [
        "Deep Learning",
        "Database Distrib. Syst.",
        "NLP",
        "Large Language Model",
        "A/B Testing",
      ],
    },
    {
      institution: "McGill University",
      degree: "Bachelor of Electrical Engineering",
      startDate: "2016/09",
      endDate: "2020/05",
      gpa: "3.35/4.00, Final Year: 3.93/4.00",
      courses: [
        "Algorithm Design",
        "Computer Vision",
        "Applied Machine Learning",
        "Numerical Methods",
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Skills
  // ═══════════════════════════════════════════════════════════════════════════
  skills: [
    {
      category: "Languages & Tools",
      skills: ["Python (8+ yrs)", "Java", "SQL", "JavaScript", "MATLAB", "C"],
    },
    {
      category: "Frameworks",
      skills: [
        "PyTorch",
        "TensorFlow",
        "HuggingFace",
        "LangGraph",
        "LangChain",
        "LangFuse",
      ],
    },
    {
      category: "ML Focus",
      skills: [
        "LLM",
        "RAG",
        "Reinforcement Learning",
        "Model Quantization",
        "A/B Testing",
      ],
    },
    {
      category: "Cloud & Infra",
      skills: [
        "GCP (Vertex AI, BigQuery)",
        "Azure",
        "Docker",
        "OCP",
        "Kafka",
        "Jenkins",
        "CI/CD",
      ],
    },
    {
      category: "Data Systems",
      skills: ["ElasticSearch", "Neo4j", "MongoDB", "MySQL"],
    },
    {
      category: "Specialties",
      skills: [
        "Multimodal Agents",
        "Conversational AI",
        "Model Deployment",
        "Performance Optimization",
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Languages
  // ═══════════════════════════════════════════════════════════════════════════
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Chinese", proficiency: "Native" },
    { language: "French", proficiency: "Beginner" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Work Experience
  // ═══════════════════════════════════════════════════════════════════════════
  workExperience: [
    {
      company: "RBC",
      location: "Toronto, Canada",
      title: "Senior Machine Learning Engineer",
      team: "Intelligent Ops Team",
      startDate: "2024/10",
      endDate: "Current",
      highlights: [
        "Won RBC employee performance award in 2025.",
        "Lead a 5 members team developed and deployed the RAG based LLM chatbot in RBC by leveraging FastMCP, LangGraph, Elasticsearch (VectorDB) and self-hosted LangFuse (monitoring), which consumed by entire RBC change management team, projected 30% reduction in operational time by the end of 2026.",
        "Deployed and Optimized 4 enterprise-level models. Designed Models' architecture to optimize their performance on OCP: Successfully reduced alert triage model's 80% memory consumption by refactoring script.",
        "Delivered a real-time incident alerting enrichment system using Java Spring Boot, Python FastAPI and Kafka. Consumed by two business units in RBC to help them reduce incident processing time by 30%.",
      ],
    },
    {
      company: "McGill University",
      location: "Remote",
      title: "Machine Learning Research Assistant (Part-time)",
      startDate: "2022/12",
      endDate: "2023/05",
      highlights: [
        "Worked with Prof. Emine Sarigollu's team to explore customers' interaction for circular economy (CE) topic on Twitter.",
        "Scraped 500k+ tweets and built NLP pipelines for emotion, sentiment and topic analytics using fine-tuned BERT-based classifiers using PyTorch with CUDA accelerators.",
      ],
    },
    {
      company: "CIBC",
      location: "Toronto, Canada",
      title: "NLP & ML Engineering",
      team: "Data & Analytics Team",
      startDate: "2022/01",
      endDate: "2024/10",
      highlights: [
        "Developed entity linking API using scikit-learn and Spacy for daily contract analytics, which are used for matching entities in contract documents with CIBC internal suppliers' name.",
        "Created a hierarchical structure for contracts' parent-child relationship, helping identify contracts' property.",
        "Enabled large-scale contract documents search (>100k files) by building an automated document metadata extraction pipeline to clean, extract and update data from unstructured text files by using Python and SQLite.",
      ],
    },
    {
      company: "Alibaba Group",
      location: "Hangzhou, China",
      title: "ML Engineering Intern",
      team: "Alibaba Brain Team",
      startDate: "2021/10",
      endDate: "2021/12",
      highlights: [
        "Worked in the Alibaba Brain team to analyze and develop a product for Objectives Key Results (OKR) project management tool.",
        "Partnered with product managers and developers from other teams to Define the indicators measuring the synergy effect among different business units using the OKR data (10 million+ records) from the AlibabaCloud database.",
        "Applied Neo4j to build a graph database for OKR data to visualize collaboration among departments.",
      ],
    },
    {
      company: "CIBC",
      location: "Toronto, Canada",
      title: "Data Scientist Intern",
      team: "Data & Analytics Team",
      startDate: "2021/05",
      endDate: "2021/09",
      highlights: [
        "Developed an end-to-end generative system to automate supplier profile slides generation process by querying Microsoft Access databases with VBA.",
        "Created a customized named entity recognition (NER) model to extract key information from contract documents.",
      ],
    },
    {
      company: "Allianz SE Insurance",
      location: "Montreal, Canada",
      title: "Data Scientist Coop",
      team: "Capstone Project",
      startDate: "2020/11",
      endDate: "2021/05",
      highlights: [
        "Built a semi-supervised model to predict the intention of Canadian small business buying insurance products, and built an LSTM model to predict the Google Trend for insurance products to provide insights for their market team.",
        "Deployed real-time ML application for social media analytics with Google Cloud Function and Google Data Studio.",
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Projects & Research
  // ═══════════════════════════════════════════════════════════════════════════
  projects: [
    // ⭐ Priority Projects (Featured)
    {
      name: "MODELS Conference 2023",
      platform: "arXiv",
      link: "https://arxiv.org/pdf/2309.01715",
      startDate: "2023/02",
      endDate: "2023/09",
      description: [
        "Published on MODELS conference: Prompting or Fine-tuning? A Comparative Study of Large Language Models for Taxonomy Construction as a co-first author.",
        "Compared different LLMs' prediction performance with prompting and fine-tuning methods for various taxonomy datasets.",
      ],
    },
    {
      name: "LLM Framework – Sherpa",
      platform: "GitHub",
      link: "https://github.com/Aggregate-Intellect/sherpa",
      startDate: "2024/05",
      endDate: "Current",
      description: [
        "Joined as one of the contributors in Sherpa developer community.",
        "Built search refinement and chain-of-action tools for this agentic LLM framework.",
      ],
    },
    {
      name: "Dream Journal App",
      platform: "GitHub",
      link: "https://github.com/Bubbletea98/dreamscape",
      startDate: "2025/10",
      endDate: "Current",
      description: [
        "Practicing my vibe coding skill by publishing a dream journal application to apple app store from scratch.",
        "Vibe coding frontend and backend with Cursor IDE, set up database and edge functions in Supabase, Build and submit app with Expo Application Services.",
      ],
    },
    // Other Projects
    {
      name: "Stock Signal Bot",
      platform: "Discord",
      link: "https://discord.com/invite/gV7eTcHh",
      startDate: "2023/01",
      endDate: "Present",
      description: [
        "Created a taxonomy dataset specific to computing classification system domain.",
        "Deployed real-time Discord bot by using Heroku for stock signal alerts using MACD/RSI analytics.",
      ],
    },
    {
      name: "Advanced AI Analytics for Airbnb Hosts",
      platform: "GitHub",
      link: "https://github.com/Bubbletea98/Airbnb",
      startDate: "2021/02",
      endDate: "2021/04",
      description: [
        "Built an application powered by a polynomial regression model to help hosts to adjust their prices.",
        "Applied AutoML with ML Flow on Databricks to choose the best performance ML model and hyperparameter tuning.",
        "Applied Docker to containerize ML models and the application orchestrated with Kubernetes.",
      ],
    },
    {
      name: "Continuous Testing And Validation of Jamscript",
      platform: "GitHub",
      link: "https://github.com/donatKapesa/JAMScript",
      startDate: "2019/09",
      endDate: "2020/05",
      description: [
        "Worked in Prof. M.Maheswaran's lab to test and validate a programming language for Edge-Oriented mobile IoT.",
        "Developed a continuous integration pipeline for an open-source programming language: Jamscript (a polyglot language that combines C and JavaScript) with Travis CI.",
      ],
    },
    {
      name: "Face Recognition and Tagging",
      platform: "GitHub",
      link: "https://github.com/Bubbletea98/ECSE415-ComputerFinalProject2019",
      startDate: "2019/09",
      endDate: "2019/12",
      description: [
        "Developed a face recognition system from scratch in a team of 5 using Python Sklearn.",
        "Compared the face recognition performance on PCA and bag-of-words methods.",
      ],
    },
    {
      name: "McGill Rocket Club",
      platform: "McGill University",
      startDate: "2018/10",
      endDate: "2020/04",
      description: [
        "Aero-Structure and Propulsion Sub-Team Member.",
        "Participated in designing different parts of the rocket model; Won Spaceport America Cup 2018 champion.",
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper Exports (optional convenience accessors)
// ─────────────────────────────────────────────────────────────────────────────

export const { personal, education, skills, languages, workExperience, projects } =
  RESUME_DATA;

export default RESUME_DATA;

