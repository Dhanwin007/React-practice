import React from 'react'
import {TicketNum} from './index.js'
function TicketComponent({
    ticket=[]
}) {
  return (
    <div>
      {ticket.map((tick,index)=>{ return <span key={index}><TicketNum num={tick}  /></span>})}
    </div>
  )
}

export default TicketComponent