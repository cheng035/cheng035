export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ProjectDetail {
  title: string;
  techStack: string[];
  points: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary?: string;
  projects: ProjectDetail[];
}

export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  honors?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
