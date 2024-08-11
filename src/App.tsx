import { useState } from 'react'
import './App.css'
import FlashCard from './Components/FlashCard/FlashCard'
import RightArrow from './Components/RightArrow';
import LeftArrow from "./Components/LeftArrow";

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
    setCurrent((prev) => (prev === 0 ? prev : prev - 1));
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === data.length - 1 ? prev : prev + 1));
  }

  return (
    <div className='min-h-screen flex items-center justify-between px-8 overflow-hidden'>
      <button className='mr-4 w-10 h-10' onClick={handlePrev}>
        <LeftArrow/>
      </button>

      <div className="w-full overflow-hidden border border-black">
        <div
          className="flex "
          style={{ transform: `translateX(-${current * 100}%)` ,transition:"all 0.5s"}}
        >
          {data.map((d,) => (
            <div className="min-w-full flex justify-center transition-transform" key={d.id}>
              <FlashCard data={d} />
            </div>
          ))}
        </div>
      </div>

      <button className='ml-4 w-10 h-10 ' onClick={handleNext}>
        <RightArrow/>
      </button>
    </div>
  )
}

export default App
