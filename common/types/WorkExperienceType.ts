import { WorkExperienceTaskType } from './WorkExperienceTaskType'

export type WorkExperienceType = {
  logo: {
    src: string
    width: number
    height: number
  }
  company: string
  begin: Date
  end: Date
  occupation: string
  description: string
  tasks?: WorkExperienceTaskType[]
}
