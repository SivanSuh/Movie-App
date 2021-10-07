import React from "react"
import './App.css';
import { Switch, Route} from "react-router-dom"
import Home from "./Home"
import Movies from "./SingleMovie"

function App() {
  return (
    <Switch>
      <Route path="/" exact>
          <Home />
      </Route>
      <Route path="/movies/:id" children={<Movies />} /> 
    </Switch>
  );
}

export default App;
