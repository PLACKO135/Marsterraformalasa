import './app.css'
const App = () => {
  return (
    <div className="container">
      <div className="playername">
        <h1>Player name</h1>
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