import { Experience } from "../types/Experience";

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Universe Action Limited',
    location: 'Kowloon, Hongkong SAR',
    job_type: 'remote',
    joined_date: new Date(2024, 7), //(year, monthIndex) => monthIndex starts from 0 to 11
    quit_date: undefined,
    is_active: true
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Riau, Indonesia',
    job_type: 'self-employed',
    joined_date: new Date(2024, 4),
    quit_date: new Date(2024, 7),
    is_active: false
  },
]