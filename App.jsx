import "./App.css";
import Card from "./components/Card";
import React from 'react'

function App () {
  return (
    <>
    <div className="cards">
    <Card img= "/img/ai-generated-8620359_640.png" desc = "birinci kart için yazı"
    />
    <Card img= "/img/dachshund-1519374_640.jpg" desc = "ikinci kart için yazı"/>
    <Card img= "/img/horse-197199_640.jpg" desc = "üçüncü kart için yazı"/>
    <Card img= "/img/rabbit-8489271_640.png "  desc = "dördüncü kart için yazı"/>

    
    </div>
    </>
  )
}

export default App
