
import './App.css';
import PersonCardComponent from './PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent lastname={"Abellanosa"} firstname={"Froilan"} age={23} haircolor={"Black"}/>
      <PersonCardComponent lastname={"Doe"} firstname={"John"} age={1000} haircolor={"White"}/>
      <PersonCardComponent lastname={"Doe"} firstname={"Jane"} age={10050} haircolor={"Blue"}/>
    </div>
  );
}

export default App;
