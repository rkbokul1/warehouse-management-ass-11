import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './pages/error/Error';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>



        <Route path='*' element={<Error/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
