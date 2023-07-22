import { BsDiscord, BsFacebook, BsGithub, BsSlack } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import chplay from '../assets/imgs/chplay.jpg'
import appstore from '../assets/imgs/appstore.jpg'
import paybank from '../assets/imgs/paybank.png'

function footer() {
    return (<>
        <footer className="footer p-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column">
                        <h3 className="mb-4 footer-title">Contact</h3>
                        <div className="footer-detail mb-3">
                            <p className="mb-3"><b>Address: </b>Thika town, Naltex building, 2nd floor</p>
                            <p className="mb-3"><b>Phone: </b><a href="tel:+840123456789">Call us at +840123456789</a></p>
                            <p className="mb-4"><b>Hours: </b>From 8 A.m To 6 P.m</p>
                            <p className="mb-3"><b>Follow Us</b></p>
                            <div className="col-5 social-icons d-flex justify-content-around">
                                <Link><BsDiscord/></Link>
                                <Link><BsFacebook/></Link>
                                <Link><BsGithub/></Link>
                                <Link><BsSlack/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 className='mb-4 footer-title'>About</h3>
                        <div className="footer-detail d-flex flex-column">
                            <Link to={'about'} className='mb-3'>About Us</Link>
                            <Link className='mb-3'>Delivery</Link>
                            <Link className='mb-3'>Privacy Policy</Link>
                            <Link className='mb-3'>Terms & Conditions</Link>
                            <Link className='mb-3'>Free Policy</Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 className='mb-4 footer-title'>Account</h3>
                        <div className="footer-detail d-flex flex-column">
                            <Link to={'login'} className='mb-3'>Profile</Link>
                            <Link to={'cart'} className='mb-3'>View Cart</Link>
                            <Link className='mb-3'>Help</Link>
                            <Link className='mb-3'>Payments</Link>
                            <Link className='mb-3'>My Wishlist</Link>
                            <Link className='mb-3'>Coupons</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className='mb-4 footer-title'>Install App</h3>
                        <div className="footer-detail">
                            <span className='mb-3'>Available On Google Play Services & App Store</span>
                            <div>
                                <Link>
                                    <img src={chplay} alt="link-chplay" className='img-fluid p-3 my-3'/>
                                </Link>
                                <Link>
                                    <img src={appstore} alt="link-chplay" className='img-fluid p-3 my-3'/>
                                </Link>  
                            </div>
                            <p>Payment Methods</p>
                            <Link>
                                    <img src={paybank} alt="link-chplay" className='img-fluid p-3 my-3'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-9">
                        <p className='text-success'>&copy;Developed by Azark Developers 2023</p>
                    </div>
                    <div className="col-md-3 d-md-flex justify-content-end">
                        <Link className='text-black fw-medium'>Privacy Policy</Link>
                        <Link className='mx-2 text-black fw-medium'>Terms of Use</Link>
                        <Link className='text-black fw-medium'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default footer;