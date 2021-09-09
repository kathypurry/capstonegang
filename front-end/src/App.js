import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import styled from "styled-components";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Leaderboard from "./Pages/Leaderboard";
import Snippets from "./Components/Snippets";

import TestPage from "./Pages/TestPage";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--neongreen);

  h2 {
    font-size: calc(2rem + 2vw);
  }
`;

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/test" component={TestPage} />
            <Route path="/code" component={Snippets} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </div>
  );
};

export default App;
