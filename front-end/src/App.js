import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
