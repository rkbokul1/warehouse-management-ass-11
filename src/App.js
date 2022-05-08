import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './pages/error/Error';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/inventory' element={<Products/>}></Route>
        <Route path='/inventory/:inventoryId' element={<Inventory/>}></Route>


        <Route path='*' element={<Error/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
