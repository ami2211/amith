import logo from './logo.svg';
import './App.css';

import Addstudents from './components/Addstudents';
import Read from './components/Read';
import Homee from './components/Homee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Homee/>
    <Routes>
        <Route path='/' element={<Homee/>} />
        <Route path='/addstudents' element={<Addstudents/>} />
        <Route path='/read' element={<Read/>}/>
      </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
