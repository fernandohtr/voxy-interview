import { useRef, useState } from "react"
import "./Counter.css"

export default function Counter() {
  const [numberOfWords, setNumberOfWords] = useState(0)
  const [numberOfLetters, setNumberOfLetters] = useState(0)
  const [numberOfNumbers, setNumberOfNumbers] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const textAreaRef = useRef<HTMLTextAreaElement>(null)


  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (textAreaRef.current) {
      const text = textAreaRef.current.value
      if (text.trim() === "") {
        setErrorMessage("Text input is required!");
        setNumberOfWords(0)
        setNumberOfLetters(0)
        setNumberOfNumbers(0)
      } else {
        setErrorMessage("")
        countWords(text)
        countLetters(text)
        countNumbers(text)
      }
    }
  }

  const countWords = (text: string): void => {
    const textWithoutSpecialCharacters = text.replace(/[^\p{L}\p{N}\s]/gu, "")
    const numberOfWords = textWithoutSpecialCharacters.split(/\s+/).filter(word => word !== "").length
    setNumberOfWords(numberOfWords)
  }

  const countLetters = (text: string): void => {
    const textWithoutSpecialCharacters = text.replace(/[^\p{L}\p{N}]/gu, "")
    const numberOfLetters = textWithoutSpecialCharacters.length
    setNumberOfLetters(numberOfLetters)
  }

  const countNumbers = (text: string): void => {
    const textWithoutSpecialCharacters = text.replace(/[^0-9]/g, "")
    const numberOfNumbers = textWithoutSpecialCharacters.length
    setNumberOfNumbers(numberOfNumbers)
  }
  
  return (
    <section>
      <form onSubmit={submitHandler}>
        <textarea ref={textAreaRef}></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div className="result">
        {errorMessage && <div className="error-message">{errorMessage}</div> }
        {!errorMessage && <span>Number of Words: {numberOfWords}</span>}
        {!errorMessage && <span>Number of Letters: {numberOfLetters}</span>}
        {!errorMessage && <span>Number of Numbers: {numberOfNumbers}</span>}
      </div>
    </section>
  )
}