import { ReactElement } from 'react'

export type ArticleContentType = {
  title: string
  content?: ReactElement
  subcontent?: ArticleContentType[]
}
