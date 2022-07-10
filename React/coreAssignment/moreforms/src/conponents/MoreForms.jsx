import React, { useState } from 'react';

const MoreForms = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isSubmitted , setIsSubmitted] = useState(false);

  const createUser = (e) => {
    const newUser = {firstname, lastname, email, password, confirmpassword};
    console.log("Hello", newUser, "Welcome to your new reality");
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(firstname.length > 3 && lastname.length > 3 && email.length > 10 && password.length >= 15 && password === confirmpassword){
      console.log({firstname, lastname, email, password, confirmpassword});
      createUser();
      setIsSubmitted(true);
    }else{
      alert("Fix your form please")
    }
  }

    const formMessage = () => {
      if(isSubmitted){
        return "Thank you for submitting this form"
      }else {
        return "You must complete the FORM"
      }
    }
  
  return(
    <div classname='container'>

      <div>
        <h3>Hello User</h3>
        <h3>{formMessage()}</h3>
      </div>

      <form onSubmit={handleSubmit}>

        <h3 classname='answers'>
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname}  />
          {
            (firstname.length < 3)?
            <span style={{color: "blue"}}><h5>First Name should be at least 3 characters!</h5></span>:""
          }
        </h3>

        <h3 classname='answers'>
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastname}  />
          {
            (lastname.length < 3)?
            <span style={{color: "purple"}}><h5>Last Name should be at least 3 characters!</h5></span>:""
          }
        </h3>

        <h3 classname='answers'>
          <label>Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}  />
          {
            (email.length < 10)?
            <span style={{color: "orange"}}><h5>Email should be at least 10 characters!</h5></span>:""
          }
        </h3>

        <h3 classname='answers'>
          <label>Password: </label>
          <input type="password" onChange={handlePassword} value={password} />
          {
            (password.length < 15)?
            <span style={{color: "red"}}><h5>Password should be at least 15 characters!</h5></span>:""
          }
        </h3>

        <h3 classname='answers'>
          <label>Confirmed Password: </label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword}  />
          {
            (confirmpassword.length === password)?
            <span style={{color: "skyblue"}}><h5>This must match password!</h5></span>:""
          }
        </h3>

        <button type='submit'><h3>Submit</h3></button>
      </form>
      <div>
        <h1>User</h1>
        <h3>First Name: {firstname}</h3>
        <h3>Last Name: {lastname}</h3>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
      </div>
    </div>
  )
}

export default MoreForms

