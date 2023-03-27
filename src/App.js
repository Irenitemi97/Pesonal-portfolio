import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import Service from './Components/Pages/Service';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Protfolio' element={<Portfolio/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
