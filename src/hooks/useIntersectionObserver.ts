import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

const useIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<string | undefined>>
) => {
  const headingElementsRef = useRef<{
    [key: string]: IntersectionObserverEntry
  }>({})
  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      // Get all headings that are currently visible on the page
      const visibleHeadings: IntersectionObserverEntry[] = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id)

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort((a, b) => {
          const aIndexGreaterThanBIndex =
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id)

          if (!aIndexGreaterThanBIndex) {
            return -1
          }

          if (aIndexGreaterThanBIndex) {
            return 1
          }

          return 0
        })

        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-90px 0px -40% 0px',
    })

    const headingElements = Array.from(document.querySelectorAll('h2, h3'))

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}

export default useIntersectionObserver
