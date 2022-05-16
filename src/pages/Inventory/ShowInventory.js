import { useState } from "react";


const ShowInventory = (props) => {
    const { _id, name, des, img, price, available } = props.stock;

    const [increase, setIncrease] = useState(available);
    console.log(increase);

    const url = `https://salty-tor-65153.herokuapp.com/stock/${_id}`;

    const handleAddStock = event => {
        event.preventDefault();
        // const stockNumber = event.target.increase.value;
        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({increase}) 
        })
        .then(res => res.json())
        .then(data => setIncrease(data))
        
}


return (
    <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="card">
                <img className="w-70 mx-auto" src={img} style={{ height: '300px' }} alt='' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{des}</h6>
                    <h5 className="card-text">Price: {price}</h5>
                    <h5>In Stock: {available} Deliver:</h5>
                    <button onClick={handleAddStock}>Delivered</button>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
            <h4>Stock your product</h4>
            <div >
                <form >
                    <input className='mx-auto w-50 mb-2' type="number" name="increase" id="" /> <br />
                    <input className='mx-auto w-50' type="submit" value="Stock" />
                </form>
            </div>
        </div>

    </div>
);
};

export default ShowInventory;