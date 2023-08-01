import { useSelector } from 'react-redux';
import imgPay from '../assets/imgs/paybank.png'
import { PRODUCTS, PRODUCTS1 } from '../components/product';

function payment() {

    // Tinh totalPrice
    const products = [...PRODUCTS, ...PRODUCTS1]
        // eslint-disable-next-line react-hooks/rules-of-hooks
    const ids = useSelector(state => state.items.ids)
    const keyIds = Object.keys(ids);
    const totalPrice = products.filter(product => keyIds.includes(`${product.id}`))
    .reduce((total, product) => {
        return total + (product.price * ids[product.id])
    }, 0)
    //

    const values = Object.values(ids);
    const totalItems = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const handlePayment = () => {
        alert(`Thank you for your purchase of ${totalItems} products for a total of $${totalPrice}. Your request has been received and is being processed.`)
    }

    return (<>
        <section className="payment p-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fs-3 mb-3">Payment Method</h1>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className='col-6'>Paypal</span>
                                        <img src={imgPay} className='img-fluid col-6' alt="" />
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <input type="email" className="form-control" placeholder="Paypal email" aria-label="Paypal email" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span className='col-6'>Credit card</span>
                                        <img src={imgPay} className='img-fluid col-6' alt="" />
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='my-1'>Card Number</p>
                                        <input type="email" className="ps-5 form-control" placeholder="0000 0000 0000 0000" aria-label="0000 0000 0000 0000" aria-describedby="basic-addon1"/>
                                        <div className='mt-4 double-input d-flex justify-content-between'>
                                            <form action="">
                                                <p className='mb-1'>Expiry Date</p>
                                                <input type="email" className="ps-5 form-control" placeholder="MM/YY" aria-label="MM/YY" aria-describedby="basic-addon1"/>
                                            </form>
                                            <form action="">
                                                <p className='mb-1'>CVC/CVV</p>
                                                <input type="email" className="ps-5 form-control" placeholder="000" aria-label="000" aria-describedby="basic-addon1"/>
                                            </form>
                                        </div>
                                        <p className='mt-4'><small>Your transaction is secured with ssl certificate</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="fs-3 mb-3">Fill the following details for shipping.</h1>
                        <div className='mt-4 double-input d-flex justify-content-between'>
                            <form action="">
                                <span className='mb-1'>Email</span>
                                <input type="email" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                            </form>
                            <form action="">
                                <span className='mb-1'>CVC/CVV</span>
                                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                            </form>
                        </div>
                        <span className='my-1 mt-3 d-block'>Address</span>
                        <input type="address" className="form-control" placeholder="123 Main St ..." aria-label="address" aria-describedby="basic-addon1"/>
                        <span className='my-1 mt-3 d-block'>Address 2</span>
                        <input type="address" className="form-control" placeholder="Apartment, studio or floor ..." aria-label="address" aria-describedby="basic-addon1"/>
                        <div className='mt-4 double-input d-flex justify-content-between'>
                            <form action="">
                                <span className='mb-1 d-block'>City</span>
                                <input type="text" className="form-control" placeholder="" aria-label="city" aria-describedby="basic-addon1"/>
                            </form>
                            <form action="">
                                <span className='mb-1 d-block'>Zip Code</span>
                                <input type="code" className="form-control" placeholder="" aria-label="zip code" aria-describedby="basic-addon1"/>
                            </form>
                        </div>
                        <div className='col-3 mt-3'>
                            <button onClick={() => handlePayment()} className='button-link col-4 w-100'>Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default payment;