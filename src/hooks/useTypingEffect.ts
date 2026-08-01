import { useState, useEffect, useCallback } from 'react'

export function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentText = texts[textIndex]
    if (isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length - 1))
    } else {
      setDisplayText(currentText.substring(0, displayText.length + 1))
    }
  }, [texts, textIndex, isDeleting, displayText])

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, tick, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}
