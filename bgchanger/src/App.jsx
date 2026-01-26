import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  //const change=(color)=>{
    //setColor(color);
  //}

  return (
    <div className='w-full h-screen duration-200  ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>red</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>blue</button>
      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-black' style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>pink</button>
    </div>
      </div>

      
    </div>
  )
}

export default App
