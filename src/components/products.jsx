/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import { PRODUCTS, PRODUCTS1 } from "./product";
import ReactStars from 'react-stars'
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectProduct } from "../redux/itemsSlice";

function products() {
    const page = useSelector((state) => state.page.presentPage)
    const dispatch = useDispatch();
    const ids = useSelector(state => state.items.ids)

    const products = page === 1 ? [...PRODUCTS] : [...PRODUCTS1];

    const handleAddItem = (id) => {
        dispatch(addItem(id))
    }

    const handleViewDetail = (id) => {
        dispatch(selectProduct(id))
    }

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
                <p className="price">{product.price}$<span className="mx-md-2">&nbsp;<strike>{product.price*2}$</strike></span></p>
                <Link onClick={() => handleViewDetail(product.id)} to={'../detail'} className="text-center">
                    <p className="text-info fs-6">View details</p>
                </Link>
                <div className="text-center my-3">
                    <button onClick={() => {handleAddItem(product.id)}} className="button">
                        Add To Cart{ ids[product.id] && <span>&nbsp;({ids[product.id]})</span>
                    }</button>
                </div>
            </div>
        </div>
        ))}
    </>);
}

export default products;