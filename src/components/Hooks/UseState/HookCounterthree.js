import React, { useState } from 'react'

function HookCounterthree() {
    const [Name, setName] = useState({"FirstName" : "" , "LastName" : ""})
  return (
    <>
      <div>
        <input type="text" value = {Name.FirstName} onChange={e => setName({...Name, FirstName: e.target.value})} ></input>
      </div>
      <div>
        <input type="text" value = {Name.LastName} onChange={e => setName({...Name, LastName: e.target.value})} ></input>
      </div>

      "FirstNAme" : {Name.FirstName} " LastName" : {Name.LastName}

      {JSON.stringify(Name)}
      </>
      
  )
}

export default HookCounterthree
