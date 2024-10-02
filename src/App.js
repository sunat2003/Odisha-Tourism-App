
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Componets/HomeComponets/Home/Home';
import { PureComponent } from 'react';
import { Puri } from './Componets/HomeComponets/Puri/Puri';
import { BBSR } from './Componets/HomeComponets/BBSR/BBSR';
import { Paradeep } from './Componets/HomeComponets/Paradeep/Paradeep';
import { Konark } from './Componets/HomeComponets/Konark/Konark';
import { Chilika } from './Componets/HomeComponets/Chilika/Chilika';
import { Cuttack } from './Componets/HomeComponets/Cuttack/Cuttack';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Puri/' element={<Puri/>} />
          <Route path='Bhubaneswer/' element={<BBSR/>} />
          <Route path='/Paradeep' element={<Paradeep/>} />
          <Route path='/Cilika' element={<Chilika/>} />
          <Route path='/Konark' element={<Konark/>} />
          <Route path='/Cuttack' element={<Cuttack/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
