import React, { useState } from 'react'


export default function Signup() {
    const [user, setUser] = useState(null)

    const signUp = () => {}

  return (
    <div className="signUp"><label>Sign Up</label>
    <input placeholder='First name' onChange={(event)=> {
        setUser({ ...user, firstName: event.target.value })
    }}/>
        <input placeholder='Last name' onChange={(event)=> {
        setUser({ ...user, lastName: event.target.value })
    }}/>
        <input placeholder='Username' onChange={(event)=> {
        setUser({ ...user, userName: event.target.value })
    }}/>
        <input placeholder='Password' onChange={(event)=> {
        setUser({ ...user, password: event.target.value })
    }}/>
    <button onClick={signUp}>Sign Up</button>
    </div>
  )
}
