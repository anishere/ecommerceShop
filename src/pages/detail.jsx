import { PRODUCTS, PRODUCTS1 } from "../components/product";
import { useSelector, useDispatch } from "react-redux"; 
import { editQuantity, addItem, reduceItem } from "../redux/itemsSlice";

function detail() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const idProduct = useSelector(state => state.items.product)
    const products = [...PRODUCTS, ...PRODUCTS1]
    const [product] = products.filter(product => product.id === idProduct)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ids = useSelector(state => state.items.ids)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()

    const handleEditValue = (e, id) => {
        const obj = {data: +e.target.value, id}
        dispatch(editQuantity(obj))
    }

    const handleIncrease = id => dispatch(addItem(id))

    const handleReduce = id => dispatch(reduceItem(id))

    console.log(ids[idProduct])
    return (<>
        <div className="detail mt-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="img-product col-11 mx-auto col-md-6 card p-2 p-md-5">
                        <img src={product.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-between mx-auto">
                        <div className="detail-text card p-4 col-md-12">
                            <h5>{product.brand}</h5>
                            <h4>{product.name}</h4>
                            <span className="my-1 fs-4 text-danger">{product.price}$&nbsp;<p className="text-body-secondary d-inline-block"><strike>{product.price*2}$</strike></p></span>
                            <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde inventore, vero dolores ipsam harum provident. Consectetur sapiente, accusamus maiores optio, voluptates expedita beatae porro rem odio reprehenderit esse soluta quo?</p>
                            <div className="detail-edit d-flex mb-1">
                                <button onClick={() => handleIncrease(product.id)} className="btn btn-outline-secondary">+</button>
                                <input onChange={(e) => handleEditValue(e, product.id)} value={ids[idProduct] === undefined ? 0 : ids[idProduct]} className="mx-2 text-center form-control" type="number"/>
                                <button onClick={() => handleReduce(product.id)} className="btn btn-outline-secondary">-</button>
                            </div>
                            <div className="my-2">
                                <button onClick={() => handleIncrease(product.id)} className="button-link">Add To Cart</button>
                            </div>
                        </div>
                        <div className="other p-3 text-center card col-md-12">
                            <h5>Some other products you may like</h5>
                            <span>We have more products, visit the shop to get amazing deals from us!!</span>
                            <div className="d-flex">
                                {products.slice(3, 11).map(product => (
                                    <img key={product.id} className="mt-2 card img-fluid" src={product.image}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default detail;