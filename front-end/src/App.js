import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Leaderboard from './Pages/Leaderboard';

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--neongreen);

  h2 {
    font-size: calc( 2rem + 2vw );
  }
`

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <Pages>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} /> 
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        </BrowserRouter>
      </Pages>

    </div>
  );
};

export default App;
