type JobType = "onsite" | "remote" | "hybrid" | "self-employed"

export interface Experience {
  role: string,
  company: string,
  location: string,
  job_type: JobType,
  joined_date: Date,
  quit_date?: Date,
  is_active: boolean
}