import { ReactElement } from 'react'
import Image from 'next/legacy/image'
import { TagType } from './TagType'
import Icon from '../components/elements/Icon/Icon'

export type ProjectType = {
  title: string
  description: string
  tags: TagType[]
  preview: ReactElement<typeof Image>
  date: Date
  icon: ReactElement<typeof Icon>
} & (
  | {
      demo?: never
      github: string
    }
  | {
      demo: string
      github?: string
    }
)
