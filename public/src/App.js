import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbars from './component/Navbars';
import Nopage from './pages/Nopage';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
      <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Nopage/>}/>
          
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
