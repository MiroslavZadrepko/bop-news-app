// extra: Add option to sort articles by date of publish (DESC / ASC)

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Technology from "./components/Technology";
import Sports from "./components/Sports";
import './App.css'

function App() {

  return (
    <>

      <h2>Choose category: </h2><br></br>
      <Router>
        <div>
          <Link to="/technology">Technology</Link>
          <Link className="sport" to="/sports">Sports</Link>
        </div>
        <Switch>

          <Route path="/technology">
            <Technology />
          </Route>

          <Route path="/sports">
            <Sports />
          </Route>

        </Switch>

      </Router>

    </>
  );
}

export default App;