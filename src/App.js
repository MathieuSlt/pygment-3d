import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import News from './pages/News';
import Artists from './pages/Artists';
import Project from './pages/Project';
import Teams from './pages/Teams';
import TroisD from './pages/TroisD';


const App = () => {
  return (
    <BrowserRouter basename='/pygment-3d' >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pygment-3d' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/project' element={<Project />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/3d' element={<TroisD />} />

        {/* 404 */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;