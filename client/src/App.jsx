import './App.css';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import { Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
