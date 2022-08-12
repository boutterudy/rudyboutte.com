import Image from 'next/image'
import { ReactElement } from 'react'
import Icon from '../components/elements/Icon/Icon'
export type ArticleSummaryElementType = {
  title: string
  illustration: ReactElement<typeof Icon> | ReactElement<typeof Image>
  link?: string
}
