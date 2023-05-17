import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Love from './components/Love';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/love' element={<Love />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;
