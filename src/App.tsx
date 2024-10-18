import './app.css'
import { FormEvent, useEffect, useState } from 'react'
import Resource from './components/Resource/Resorce'
import Playername from './components/PlayerName/Playername'

function App  ()  {
  const loadresource=(resource:string)=>{
    const savedmc=localStorage.getItem(resource);
    return savedmc? Number(savedmc):0;
  }
  const [Megacredit, setmegacredit] = useState(loadresource("megacredit"))
  const [Megacreditprod, setmegacreditprod] = useState(loadresource("megacreditprod"))
 
  const [Steel, setsteel] = useState(loadresource("steel"))
  const [Steelprod, setsteelprod] = useState(loadresource("steelprod"))

  const [Titanite, setTitanite] = useState(loadresource("titanite"))
  const [Titaniteprod, setTitaniteprod] = useState(loadresource("titaniteprod"))

  
  const [Herb, setherb] = useState(loadresource("herb"))
  const [Herbprod, setherbprod] = useState(loadresource("herbprod"))

  const [Energy, setEnergy] = useState(loadresource("energy"))
  const [Energyprod, setEnergyprod] = useState(loadresource("energyprod"))
 
  const [Heat, setHeat] = useState(loadresource("heat"))
  const [Heatprod, setHeatprod] = useState(loadresource("heatprod"))
 

const handleIcrement=(increment: number, resource:number, setResource: (vlaue:number)=>void)=>{
   setResource(resource+increment)
}


useEffect(()=>{
  localStorage.setItem("megacredit", Megacredit.toString())
  localStorage.setItem("megacreditprod", Megacreditprod.toString())
  localStorage.setItem("steel", Steel.toString())
  localStorage.setItem("steelprod", Steelprod.toString())
  localStorage.setItem("titanite", Titanite.toString())
  localStorage.setItem("titaniteprod", Titaniteprod.toString())
  localStorage.setItem("herb", Herb.toString())
  localStorage.setItem("herbprod", Herbprod.toString())
  localStorage.setItem("energy", Energy.toString())
  localStorage.setItem("energyprod", Energyprod.toString())
  localStorage.setItem("heat", Heat.toString())
  localStorage.setItem("heatprod", Heatprod.toString())
  }, [Megacredit,Megacreditprod,Steel,Steelprod,Titanite,Titaniteprod,Herb,Herbprod,Energy,Energyprod,Heat,Heatprod])


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