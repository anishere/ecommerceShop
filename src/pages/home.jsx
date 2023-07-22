/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeatureProduct from "../components/featureProduct";
import NewArrival from "../components/newArrival";
import deals1 from '../assets/imgs/deals-1.jpg'
import deals2 from '../assets/imgs/deals-2.jpg'
import Blog from "../components/feedback";
import SignUp from "../components/signUp";

function home() {
    return (<>
    <section className="banner">
        <div className="container-xxl">
            <div className="row">
                <div className="banner-detail p-5 d-flex flex-column justify-content-center">
                    <span className="mx-md-5">Trade in offer</span>
                    <h1 className="mx-md-5">Super Value Deals</h1>
                    <h2 className="mx-md-5">On all products</h2>
                    <span className="mx-md-5">Save more today with Azark</span>
                    <Link to={"shop"} className="button-link my-3 mx-5">Shop Now</Link>       
                </div>
            </div>
        </div>
    </section> 

    <Hero/> 

    <section className="feature-products p-4">
        <div className="container-xxl">
            <div className="row">
                <div className="text-center mb-5">
                    <h1>Feature Products</h1>
                    <p>All Weather New Modern Designs</p>
                </div>
                <FeatureProduct/>
            </div>
        </div>
    </section>

    <section className="repair">
        <div className="container-xxl">
            <div className="row">
                <div className="repair-detail text-center align-items-center">
                    <h5 className="mb-3 text-white">Repair Services</h5>
                    <h4 className="mb-3 text-white">On 70% Off on All Products And Accessories</h4>
                    <button>Explore Now</button>
                </div>
            </div>
        </div>
    </section>

    <section className="new-products mb-5">
        <div className="container-xxl">
            <div className="row">
                <div className="text-center mb-5">
                    <h1>New Arrivals</h1>
                    <p>Your Best Designer Outfits</p>
                </div>
                <NewArrival/>
            </div>
        </div>
    </section>

    <section className="deals p-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row g-0 p-2">
                            <div className="col-md-6 d-flex">
                                <img src={deals1} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h6 className="card-title">Hot Deals</h6>
                                    <h5 className="card-title">Buy One get One free.</h5>
                                    <p className="card-text mb-4"><small className="text-body-secondary">The latest best collection in our closet <br /> Feel Cute with our outfits</small></p>
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row g-0 p-2">
                            <div className="col-md-6 d-flex">
                                <img src={deals2} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h6 className="card-title">Hot Deals</h6>
                                    <h5 className="card-title">Buy One get One free.</h5>
                                    <p className="card-text mb-4"><small className="text-body-secondary">The latest best collection in our closet <br /> Feel Cute with our outfits</small></p>
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="blog mb-4">
        <div className="container-xxl">
            <div className="text-center mb-5">
                <h1>What our customers say...</h1>
                <p>Our customers never miss a bit on providing feedback</p>
            </div>
            <div className="row">
                <Blog/>
            </div>
        </div>
    </section>

    <section className="mt-5 pt-3">
            <SignUp/>
    </section>

    </>);
}

export default home;