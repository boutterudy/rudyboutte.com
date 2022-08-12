import { useEffect, useRef, useState } from 'react'
import styles from './SwappingWord.module.scss'

type SwappingWordProps = {
  words: string[]
}

const SwappingWord = ({ words }: SwappingWordProps) => {
  // Refs
  const swappingWordRef = useRef<HTMLSpanElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])

  // States
  const [wordsAnimated, setWordsAnimated] = useState<boolean>(false)

  // Constants
  const animationDuration = words.length * 2

  useEffect(() => {
    const wordWidths = [...wordsRef.current.map((e) => e?.clientWidth)].filter(
      (e) => e !== undefined
    )

    const swappingAnimation: Keyframe[] = [
      {
        offset: 0,
        opacity: 0,
        transform: 'translateY(-1em)',
      },
      {
        offset: 0.2 / animationDuration,
        opacity: 1,
        transform: 'translateY(0)',
      },
      {
        offset: 1.8 / animationDuration,
        opacity: 1,
        transform: 'translateY(0)',
      },
      {
        offset: 2 / animationDuration,
        opacity: 0,
        transform: 'translateY(1em)',
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'translateY(1em)',
      },
    ]

    const widthChanging: Keyframe[] = []
    for (let index = 0; index < words.length; index++) {
      let calcultedDuration = (index * 2) / animationDuration
      calcultedDuration = Number(calcultedDuration.toFixed(2))
      widthChanging.push(
        {
          offset: calcultedDuration,
          width: wordWidths[index] + 'px',
        },
        {
          offset: calcultedDuration + 1.8 / animationDuration,
          width: wordWidths[index] + 'px',
        }
      )
    }
    widthChanging.push({
      offset: 1,
      width: wordWidths[0] + 'px',
    })

    // Animating each word
    if (swappingWordRef && swappingWordRef.current && wordsAnimated === false) {
      const wordsElements = Array.from(swappingWordRef.current.children)

      for (let index = 0; index < wordsElements.length; index++) {
        wordsElements[index].animate(swappingAnimation, {
          duration: animationDuration * 1000,
          iterations: Infinity,
          easing: 'linear',
          delay: index * 2000,
        })
      }

      swappingWordRef.current.animate(widthChanging, {
        duration: animationDuration * 1000,
        iterations: Infinity,
        easing: 'linear',
      })

      // To prevent animation glitch
      setWordsAnimated(true)
    }
  }, [animationDuration, words.length, wordsAnimated])

  return (
    <span
      className={styles.swappingWord}
      style={{
        animationDuration: animationDuration + 's',
      }}
      ref={swappingWordRef}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={styles.word}
          ref={(el: HTMLSpanElement) =>
            (wordsRef.current = [...wordsRef.current, el])
          }
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default SwappingWord
