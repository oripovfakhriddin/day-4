import React from "react"
import dataCard from "./components/data-card/data-card"
import { Card } from "./components/pages/card"
function App() {
  

  return (
   <div>
   {
    dataCard.map((item)=> (<Card key={item.id} {...item}/>))
   }
   </div>
  )
}

export default App
