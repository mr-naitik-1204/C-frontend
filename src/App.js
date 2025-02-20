import logo from './logo.svg';
import './App.css';
import Lending from './componet/Lending';
import Contect from './componet/Contect';
import About from './componet/About';
import Blog from './componet/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gotop from './componet/Gotop';
import Resrvation from './componet/Resrvation';
import Manu from './componet/Manu';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DetailPage from './componet/Detailpage';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lending />}>
            </Route>
            <Route path="/menu" element={<Manu />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/contact" element={<Contect />}>
            </Route>
            <Route path="/blog" element={<Blog />}>
            </Route>
            <Route path="/reservation" element={<Resrvation />}>
            </Route>
            <Route path="/detail" element={<DetailPage />} >
            </Route>
        </Routes>
    </BrowserRouter >
      <Gotop />



    </>
  );
}

export default App;
