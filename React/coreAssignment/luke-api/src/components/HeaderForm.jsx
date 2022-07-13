import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// form: handleSubmit
// input: state

const HeaderForm = () => {
  const [search, setSearch] = useState("")
  const [id, setId] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`${search}/${id}`)
    // localhost:3000/people/2
  }


  return (
    <form onSubmit={handleSubmit}>
      <label> Search for: </label>
      <select name="search" value={search} onChange={e => setSearch(e.target.value)}>
        <option value="People">People</option>
        <option value="Planets">Planets</option>
      </select>

      <label> Id: </label>
      <input type="number" name='id' value={id} onChange={e=>setId(e.target.value)} />
      
      <button type='submit'> Search </button>
    </form>
  )
}

export default HeaderForm