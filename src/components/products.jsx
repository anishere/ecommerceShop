import { Link } from "react-router-dom";
import { PRODUCTS, PRODUCTS1 } from "./product";
import ReactStars from 'react-stars'

function products() {
    const products = [...PRODUCTS, ...PRODUCTS1];

    return (<>
        {products.map(product => (
        <div key={product.id} className="card h-100 col-md-3 mx-auto">
            <img src={product.image} alt=""  className='img-fluid p-md-1'/>
            <div className="card-detail px-md-2 m-1">
                <span className='card-text'>{product.brand}</span>
                <h6 className='mt-1'>{product.name}</h6>
                <ReactStars
                    count={5}
                    edit={false} 
                    value={4}   
                    size={24}
                    color2={'#EA9D5A'} 
                />
                <p className="price">{product.price}<span className="mx-md-2"><strike>{product.price*2}</strike></span></p>
                <Link to={'detail'} className="text-center">
                    <p className="text-info fs-6">View details</p>
                </Link>
                <div className="text-center my-3">
                    <button className="button">Add To Cart</button>
                </div>
            </div>
        </div>
        ))}
    </>);
}

export default products;