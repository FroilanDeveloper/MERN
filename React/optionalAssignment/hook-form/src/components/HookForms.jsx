import React, { useState } from 'react';

const HookForms = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  return(
    <div classname='container'>
      <form classname='forms'>
        <h3 classname='answers'>
          <label>First Name: </label>
          <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstname} />
        </h3>
        <h3 classname='answers'>
          <label>Last Name: </label>
          <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastname} />
        </h3>
        <h3 classname='answers'>
          <label>Email: </label>
          <input type="text" onChange={ (e) => setEmail(e.target.value)} value={email} />
        </h3>
        <h3 classname='answers'>
          <label>Password: </label>
          <input type="text" onChange={ (e) => setPassword(e.target.value)} value={password} />
        </h3>
        <h3 classname='answers'>
          <label>Confirmed Password: </label>
          <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmpassword} />
        </h3>
      </form>
      <div>
        <h1>Display</h1>
        <h3>First Name: {firstname}</h3>
        <h3>Last Name: {lastname}</h3>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
        <h3>Confirm Password: {confirmpassword}</h3>
      </div>
    </div>
  )
}

export default HookForms