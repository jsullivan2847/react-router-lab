import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Stocks from './pages/Stocks';
import Home from './pages/Home';
import Details from './pages/Details';
import data from './resources/data';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/stocks">
        <Stocks stocks={data}/>
      </Route>
      <Route path="/stock/:symbol/details" render={(renderProps) => {
        return <Details {...renderProps} data={data}/>
      }}>
      </Route>
    </div>
  );
}

export default App;
