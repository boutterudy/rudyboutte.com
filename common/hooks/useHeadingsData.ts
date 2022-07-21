import { NestedHeadingType } from './../types/NestedHeadingType'
import { useEffect, useState } from 'react'
import getNestedHeadings from './getNestedHeadings'

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeadingType[]>([])

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('main h2, main h3')
    )

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return { nestedHeadings }
}

export default useHeadingsData
