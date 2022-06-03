import Navbar from './Navbar'
import Home from './Home'
import About from './About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Header from './Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>     
      </div>
    </div>
    </Router>
  );
}

export default App;
