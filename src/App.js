import "./App.css";
import { Button } from "./components/Button";

function App() {
  const myArray = ["apple", "banana", "orange"];
  const myList = myArray.map((item) => <p>{item}</p>);

  return (
    <div className="App">
      <h1> Hello World!</h1>
      <div>{myList}</div>
      <Button />
    </div>
  );
}

export default App;
