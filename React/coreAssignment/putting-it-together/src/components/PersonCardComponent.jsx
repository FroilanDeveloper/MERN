import { render } from '@testing-library/react';
import React, { Component } from 'react'


export class PersonCardComponent extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      "age": this.props.age
    };
  }
  render(){ 

    const click = () => {
      this.setState({
        age: this.state.age + 1
      });
    }
    return (
      <div> 
        <h1>{ this.props.lastname } { this.props.firstname }</h1>
        <h3>Age: { this.state.age }</h3>
        <h3>HairColor: { this.props.haircolor }</h3>
        <button onClick = {() => click() }>Birthday button for { this.props.lastname } { this.props.firstname }</button>
      </div>
    );
  }
}

export default PersonCardComponent

// // class PersonCard extends Component {
//   render(){
//     const{firstName, lastName, age, haircolor} = this.props
//     return{
//       <div>
//         <h1>{firstName}, {lastName}</h1>

//       </div>
//     }
//   }
// }