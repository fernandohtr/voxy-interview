import { useState } from "react"
import "./Counter.css"

export default function CounterOnFly() {
  const [numberOfWords, setNumberOfWords] = useState(0)
  const [numberOfLetters, setNumberOfLetters] = useState(0)
  const [numberOfNumbers, setNumberOfNumbers] = useState(0)


  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const text = event.currentTarget.value
    
    countWords(text)
    countLetters(text)
    countNumbers(text)
  }

  const countWords = (text: string): void => {
    const textWithoutSpecialCharacters = text.replace(/[^a-zA-Z0-9\s]/g, "")
    const numberOfWords = textWithoutSpecialCharacters.split(/\s+/).filter(word => word !== "").length
    setNumberOfWords(numberOfWords)
  }

  const countLetters = (text: string): void => {
    const textWithoutSpecialCharacters = text.replace(/[^a-zA-Z0-9]/g, "")
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
      <textarea onChange={inputHandler}></textarea>
      <div className="result">
        <span>Number of Words: {numberOfWords}</span>
        <span>Number of Letters: {numberOfLetters}</span>
        <span>Number of Numbers: {numberOfNumbers}</span>
      </div>
    </section>
  )
}