import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dest from './components/Dest';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Header from './components/Header';
import Explore from './components/Explore';
import { StrictMode } from 'react';



function App() {
  return (
    <StrictMode >
    <BrowserRouter>  
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination-cover' element={<Dest />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
  );
}

export default App;
