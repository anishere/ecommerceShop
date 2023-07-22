import { PRODUCTS1 } from './product'

function newArrival() {
    return (<>
        {/* use css from feature products */}
        <div className="featureProducts">
        <div className="row mt-md-1">
            {PRODUCTS1.slice(2, 6).map(product => (
                <div key={product.id} className="card my-md-0 my-3 h-100 col-md-3 mx-auto p-md-2">
                    <img src={product.image} alt=""  className='img-fluid p-md-1'/>
                    <div className="card-detail px-md-2 m-1">
                        <span className='card-text'>{product.brand}</span>
                        <h6 className='py-1'>{product.name}</h6>
                        <div className="card-footer text-center mb-2">
                            <p className='text-danger fs-5'>{product.status}</p>
                            <strike>
                                <p className='price'>${product.rate}</p>
                            </strike>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </>);
}

export default newArrival;