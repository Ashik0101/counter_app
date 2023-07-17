import "./App.css";
import Counter from "./Counter";
import HelloWorld from "./HelloWorld"
import { Route,Routes } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HelloWorld /> }></Route>
        <Route path="/counter-page" element={ <Counter />}></Route>
      </Routes>
    </div>
  );
}

export default App
