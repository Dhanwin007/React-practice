import React from 'react'
import { useState } from 'react'
import {genTicket,sum,TicketComponent} from './index.js'



function Lottert() {
    let [ticket,setTicket]=useState(()=>genTicket(Math.floor(Math.random()*5)+1));
    let [sum1,setSum]=useState(0);
    let [hasWon, setHasWon] = useState(false);
    const generate = () => {
        const newTicket = genTicket(Math.floor(Math.random()*5)+1);
        setTicket(newTicket);
        
        // Check win condition ONLY at the moment of clicking
        if (sum1 !== "" && sum(newTicket) === Number(sum1)) {
            setHasWon(true);
        } else {
            setHasWon(false);
        }
    }
    
  return (
    <div style={{backgroundImage:hasWon?'url(https://images.pexels.com/photos/7723722/pexels-photo-7723722.jpeg)':'url(https://images.pexels.com/photos/6193923/pexels-photo-6193923.jpeg)'}}>
        <h1>Lottery Game</h1>
        <div>
            <TicketComponent ticket={ticket}/>
        </div>
        <div>
          <input placeholder="Enter your lucky sum here" value={sum1} onChange={(e)=>setSum(e.target.value)}/>
        </div>
        <div><button onClick={generate}>Generate ticket</button></div>
        <h4>{hasWon ? "Congrats, you won!" : "Sorry, you failed"}</h4>
    </div>
  )
}

export default Lottert