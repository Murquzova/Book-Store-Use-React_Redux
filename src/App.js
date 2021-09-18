import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Details from './pages/Details';
import Admin from './pages/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
