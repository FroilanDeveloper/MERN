import React, { useState } from 'react';

const MoreForms = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  

  return(
    <div classname='container'>
      <form>
        <div>
          <h3>FORM</h3>
        </div>
        <h3 classname='answers'>
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname}  />
          {
            (firstname.length === 0)? "":
            (firstname.length < 3)?
            <span style={{color: "blue"}}><h5>First Name should be at least 3 characters!</h5></span>:""
          }
        </h3>
        <h3 classname='answers'>
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastname}  />
          {
            (lastname.length === 0)? "":
            (lastname.length < 3)?
            <span style={{color: "purple"}}><h5>Last Name should be at least 3 characters!</h5></span>:""
          }
        </h3>
        <h3 classname='answers'>
          <label>Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}  />
          {
            (email.length === 0)? "":
            (email.length < 10)?
            <span style={{color: "orange"}}><h5>Email should be at least 10 characters!</h5></span>:""
          }
        </h3>
        <h3 classname='answers'>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          {
            (password.length === 0)? "":
            (password.length < 15)?
            <span style={{color: "red"}}><h5>Password should be at least 15 characters!</h5></span>:""
          }
        </h3>
        <h3 classname='answers'>
          <label>Confirmed Password: </label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword}  />
          {
            (confirmpassword.length === 0)? "":
            (confirmpassword.length == password)?
            <span style={{color: "skyblue"}}><h5>This must match password!</h5></span>:""
          }
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

export default MoreForms