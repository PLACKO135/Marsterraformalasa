import  { useState } from 'react'
import './Playername.module.css'

const Playername = () => {
    const [isedit, setIsedit] = useState<boolean>(true)
    const [name, setName] = useState<string>("Playername")

    const edit = () => {
        setIsedit(!isedit)
    }

    const save = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

const submit = (e:React.FormEvent) => {
    e.preventDefault()
    edit()
}

  return (
    <> 
    {isedit?(<div onClick={edit} className="playername"> <h1>{name}</h1> </div>):(<form onSubmit={submit} className='Playernamechange'> <input type="text" value={name} onChange={save} /> <button type='submit' >Save</button> </form>)}
    </>
  )
}

export default Playername