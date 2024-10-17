type resourceprops={
    name:string,
    amount:number,
    onchange:(increment:number)=>void
}

const Resorce = (props:resourceprops) => {
  return (
    <div className="resource">
      <p>{props.name} <span>{props.amount}</span></p>
      <div className="button_container">
        <button onClick={()=>props.onchange(-1)}>-</button>
        <button onClick={()=>props.onchange(1)}>+</button>
      </div>
      </div>
  )
}

export default Resorce