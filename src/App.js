
import { useState } from 'react';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Navbar from './components/Navbar';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
    <BrowserRouter>
      <LoadingBar
        color='#e60000'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home setProgress={setProgress}/>}/>
        <Route path='/about' element={<About setProgress={setProgress}/>}/>
        <Route path='/project' element={<Project setProgress={setProgress}/>}/>
        <Route path='/contact' element={<Contact setProgress={setProgress}/>}/>
        <Route path='/gallery' element={<Gallery setProgress={setProgress}/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
