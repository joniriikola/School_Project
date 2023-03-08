import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './components/Orders';
import Home from './components/Home';
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeOrders } from './reducers/ordersReducer';
import { initializeToppings } from './reducers/toppingsReducer';
import { initializeSandwiches } from './reducers/sandwichesReducer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import SandwichForm from './components/SandwichForm';

function App() {

  const dispatch = useDispatch();
  //initialize state
  useEffect(() => {
    dispatch(initializeOrders())
    dispatch(initializeToppings())
    dispatch(initializeSandwiches())
  }, [dispatch])

  //update state of orders from api every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(initializeOrders());
    }, 10000);
  
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="Sandwich-App">
      <Container className='app-container'>
        <BrowserRouter>
          <Navbar/>
          <h1>Sandwich App</h1>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='order' element={<Orders/>}> </Route>
            <Route path='menu' element={<Menu/>}> </Route>
            <Route path='/admin/sandwich_form' element={<SandwichForm/>}> </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
