import React,{useState} from 'react'

function LudoBoard() {
    const [moves,setMoves] = useState(
        {
            'blue':0,
            'red':0,
            'green':0,
            'yellow':0
        }
    )
    const updateMoves=(color)=>{
        setMoves(
            (prev)=>({
                ...prev,
                [color]:prev[color]+1
            })
        )
    };
  return (
    <div className='w-1/2 m-auto'  ><h1 className='text-3xl bg-green-500 text-center text-white rounded-md '>Ludo Game</h1>
    <div className='w-1/4 m-auto border-2 flex justify-center justify-evenly flex-col mt-4'>
    <p className='text-center'>Blue moves:{moves.blue}</p>
    <button className='text-white bg-blue-800 rounded-md' onClick={()=>updateMoves(
        'blue'
    )}>+1</button>
    <p className='text-center'>Yellow moves:{moves.yellow}</p>
    <button className='text-white bg-yellow-800 rounded-md' onClick={()=>updateMoves('yellow')}>+1</button>
    <p className='text-center'>Green moves{moves.green}:</p>
    <button className='text-white bg-green-800 rounded-md' onClick={()=>updateMoves('green')}>+1</button>
    <p className='text-center'>Red moves:{moves.red}</p>
    <button className='text-white bg-red-800 rounded-md' onClick={()=>updateMoves('red')}>+1</button>
    </div>
    </div>
  )
}
export default LudoBoard