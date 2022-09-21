import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react';
import Page from './Components/Pagination/Pagination';
import Main from "./Components/Quiz/Main/Main";
import Chart from "./Components/Chart/Chart";
import Handle from './Handle';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Handle />} />
          <Route path='posts' element={<Page />} />
          <Route path='chart' element={<Chart />} />
          <Route path='quiz' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>





  );
}

export default App;
