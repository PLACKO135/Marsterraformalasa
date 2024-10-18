import './app.css'
import { FormEvent, useEffect, useState } from 'react'
import Resource from './components/Resource/Resorce'
import Playername from './components/PlayerName/Playername'

function App  ()  {
  const loadmegac=()=>{
    const savedmc=localStorage.getItem("megacredit");
    return savedmc? Number(savedmc):0;
  }
  const [Megacredit, setmegacredit] = useState(0)
  const [Megacreditprod, setmegacreditprod] = useState(0)
 
  const [Steel, setsteel] = useState(0)
  const [Steelprod, setsteelprod] = useState(0)

  const [Titanite, setTitanite] = useState(0)
  const [Titaniteprod, setTitaniteprod] = useState(0)

  
  const [Herb, setherb] = useState(0)
  const [Herbprod, setherbprod] = useState(0)

  const [Energy, setEnergy] = useState(0)
  const [Energyprod, setEnergyprod] = useState(0)
 
  const [Heat, setHeat] = useState(0)
  const [Heatprod, setHeatprod] = useState(0)
 

const handleIcrement=(increment: number, resource:number, setResource: (vlaue:number)=>void)=>{
   setResource(resource+increment)
}


useEffect(()=>{
  localStorage.setItem("megacredit", Megacredit.toString())
  }, [Megacredit])


const handlSubmit2= (e:FormEvent)=>{ 
  e.preventDefault() 
  setmegacredit(Megacredit+Megacreditprod)
  setsteel(Steel+Steelprod)
  setTitanite(Titanite+Titaniteprod)
  setEnergy(Energyprod+Energy)
  setherb(Herb+Herbprod)
  setHeat(Heat+Heatprod)

}

  return (
    <form onSubmit={handlSubmit2} className="container">
      <Playername/>
      <Resource 
        name='Megacredit' 
        amount={Megacredit} 
        onchange={(increment:number)=>handleIcrement(increment,Megacredit,setmegacredit)}
        production={Megacreditprod}
        onchangeprod={(increment:number)=>handleIcrement(increment,Megacreditprod,setmegacreditprod)}
        />
         <Resource 
        name='Steel' 
        amount={Steel} 
        onchange={(increment:number)=>handleIcrement(increment,Steel,setsteel)}
        production={Steelprod}
        onchangeprod={(increment:number)=>handleIcrement(increment,Steelprod,setsteelprod)}
        />
          <Resource 
        name='Titanite' 
        amount={Titanite} 
        onchange={(increment:number)=>handleIcrement(increment,Titanite,setTitanite)}
        production={Titaniteprod}
        onchangeprod={(increment:number)=>handleIcrement(increment,Titaniteprod,setTitaniteprod)}
        />
          <Resource 
        name='Herb' 
        amount={Herb} 
        onchange={(increment:number)=>handleIcrement(increment,Herb,setherb)}
        production={Herbprod}
        onchangeprod={(increment:number)=>handleIcrement(increment,Herbprod,setherbprod)}
        />
              <Resource 
              name="Energy" 
              production={Energyprod}
              amount={Energy} 
              onchange={(increment:number)=>handleIcrement(increment,Energy,setEnergy)} 
              onchangeprod={(increment:number)=>handleIcrement(increment,Energyprod,setEnergyprod)}/>
              <Resource 
              name="Heat" 
              production={Heatprod} 
              amount={Heat} 
              onchange={(increment:number)=>handleIcrement(increment,Heat,setHeat)} 
              onchangeprod={(increment:number)=>handleIcrement(increment,Heatprod,setHeatprod)}/>

       <button type='submit' className='NextRound'>Next Round</button>

    </form>
  )
}

export default App