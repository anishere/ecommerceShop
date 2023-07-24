import SignUp from "../components/signUp";
import Products from "../components/products";
import Hero from "../components/hero";

function shop() {

    return (<>
        <section className="banner-shop">
            <div className="container-xxl">
                <div className="row">
                    <div className="bannerShop-detail text-center">
                        <h2 className="text-white fs-1"><span className="fs-1 text-success">#100%</span> Off On All Products</h2>
                        <span className="text-white fs-5">Make your orders we will deliver..</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="shop-products p-4">
            <div className="container-xxl">
                <div className="row">
                    <Products/>
                </div>
            </div>
        </section>

        <section className="paginate">
            <div className="container-xxl">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>

        <Hero/>

        <section className="mt-5 pt-3">
            <SignUp/>
        </section>
    </>);
}

export default shop;