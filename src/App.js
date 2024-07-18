import './App.css';
import { Route,Routes } from 'react-router-dom';
import Reg from './components/Reg';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Reg />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
