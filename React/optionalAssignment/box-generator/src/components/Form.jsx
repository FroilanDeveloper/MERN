import { useState } from 'react'

const Form = ({addBox}) => {
  // we are defining our inputs
  const [boxColor, setBoxColor] = useState("");
  const [boxSize, setBoxSize] = useState("");

  const createBox = (e) => {
    e.preventDefault(); 
    const newBox = {boxColor, boxSize}; // newbox is defining boxcolor and box size
    addBox(newBox) // addbox is method to add +1 
  } 

  return(
    <form onSubmit={createBox}>
      <div>
        <label>Box Color:</label>
        <input type="text" name="boxColor"
        onChange={(e) => setBoxColor(e.target.value)}
        value={boxColor}
        />
      </div>
      <div>
        <label>Box Size:</label>
        <input type="number"  name="boxSize" 
        onChange={(e) => setBoxSize(parseInt(e.target.value))}
        value = {boxSize}></input>
      </div>
      <button type='submit'>Create Box</button>
    </form>
  )
}

export default Form

