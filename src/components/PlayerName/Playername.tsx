import  { useState } from 'react'

const Playername = () => {
    const [isedit, setIsedit] = useState<boolean>(true)

    const edit = () => {
        setIsedit(!isedit)
    }

  return (
    <> 
    {isedit?(<div onClick={edit} className="playername"> <h1>Player name</h1> </div>):(<form> <input type="text" /> <button>Save</button> </form>)}
    </>
  )
}

export default Playername