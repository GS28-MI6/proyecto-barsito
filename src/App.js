import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import NotFound from './paginas/NotFound';
import Stats from './paginas/Stats';
import Home from './paginas/Home';
import Productos from './paginas/Productos';
import './App.css';

const pages = {
  home: "/home",
  stats: "/stats",
  productos: "/productos",
  carta: "/carta"
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={pages.home} element={<Home />} />
        <Route path={pages.productos} element={<Home />} />
        <Route path={pages.stats} element={<Stats />} />
        <Route path={pages.carta} element={<Carta />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
