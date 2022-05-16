import { useState, useEffect } from 'react';

const useStocks = () =>{
    
const [stock, setStock] = useState([]);

useEffect( () =>{
    fetch('https://salty-tor-65153.herokuapp.com/stock')
    .then(res => res.json())
    .then(data => setStock(data))
},[])
    return [stock];
}

export default useStocks;