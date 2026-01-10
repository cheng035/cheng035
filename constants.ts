import { ContactInfo, ExperienceItem, EducationItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Haohan Cheng",
  title: "Senior Software Engineer",
  tagline: "Building high-throughput distributed systems and AI-driven internal tools.",
  about: "Senior Software Engineer with extensive experience in designing scalable distributed architectures and optimizing system performance. Proven track record at Shopee handling 500K+ QPS systems and reducing query latencies by over 80% through AI and automation. Passionate about Go, Distributed Computing, and bridging the gap between infrastructure and AI agents.",
};

export const CONTACT: ContactInfo = {
  phone: "+65 8020 9385",
  email: "haohancheng@foxmail.com",
  linkedin: "https://www.linkedin.com/in/haohanc2",
  github: "https://github.com/cheng035",
  location: "Singapore",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Shopee",
    role: "Senior Software Engineer",
    duration: "Jun 2021 – Present",
    location: "Singapore",
    projects: [
      {
        title: "High-Throughput Scalable Event Ingestion",
        techStack: ["Go", "Kafka", "Distributed Systems"],
        points: [
          "Architected a distributed event ingestion system supporting 500K+ global peak QPS for mobile tracking data.",
          "Scaled pipeline from single-region to a geo-distributed architecture, ensuring low latency across multiple countries.",
          "Optimized throughput on 4-core instances to handle 45K QPS using AntsRoutinePool and Kafka Sarama.",
          "Implemented asynchronous batching and recovery mechanisms to enhance fault tolerance."
        ]
      },
      {
        title: "Real-Time Distributed Monitoring Platform",
        techStack: ["ElasticSearch", "ClickHouse", "SpringBoot"],
        points: [
          "Led the design of a real-time tracking system serving 800+ internal users for product analytics.",
          "Achieved sub-3s query latency for 99% of requests against 4 billion data points.",
          "Designed APIs and query logic to provide 10+ critical metrics including retention rates and active user counts."
        ]
      },
      {
        title: "AI-Powered Data Query Bot",
        techStack: ["ChatGPT", "RAG", "CLIP", "Milvus"],
        points: [
          "Developed an AI agent utilizing RAG and LLMs to automate data retrieval for 20+ teams.",
          "Reduced query resolution time from 2 hours to under 20 minutes.",
          "Implemented UI matching using CLIP/Milvus vector search, achieving >80% accuracy via prompt engineering."
        ]
      },
      {
        title: "Tracking Point Management System",
        techStack: ["MySQL", "Redis", "Spring Cloud"],
        points: [
          "Standardized schema governance for thousands of tracking points using a multi-layer caching strategy.",
          "Integrated workflow automation with Jira to streamline lifecycle management."
        ]
      }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "Master of Science in Information Management",
    duration: "Aug 2019 - May 2021",
    location: "Illinois, USA",
    gpa: "3.83/4.0"
  },
  {
    school: "Beijing University of Posts and Telecommunications",
    degree: "Bachelor of Engineering in E-commerce Engineering",
    duration: "Sep 2015 - May 2019",
    location: "Beijing, China",
    gpa: "3.5/4.0",
    honors: "Second-class study scholarship, Merit student"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Go", "Java", "C++", "Python", "SQL", "JavaScript"]
  },
  {
    category: "Distributed Systems",
    items: ["Kafka", "Elasticsearch", "ClickHouse", "Redis", "Spring Cloud", "Nacos", "Microservices"]
  },
  {
    category: "AI & Vector Search",
    items: ["RAG", "ChatGPT API", "CLIP", "Milvus", "Vector Databases"]
  },
  {
    category: "Performance",
    items: ["Concurrency", "Async Processing", "System Profiling", "Benchmarking"]
  }
];
