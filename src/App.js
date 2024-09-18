
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Componets/HomeComponets/Home/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
