import { WorkExperienceTaskType } from './WorkExperienceTaskType'
export type WorkExperienceType = {
  logo: string
  company: string
  begin: Date
  end: Date
  occupation: string
  description: string
  tasks?: WorkExperienceTaskType[]
}
