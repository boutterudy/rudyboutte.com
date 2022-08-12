import { useEffect, useRef, useState } from 'react'
import styles from './SwappingWord.module.scss'

type SwappingWordProps = {
  words: string[]
}

const SwappingWord = ({ words }: SwappingWordProps) => {
  const swappingWordRef = useRef<HTMLSpanElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const [swappingWordWidth, setSwappingWordWidth] = useState<string>()
  const [wordsAnimated, setWordsAnimated] = useState<boolean>(false)

  useEffect(() => {
    const wordWiths = [...wordsRef.current.map((e) => e?.clientWidth)]
    setSwappingWordWidth(
      Math.max(...wordWiths.filter((e) => e !== undefined)) + 'px'
    )
  }, [])

  const animationDuration = words.length * 2

  useEffect(() => {
    const swappingAnimation = [
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

      // To prevent animation glitch
      setWordsAnimated(true)
    }
  }, [animationDuration, wordsAnimated])

  return (
    <span
      className={styles.swappingWord}
      style={{
        animationDuration: animationDuration + 's',
        width: swappingWordWidth !== undefined ? swappingWordWidth : 'inherit',
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
