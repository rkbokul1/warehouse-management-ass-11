import { useState, useEffect } from 'react';

const useStocks = () =>{
    
const [stock, setStock] = useState([]);

useEffect( () =>{
    fetch('http://localhost:5000/stock')
    .then(res => res.json())
    .then(data => setStock(data))
},[])
    return [stock];
}

export default useStocks;