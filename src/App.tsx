import './app.css'

import Playername from './components/PlayerName/Playername'
const App = () => {
  return (
    <div className="container">
      <Playername/>
      <div className="resource">
      <p>Steel: <span>50</span></p>
      <div className="button_container">
        <button>-</button>
        <button>+</button>
      </div>
      </div>
      <div className="resource">
      <p>Steel: <span>50</span></p>
      <div className="button_container">
        <button>-</button>
        <button>+</button>
      </div>
      </div>
      <div className="resource">
      <p>Steel: <span>50</span></p>
      <div className="button_container">
        <button>-</button>
        <button>+</button>
      </div>
      </div>
    </div>
  )
}

export default App