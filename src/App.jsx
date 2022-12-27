import React from "react"
import './App.css'
import Navbar from './components/Navbar'
import Travel from './components/Travel'
import travelData from './data'

export default function App() {
  const travelElement = travelData.map(data =>{
    return(
      <Travel 
        key = {data.id}
        item = {data}
      />
    )
  })
  return (
    <div>
      <Navbar />
      {travelElement}
    </div>
  )
}
