import { useState } from 'react'
import useHeadingsData from '../../../hooks/useHeadingsData'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'
import { NestedHeadingType } from '../../../types/NestedHeadingType'
import styles from './TableOfContents.module.scss'

type TableOfContentsProps = {
  className?: string
}

/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
const Headings = ({
  headings,
  activeId,
}: {
  headings: NestedHeadingType[]
  activeId: string | undefined
}) => (
  <ul className={styles.headings}>
    {headings.map((heading) => (
      <li
        key={heading.id}
        className={
          styles.heading + (heading.id === activeId ? ' ' + styles.active : '')
        }
      >
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(`#${heading.id}`)?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          {heading.title}
        </a>
        {heading.items !== undefined && heading.items.length > 0 && (
          <ul className={styles.subHeadings}>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={
                  styles.subHeading +
                  (child.id === activeId ? ' ' + styles.active : '')
                }
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(`#${child.id}`)?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)

/**
 * Renders the table of contents.
 */
const TableOfContents = ({ className }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>()
  const { nestedHeadings } = useHeadingsData()
  useIntersectionObserver(setActiveId)

  return (
    <nav
      aria-label="Table of contents"
      className={styles.tableOfContents + ' ' + className}
    >
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  )
}

export default TableOfContents
