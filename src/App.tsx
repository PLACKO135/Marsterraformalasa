import './app.css'
import { useState } from 'react'
import Resource from './components/Resource/Resorce'
import Playername from './components/PlayerName/Playername'

const App = () => {
  const [Megacredit, setmegacredit] = useState(0)
  const handlecreditchange = (increment:number) => {
    setmegacredit(Megacredit + increment)
  }
  const [Steel, setsteel] = useState(0)
  const handlesteelchange = (increment:number) => {
    setsteel(Steel + increment)
  }
  const [Titanite, setTitanite] = useState(0)
  const handletitanitechange = (increment:number) => {
    setTitanite(Titanite + increment)
  }
  const [Herb, setherb] = useState(0)
  const handleherbchange = (increment:number) => {
    setherb(Herb + increment)
  }
  const [Energy, setEnergy] = useState(0)
  const handleEnergychange = (increment:number) => {
    setEnergy(Energy + increment)
  }
  const [Heat, setHeat] = useState(0)
  const handleheatchange = (increment:number) => {
    setHeat(Heat + increment)
  }
  return (
    <div className="container">
      <Playername/>
      <Resource name="Megacredit" amount={Megacredit} onchange={handlecreditchange}/>
      <Resource name="Steel" amount={Steel} onchange={handlesteelchange}/>
      <Resource name="Titanite" amount={Titanite} onchange={handletitanitechange}/>
      <Resource name="Herb" amount={Herb} onchange={handleherbchange}/>
      <Resource name="Energy" amount={Energy} onchange={handleEnergychange}/>
      <Resource name="Heat" amount={Heat} onchange={handleheatchange}/>
    </div>
  )
}

export default App