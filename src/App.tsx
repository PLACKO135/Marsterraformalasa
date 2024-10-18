import './app.css'
import { useState } from 'react'
import Resource from './components/Resource/Resorce'
import Playername from './components/PlayerName/Playername'

const App = () => {
  const [Megacredit, setmegacredit] = useState(0)
  const [Megacreditprod, setmegacreditprod] = useState(0)
  const handlecreditchange = (increment:number) => {
    setmegacredit(Megacredit + increment)
  }
  const handlecreditprod = (increment:number) => {
    setmegacreditprod(Megacreditprod + increment)
  }
  const [Steel, setsteel] = useState(0)
  const [Steelprod, setsteelprod] = useState(0)
  const handlesteelchange = (increment:number) => {
    setsteel(Steel + increment)
  }
  const handlesteelchangeprod = (increment:number) => {
    setsteelprod(Steelprod + increment)
  }
  const [Titanite, setTitanite] = useState(0)
  const [Titaniteprod, setTitaniteprod] = useState(0)
  const handletitanitechange = (increment:number) => {
    setTitanite(Titanite + increment)
  }
  const handletitanitechangeprod = (increment:number) => {
    setTitaniteprod(Titaniteprod + increment)
  }
  const [Herb, setherb] = useState(0)
  const [Herbprod, setherbprod] = useState(0)
  const handleherbchange = (increment:number) => {
    setherb(Herb + increment)
  }
  const handleherbchangeprod = (increment:number) => {
    setherbprod(Herbprod + increment)
  }
  const [Energy, setEnergy] = useState(0)
  const [Energyprod, setEnergyprod] = useState(0)
  const handleEnergychange = (increment:number) => {
    setEnergy(Energy + increment)
  }
  const handleEnergychangeprod = (increment:number) => {
    setEnergyprod(Energyprod + increment)
  }
  const [Heat, setHeat] = useState(0)
  const [Heatprod, setHeatprod] = useState(0)
  const handleheatchange = (increment:number) => {
    setHeat(Heat + increment)
  }
  const handleheatchangeprod = (increment:number) => {
    setHeatprod(Heatprod + increment)
  }


const handleIcrement=(increment: number, resource:number, setResource: (vlaue:number)=>void)=>{
   setResource(resource+increment)
}

  return (
    <div className="container">
      <Playername/>
      <Resource 
        name='Megacredit' 
        amount={Megacredit} 
        onchange={(increment:number)=>handleIcrement(increment,Megacredit,setmegacredit)}
        production={Megacreditprod}
        onchangeprod={handlecreditprod}
        />
         <Resource 
        name='Steel' 
        amount={Steel} 
        onchange={handlesteelchange}
        production={Steelprod}
        onchangeprod={handlesteelchangeprod}
        />
          <Resource 
        name='Titanite' 
        amount={Titanite} 
        onchange={handletitanitechange}
        production={Titaniteprod}
        onchangeprod={handletitanitechangeprod}
        />
          <Resource 
        name='Herb' 
        amount={Herb} 
        onchange={handleherbchange}
        production={Herbprod}
        onchangeprod={handleherbchangeprod}
        />
              <Resource name="Energy" production={Energyprod} amount={Energy} onchange={handleEnergychange} onchangeprod={handleEnergychangeprod}/>
              <Resource name="Heat" production={Heatprod} amount={Heat} onchange={handleheatchange} onchangeprod={handleheatchangeprod}/>
       <button type='submit' className='NextRound'>Next Round</button>

    </div>
  )
}

export default App