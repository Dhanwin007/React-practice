import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherElement = (<a href="http://google.com">Click to get into google</a>)
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank',
       
    },
    
    children:'Click me to visit google'
}
const areactElement = React.createElement(
      'a',
      {
            href:'https://google.com',
            target:"_blank"
      },
      'click to visit my google'
)


createRoot(document.getElementById('root')).
render(
<>
      <App/>,
      {areactElement}
      </>

      
  
)
