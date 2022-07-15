import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = () => {
  const { id } = useParams();
  const [person, setPerson] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setPerson(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <form>
      <div>
        {person ? (
          <div>
            <h1> {person.name}</h1>
            <h3>Height: {person.height}</h3>
            <h3>Mass: {person.mass}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
            <h3>Skin Color: {person.skin_color}</h3>
          </div>
        ) : (
          <div>
            <h1>This is not the droids you're not looking for</h1>
            <img
              src="https://media0.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif?cid=ecf05e47wfu58s5bmwv5ud6t9bqnanod13fqwltaabs478vo&rid=giphy.gif&ct=g
"
              alt="kenobi"
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default People;
