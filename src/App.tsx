import { useState } from 'react'
import './App.css'
import FlashCard from './Components/FlashCard/FlashCard'

function App() {

  const data = [
    {
      id: 1,
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      id: 2,
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      id: 3,
      question: "Question 3",
      answer: "Answer 3",
    },
    {
      id: 4,
      question: "Question 4",
      answer: "Answer 4",
    }
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className='min-h-screen flex items-center justify-between px-6 overflow-hidden'>
      <button className='mr-2' onClick={handlePrev}>
        prev
      </button>

      <div className='w-full flex justify-center'>
        <FlashCard data={data[current]} key={data[current].id} />
      </div>

      <button className='ml-2' onClick={handleNext}>
        next
      </button>
    </div>
  )
}

export default App
