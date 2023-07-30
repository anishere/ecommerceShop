import imgBuy from '../assets/imgs/imgAbout.jpg'
import video from '../assets/imgs/aboutVideo.mp4'
import blog1 from '../assets/imgs/blog1.jpg'
import blog2 from '../assets/imgs/blog2.jpg'
import blog3 from '../assets/imgs/blog3.jpg'
import blog4 from '../assets/imgs/blog4.jpg'
import Marquee from "react-fast-marquee";
import iconHero1 from '../assets/imgs/he-1.png'
import iconHero2 from '../assets/imgs/he-2.png'
import iconHero3 from '../assets/imgs/he-3.png'
import iconHero4 from '../assets/imgs/he-4.png'
import iconHero5 from '../assets/imgs/he-5.png'

function about() {
    return (<>
        <section className="banner-shop banner-about">
            <div className="container-xxl">
                <div className="row">
                    <div className="bannerShop-detail text-center">
                        <h2 className="text-white fs-1">#Know Us</h2>
                        <span className="text-white fs-5">Get to know us more</span>
                    </div>
                </div>
            </div>
        </section>

        <section className='about-whoAreWe'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={imgBuy} alt="" className='col-11 img-fluid'/>
                    </div>
                    <div className="col-md-6 p-md-5">
                        <h1 className='fs-2 pt-md-5 mt-md-5 text-center'>Who are we?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde amet officia modi ipsa dolorum perspiciatis praesentium pariatur debitis ratione eaque distinctio deserunt ipsum cupiditate saepe labore, dolorem, expedita aut voluptate.</p>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi, sequi temporibus consectetur laborum pariatur corporis magni quas, ipsa labore quibusdam nulla optio nostrum nihil aliquid maxime voluptatum excepturi nesciunt.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='about-video mt-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-12 my-5">
                        <h2 className='text-center text-success'>Download our <span className='fs-2 text-primary'>App</span></h2>
                    </div>
                    <div className="col-md-8 mx-auto mb-5">
                        <video loop autoPlay src={video} className='w-100'></video>
                    </div>
                </div>
            </div>
        </section>

        <section className='about-customer mt-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-5">
                            <h1 className='fs-2'>What our customers say...</h1>
                            <p>Our customers never miss a bit on providing feedback</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 d-flex">
                                    <img src={blog1} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h6 className="card-title">Marvel Clein</h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet numquam corrupti qui alias commodi consequuntur? At, maiores neque minus sed cupiditate consectetur temporibus unde deleniti reiciendis vero eligendi quae.</p>
                                        <p className="card-text mt-2"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 d-flex">
                                    <img src={blog2} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h6 className="card-title">Marvel Clein</h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet numquam corrupti qui alias commodi consequuntur? At, maiores neque minus sed cupiditate consectetur temporibus unde deleniti reiciendis vero eligendi quae.</p>
                                        <p className="card-text mt-2"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 d-flex">
                                    <img src={blog3} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h6 className="card-title">Marvel Clein</h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet numquam corrupti qui alias commodi consequuntur? At, maiores neque minus sed cupiditate consectetur temporibus unde deleniti reiciendis vero eligendi quae.</p>
                                        <p className="card-text mt-2"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 d-flex">
                                    <img src={blog4} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h6 className="card-title">Marvel Clein</h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet numquam corrupti qui alias commodi consequuntur? At, maiores neque minus sed cupiditate consectetur temporibus unde deleniti reiciendis vero eligendi quae.</p>
                                        <p className="card-text mt-2"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='about-marquee'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <Marquee>
                            <div className="px-4">
                                <img src={iconHero1} alt="icon" className='img-fluid mx-auto'/>
                                <p className='ms-2'>Fast Orders</p>
                            </div>
                            <div className="px-4">
                                <img src={iconHero2} alt="icon" className='img-fluid mx-auto'/>
                                <p className='ms-2'>Quick Shipping</p>
                            </div>
                            <div className="px-4">
                                <img src={iconHero3} alt="icon" className='img-fluid mx-auto'/>
                                <p className='ms-2'>High Saves</p>
                            </div>
                            <div className="px-4">
                                <img src={iconHero4} alt="icon" className='img-fluid mx-auto'/>
                                <p className='ms-2'>24/7 Support</p>
                            </div>
                            <div className="px-4">
                                <img src={iconHero5} alt="icon" className='img-fluid mx-auto'/>
                                <p className='ms-2'>Online Orders</p>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>

    </>);
}

export default about;