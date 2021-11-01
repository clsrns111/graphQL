import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/detail" component={Detail}></Route>
    </Router>
  );
}

export default App;
