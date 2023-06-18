import './App.css';
import Nest from './Nest/Nest';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Nest component={Home}/>
    </div>
  );
}

export default App;
