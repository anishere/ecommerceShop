import cus1 from '../assets/imgs/customer/cus1.jpg'
import cus2 from '../assets/imgs/customer/cus2.jpg'
import cus3 from '../assets/imgs/customer/cus3.jpg'
import cus4 from '../assets/imgs/customer/cus4.jpg'

function blog() {
    return (<>
        <section className="banner-shop banner-blog">
            <div className="container-xxl">
                <div className="row">
                    <div className="bannerShop-detail text-center">
                        <h2 className="text-white fs-1">#Read More</h2>
                        <span className="text-white fs-5">Get to know what our trusted customers say...</span>
                    </div>
                </div>
            </div>
        </section>

        <div className="text-center mb-5">
            <h1 className="fs-2">Explore more in our library</h1>
            <p>Why we have trending Outfits Everywhere</p>
        </div>

        <section className="blog-customers">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-11 my-4 mx-auto">
                        <div className="card mb-3 p-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={cus1} className="blog-img img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo doloribus architecto eveniet cumque labore perspiciatis accusantium molestiae ipsa. Sapiente nostrum libero earum distinctio facilis molestias dicta ipsa ullam explicabo!</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 my-4 mx-auto">
                        <div className="card mb-3 p-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={cus2} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Melisa Ivy</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo doloribus architecto eveniet cumque labore perspiciatis accusantium molestiae ipsa. Sapiente nostrum libero earum distinctio facilis molestias dicta ipsa ullam explicabo!</p>
                                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 my-4 mx-auto">
                        <div className="card mb-3 p-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={cus3} className="blog-img img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Tristian Ann</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo doloribus architecto eveniet cumque labore perspiciatis accusantium molestiae ipsa. Sapiente nostrum libero earum distinctio facilis molestias dicta ipsa ullam explicabo!</p>
                                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 my-4 mx-auto">
                        <div className="card mb-3 p-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={cus4} className="blog-img img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Phillip Omosh</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo doloribus architecto eveniet cumque labore perspiciatis accusantium molestiae ipsa. Sapiente nostrum libero earum distinctio facilis molestias dicta ipsa ullam explicabo!</p>
                                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}

export default blog;