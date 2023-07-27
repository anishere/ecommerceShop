/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from "react-redux"; 
import { PRODUCTS, PRODUCTS1 } from "../components/product";
import { editQuantity } from "../redux/itemsSlice";

function cart() {
    const products = [...PRODUCTS, ...PRODUCTS1]
    const ids = useSelector(state => state.items.ids)
    const keyIds = Object.keys(ids);
    const dispatch = useDispatch()

    // const [editItems, setEditItems] = useState()

    if(keyIds.length > 0) {
        const handleEditQuantity = (e, id) => {
            const obj = {data: +e.target.value, id}
            dispatch(editQuantity(obj))
        }

        return (<>
            <div className="cart py-5">
                <div className="container-xxl">
                    <div className="row">
                    {products.filter(product => 
                        keyIds.includes(`${product.id}`) && ids[product.id] > 0)
                        .map(product => (
                        <div key={product.id} className="cart-item d-md-flex col-11 mx-auto p-4">
                            <img src={product.image} alt="" className="img-fluid"/>
                            <div>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>Product Brand: {product.brand}</p>
                                    <p>Product Price: {product.price}</p>
                                    <p>Product Number: {product.id}</p>
                                </div>
                                <div>
                                    <button></button>
                                    <input type="number" value={ids[product.id]} onChange={(e) => handleEditQuantity(e, product.id)} />
                                    <button></button>
                                </div>
                                <div className="input-group mb-3">
                                    <input  type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div> 
                        ))
                    }
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