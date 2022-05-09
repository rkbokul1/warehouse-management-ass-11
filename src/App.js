import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './pages/error/Error';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Products from './pages/Products/Products';
import Footer from './sharedPage/Footer/Footer';
import Header from './sharedPage/Header/Header';
import Signup from './pages/Signup/Signup';
import Login from './pages/Signup/Login';
import RequireAuth from './Hooks/RequireAuth';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={<Products />}></Route>

        <Route path='/inventory/:inventoryId' element={<Inventory />}></Route>

        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>


        <Route path='*' element={<Error />}></Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
