 

function contact() {
    return (<>
        <section className="banner-shop banner-contact">
            <div className="container-xxl">
                <div className="row">
                    <div className="bannerShop-detail text-center">
                        <h1 className="fs-1">Reach Out to Us</h1>
                        <h1 className="fs-5">We are only a step away from you</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-info p-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6">
                        <iframe className="col-12" src="https://www.google.com/maps/d/u/0/embed?mid=1MRIqWMTKRSX4BmxsjcEZ90inz08yrig&ehbc=2E312F"></iframe>
                    </div>
                    <div className="text-center d-flex align-items-center col-md-6">
                        <div className="contact-info-detail p-5">
                            <h4>Contact Us</h4>
                            <p className="my-2"><b>Address: </b>Can Tho, Viet Nam</p>
                            <p className="my-2"><b>Phone: </b><a href="tel:+840123456789">Call us at +840123456789</a></p>
                            <p className="my-2"><b>Hours: </b>From 8 a.m To 6 p.m</p>
                            <p className="dis mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aspernatur tenetur obcaecati error inventore iure quae, nemo odio doloribus modi. Id veritatis ratione neque blanditiis commodi explicabo, praesentium qui nam?</p>
                            <p className="dis mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error molestiae impedit eaque dolor alias dolorum quo. Facere, hic voluptatem saepe mollitia odit non assumenda blanditiis? Quos sequi officiis aperiam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-message mt-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="contact-message-detail p-5 col-md-8 mx-auto">
                        <h4 className="text-center text-success">Leave Us A message</h4>
                        <div className="d-flex mt-4">
                            <input type="text" className="me-3 form-control" placeholder="First name" aria-label="Username" aria-describedby="basic-addon1"/>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="mb-4 mt-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="text-center">
                            <button className="button-link">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default contact;