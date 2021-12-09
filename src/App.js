import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/NavBar/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Ciudad from './components/Detalle/Ciudad'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<div><Nav/><Home/></div>}/>
        <Route path ="/about" element={<div><Nav/><About/></div>}/>
        <Route path = "/ciudad/:id" element={<div><Nav/><Ciudad/></div>}/>
      </Routes>
    </div>
  );
}

export default App;
