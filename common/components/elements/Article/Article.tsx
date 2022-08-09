import Link from 'next/link'
import { cloneElement, Fragment, ReactElement } from 'react'
import { ArticleContentType } from '../../../types/ArticleContentType'
import { ArticleSummaryElementType } from '../../../types/ArticleSummaryElementType'
import { stringToId } from '../../../utils/StringUtil'
import TableOfContents from '../TableOfContents/TableOfContents'
import styles from './Article.module.scss'

type ArticleProps = {
  introduction?: ReactElement
  content: ArticleContentType[]
}

const Article = ({ introduction, content }: ArticleProps) => {
  const loadSummary = (summary: ArticleSummaryElementType[]) => (
    <div className={styles.chapterSummary}>
      {summary.map((element, index) => (
        <div key={index} className={styles.summaryElement}>
          {element.illustration}
          <p className={styles.title}>
            {element.link !== undefined ? (
              <Link href={element.link}>
                <a target={element.link.startsWith('./') ? '_self' : '_blank'}>
                  {element.title}
                </a>
              </Link>
            ) : (
              element.title
            )}
          </p>
        </div>
      ))}
    </div>
  )

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
            {chapter.subcontent !== undefined && (
              <div key={index} className={styles.chapterSubcontent}>
                {chapter.subcontent.map((subchapter, index) => (
                  <Fragment key={index}>
                    <h3 id={stringToId(subchapter.title)}>
                      {subchapter.title}
                    </h3>
                    {subchapter.content}
                    {subchapter.summary !== undefined &&
                      loadSummary(subchapter.summary)}
                  </Fragment>
                ))}
              </div>
            )}

            {chapter.summary !== undefined && loadSummary(chapter.summary)}
          </section>
        ))}
      </div>
    </article>
  )
}

export default Article
