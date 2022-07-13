import { ReactElement } from 'react'
import Image from 'next/image'
import { TagType } from './TagType'
import Icon from '../components/elements/Icon/Icon'

export type ProjectType = {
  title: string
  description: string
  demo?: string
  github?: string
  tags: TagType[]
  preview: ReactElement<typeof Image>
  date: Date
  icon: ReactElement<typeof Icon>
}
