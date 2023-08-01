/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from "react-redux"; 
import { PRODUCTS, PRODUCTS1 } from "../components/product";
import { editQuantity } from "../redux/itemsSlice";
import { addItem } from "../redux/itemsSlice";
import { reduceItem } from "../redux/itemsSlice";
import { FiDelete } from 'react-icons/fi'
import { deleteItem } from "../redux/itemsSlice";
import { clearIds } from "../redux/itemsSlice";
import { Link } from "react-router-dom";

function cart() {
    const products = [...PRODUCTS, ...PRODUCTS1]
    const ids = useSelector(state => state.items.ids)
    const keyIds = Object.keys(ids);
    // total items
    const values = Object.values(ids);
    const totalItems = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //

    const dispatch = useDispatch()

    const handleEditQuantity = (e, id) => {
        const obj = {data: +e.target.value, id}
        dispatch(editQuantity(obj))
    }

    const handleIncrease = id => dispatch(addItem(id))

    const handleReduce = id => dispatch(reduceItem(id))

    const handleDelete = id => dispatch(deleteItem(id))

    const handleClearCart = () => dispatch(clearIds())

    let totalPriceItems = 0
    if(totalItems > 0) {

        return (<>
            <div className="cart py-5">
                <div className="container-xxl">
                    <div className="row">
                    {products.filter(product => 
                        keyIds.includes(`${product.id}`) && ids[product.id] > 0) //trong keyIds la cac string
                        .map(product => {
                            const totalPriceItem = product.price * ids[product.id]
                            totalPriceItems += totalPriceItem
                        return (
                        <div key={product.id} className="cart-item d-md-flex col-md-11 mx-auto p-3 m-2">
                            <div className="col-md-5"><img src={product.image} alt="" className="d-block mx-auto img-fluid"/></div>
                            <div className="col-md-7">
                                <div className="cart-item-detail">
                                    <h5>{product.name}</h5>
                                    <p>Product Brand: <b>{product.brand}</b></p>
                                    <p>Product Price: <b>${(product.price * ids[product.id]).toFixed(2)}</b></p>
                                    <p>Product Number: <b>{product.id}</b></p>
                                </div>
                                <div className="cart-item-edit d-flex justify-content-between px-md-3 my-4 text-md-center">
                                    <div className="my-auto">
                                        <button onClick={() => handleIncrease(product.id)}>+</button>
                                        <input className="mx-4 fs-5 text-danger" type="text" value={ids[product.id]} onChange={(e) => handleEditQuantity(e, product.id)} />
                                        <button onClick={() => handleReduce(product.id)}>-</button>
                                    </div>
                                    <button onClick={() => handleDelete(product.id)} className="delete-button"><FiDelete/></button>
                                </div>
                                <div className="px-3">
                                    <input  type="text" className="form-control" placeholder="Enter coupon code..." aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div> 
                        )})
                    }
                        <div className="clearCart col-md-11 mx-auto my-3 d-md-flex justify-content-end">
                            <button onClick={() => handleClearCart()}>Clear Cart</button>
                        </div>
                        <hr className="col-11 mx-auto" />

                        <div className="cart-end col-md-11 mx-auto d-md-flex justify-content-between">
                            <div className="my-3">
                                <Link to={'../shop'}>Continue Shopping</Link>
                                <Link to={'../payment'} className="mx-4">Pay</Link>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <span>${totalPriceItems.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    } else {
        return (<>
            <div className="empty d-flex">
                <span className="fs-4">Your Cart Is Empty !!!</span>
            </div>
        </>);
    }
}

export default cart;