import { useState } from 'react';
import './App.css';
import MayTinh from './component/maytinh';
import Maytinh2 from './component/maytinh2/Maytinh2';
import Bmi from './component/BMI/Bmi';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/maytinh' element={<MayTinh />} />
          <Route path='/maytinh2' element={<Maytinh2 />} />
          <Route path='/bmi' element={<Bmi />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
