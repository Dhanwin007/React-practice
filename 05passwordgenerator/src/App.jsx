import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword]= useState('');


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center '>Password Generator</h1>
    </div>
  )
}

export default App
