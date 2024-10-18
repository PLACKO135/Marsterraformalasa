type resourceprops={
    name:string,
    amount:number,
    production:number,
    onchangeprod:(increment:number)=>void,
    onchange:(increment:number)=>void
}

const Resorce = (props:resourceprops) => {
  return (
    <div className="resource">
      <p>{props.name} <span>{props.amount}</span></p>
      <div className="button_container">
        <button type="button" onClick={()=>props.onchange(-1)}>-</button>
        <button type="button" onClick={()=>props.onchange(1)}>+</button>
      </div>
      <p>termelés: <span>{props.production}</span></p>
      <div className="button_container">
        <button type="button" onClick={()=>props.onchangeprod(-1)}>-</button>
        <button type="button" onClick={()=>props.onchangeprod(1)}>+</button>
      </div>
      </div>
  )
}

export default Resorce