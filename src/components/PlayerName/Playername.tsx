import  { FormEvent, useState } from 'react'


const Playername = () => {
  const [isEdit, setIsEdit] = useState<boolean>(true)
  const [playerName, setPlayerName] = useState(
      localStorage.getItem("playerName") || "Player Name"
  )

  const handleChangeEdit = () => {
      setIsEdit(!isEdit)
  }

  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlayerName(e.target.value)
      localStorage.setItem("playerName", e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      handleChangeEdit()
  }

  return (
      <>
          {isEdit ? (
              <div onClick={handleChangeEdit} className="Playernamechange">
                  <h1>{playerName}</h1>
              </div>
          ) : (
              <form onSubmit={handleSubmit} className="Playernamechange">
                  
                  <input
                      id="playerName"
                      type="text"
                      value={playerName}
                      onChange={handlePlayerNameChange}
                      placeholder="Enter player name"
                  />
                  <button type="submit">Save</button>
              </form>
          )}
      </>
  )
}

export default Playername