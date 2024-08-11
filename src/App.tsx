import { useEffect, useState } from 'react'
import './App.css'
import FlashCard from './Components/FlashCard/FlashCard'
import RightArrow from './Components/RightArrow';
import LeftArrow from "./Components/LeftArrow";
import axios from 'axios';

function App() {

  const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
  const [data,setData]=useState([]);

  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get(`${BACKEND_URL}/api/fetch`);
      if(res.status==200 || res.status==201){
        setData(res.data);
      }
      return [];
    }

    fetchData();

  },[])

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? prev : prev - 1));
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === data.length - 1 ? prev : prev + 1));
  }

  return (
    <div className='min-h-screen flex items-center justify-between px-3 sm:px-8 overflow-hidden'>
      <button className=' w-10 h-10' onClick={handlePrev}>
        <LeftArrow/>
      </button>

      <div className="w-full overflow-hidden border border-black">
        <div
          className="flex"
          style={{ transform: `translateX(-${current * 100}%)` ,transition:"all 0.5s"}}
        >
          {data.map((d,) => (
            <div className="min-w-full px-2 flex justify-center transition-transform" key={d.id}>
              <FlashCard data={d} />
            </div>
          ))}
        </div>
      </div>

      <button className=' w-10 h-10 ' onClick={handleNext}>
        <RightArrow/>
      </button>
    </div>
  )
}

export default App
