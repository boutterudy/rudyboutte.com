import { ReactElement } from 'react'
import { ArticleSummaryElementType } from './ArticleSummaryElementType'

export type ArticleContentType = {
  title: string
  content?: ReactElement
  subcontent?: ArticleContentType[]
  summary?: ArticleSummaryElementType[]
}
