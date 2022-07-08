import React, { useState } from 'react';


const PersonCardComponent = (props) => { 
  const { firstname, lastname, haircolor} = props
  const [age, setAge] = useState(props.age)
  const AddAge = ()=>{setAge(age+1)}
  return (
    <div> 
      <h1>{lastname}, {firstname}</h1>
      <h3>Age: {age}</h3>
      <h3>HairColor: {haircolor}</h3>
      <button onClick = {AddAge}>Birthday button for {lastname}, {firstname}</button>
    </div>
  );
}

export default PersonCardComponent;

