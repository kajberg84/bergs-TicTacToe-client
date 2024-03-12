import React, { useState } from 'react'
import Axios from "axios"
import Cookies from "universal-cookie"

export default function Signup() {
    const cookies = new Cookies();
    const [user, setUser] = useState(null)

    const signUp = () => {
        Axios.post("http://localhost:3001/signup", user).then(res => {
            const { token,userId, firstName, lastName, username, hashedPassword } = res.data;
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            cookies.set("username", username);
        });
    }

  return (
    <div className="signUp"><label>Sign Up</label>
    <input placeholder='First name' onChange={(event)=> {
        setUser({ ...user, firstName: event.target.value })
    }}/>
        <input placeholder='Last name' onChange={(event)=> {
        setUser({ ...user, lastName: event.target.value })
    }}/>
        <input placeholder='Username' onChange={(event)=> {
        setUser({ ...user, username: event.target.value })
    }}/>
        <input placeholder='Password' onChange={(event)=> {
        setUser({ ...user, password: event.target.value })
    }}/>
    <button onClick={signUp}>Sign Up</button>
    </div>
  )
}
