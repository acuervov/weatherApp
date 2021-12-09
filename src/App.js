import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/NavBar/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Detalle from './components/Detalle/Ciudad'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<div><Nav/><Home/></div>}/>
        <Route path ="/about" component={<div><Nav/><About/></div>}/>
        <Route path = "/ciudad/:id" component={<div><Nav/><Detalle/></div>}/>
      </Routes>
    </div>
  );
}

export default App;
