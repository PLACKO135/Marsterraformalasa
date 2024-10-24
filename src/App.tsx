import './app.css'
import { FormEvent,  useState } from 'react'
import Resource from './components/Resource/Resorce'
import Playername from './components/PlayerName/Playername'
import { resourceprops } from './components/Resource/Resorce'

function App  ()  {
 const [resources, setResource] = useState<resourceprops[]>([
 {name: "Megacredit",amount: 0,production: 0},
 {name: "Steel",amount: 0,production: 0},
 {name: "Titanite",amount: 0,production: 0},
 {name: "Herbs",amount: 0,production: 0},
 {name: "Energy",amount: 0,production: 0},
 {name: "Heat",amount: 0,production: 0}
 ]  
 )
const handleIcrement=(increment: number, index:number, field:'amount'|'production' )=>{
   setResource(prevResources=>{
  const updateResource = [...prevResources] 
  updateResource[index]={
    ...updateResource[index],
    [field]:updateResource[index][field] + increment
  }    
  return updateResource
  })}


const handlSubmit2= (e:FormEvent)=>{ 
  e.preventDefault()
  setResource(prevResources=>(prevResources.map(resource=>({...resource,amount:resource.amount+resource.production}))))
 

}

  return (
    <form onSubmit={handlSubmit2} className="container">
      <Playername/>
      {resources.map((resource,index)=>(
        <Resource
        name={resource.name} 
        amount={resource.amount} 
        onchange={(increment:number)=>handleIcrement(increment,index,'amount')}
        production={resource.production}
        onchangeprod={(increment:number)=>handleIcrement(increment,index,'production')}
        ></Resource>
      ))}
       
       <button type='submit' className='NextRound'>Next Round</button>

    </form>
  )
}

export default App