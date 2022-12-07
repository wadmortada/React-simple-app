import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="Frist card h2" h3="frist card h3"/>
      <Card h2="Fsecond card h2" h3="second card h3"/>
      <Card h2="thrid card h2" h3="thrid card h3"/>
    </div>
  );
}

export default App;