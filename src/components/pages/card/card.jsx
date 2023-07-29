import React from 'react'

export const Card = ({firstname, id, lastname}) => {
  const [state, setState]=React.useState(0)
  return (
    <div>
      <h1>{id} {firstname} {lastname}</h1>
      <p>{state}</p> 
      <button onClick={()=>setState((el)=>el+1)}>click</button>
    </div>
  )
}
