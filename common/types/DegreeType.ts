import { DegreeSubjectType } from './DegreeSubjectType'
import { SchoolType } from './SchoolType'

export type DegreeType = {
  logo: {
    src: string
    width: number
    height: number
  }
  level: 3 | 4 | 5 | 6 | 7 | 8
  title: string
  school: SchoolType
  link?: string
  begin: Date
  end: Date
  curriculum: DegreeSubjectType[]
}
