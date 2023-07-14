//import logo from './logo.svg';
import * as React from 'react'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import Navbar from './Components/Navbar';
import My_works from './Components/My works';
import Contact from './Components/Contact';
import Galary from './Components/Galary';

function App() {
  return (
    <div id='body'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}></Route>
          <Route path="About" element={<About/>}></Route>
          <Route path="Myworks" element={<My_works/>}></Route>
          <Route path="Galary" element={<Galary/>}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
