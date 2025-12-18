// Data access layer for portfolio data
import {
  AUTHOR,
  WORK_EXPERIENCE,
  EDUCATION,
  PROJECTS,
  type Author,
  type WorkExperience,
  type Education,
  type Project,
} from "@/constants/portfolio";

export async function getAuthorData(): Promise<Author | null> {
  return AUTHOR;
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  return WORK_EXPERIENCE;
}

export async function getEducation(): Promise<Education[]> {
  return EDUCATION;
}

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}

