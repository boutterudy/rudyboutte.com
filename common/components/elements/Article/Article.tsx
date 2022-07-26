import { cloneElement, Fragment, ReactElement } from 'react'
import { ArticleContentType } from '../../../types/ArticleContentType'
import { stringToId } from '../../../utils/StringUtil'
import TableOfContents from '../TableOfContents/TableOfContents'
import styles from './Article.module.scss'

type ArticleProps = {
  introduction?: ReactElement
  content: ArticleContentType[]
}

const Article = ({ introduction, content }: ArticleProps) => {
  return (
    <article className={styles.article}>
      <TableOfContents className={styles.tableOfContents} />
      <div className={styles.content}>
        {introduction && (
          <div className={styles.introductionWrapper}>{introduction}</div>
        )}
        {content.map((chapter, index) => (
          <section key={index} className={styles.chapter}>
            <h2 id={stringToId(chapter.title)}>{chapter.title}</h2>
            {chapter.content !== undefined &&
              cloneElement(chapter.content, {
                className: styles.chapterContent,
              })}
            <div key={index} className={styles.chapterSubcontent}>
              {chapter.subcontent?.map((subchapter, index) => (
                <Fragment key={index}>
                  <h3 id={stringToId(subchapter.title)}>{subchapter.title}</h3>
                  {subchapter.content}
                </Fragment>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

export default Article
