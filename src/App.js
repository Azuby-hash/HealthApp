import './App.css';
import Nest from './Nest/Nest';
import Home from './Home/Home';
import Record from './Record/Record';
import Column from './Column/Column';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Nest component={Home} />} />
          <Route path="/record" element={<Nest component={Record} />} />
          <Route path="/column" element={<Nest component={Column} />} />
        </Routes>
      </BrowserRouter>
    </ div>
  );
}

export default App;
