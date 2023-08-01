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
                            <p className="mb-3"><b>Address: </b>Can Tho, Viet Nam</p>
                            <p className="mb-3"><b>Phone: </b><a href="tel:+840123456789">Call us at +84 0123456789</a></p>
                            <p className="mb-4"><b>Hours: </b>From 8 A.m To 6 P.m</p>
                            <p className="mb-3"><b>Follow Us</b></p>
                            <div className="col-5 social-icons d-flex justify-content-around">
                                <Link to={'https://discord.com/'}><BsDiscord/></Link>
                                <Link to={'https://www.facebook.com/profile.php?id=100035519748585'}><BsFacebook/></Link>
                                <Link to={'https://github.com/anishere/ecommerceShop'}><BsGithub/></Link>
                                <Link to={'https://slack.com/'}><BsSlack/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 className='mb-4 footer-title'>About</h3>
                        <div className="footer-detail d-flex flex-column">
                            <Link to={'about'} className='mb-3'>About Us</Link>
                            <Link to={'payment'} className='mb-3'>Delivery</Link>
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
                            <Link to={'contact'} className='mb-3'>Help</Link>
                            <Link to={'payment'} className='mb-3'>Payments</Link>
                            <Link className='mb-3'>My Wishlist</Link>
                            <Link className='mb-3'>Coupons</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className='mb-4 footer-title'>Install App</h3>
                        <div className="footer-detail">
                            <span className='mb-3'>Available On Google Play Services & App Store</span>
                            <div>
                                <Link to={'https://play.google.com/store/games?hl=vi&gl=US'}>
                                    <img src={chplay} alt="link-chplay" className='img-fluid p-3 my-3'/>
                                </Link>
                                <Link to={'https://www.apple.com/vn/app-store/'}>
                                    <img src={appstore} alt="link-chplay" className='img-fluid p-3 my-3'/>
                                </Link>  
                            </div>
                            <p>Payment Methods</p>
                            <Link to={'https://www.paypal.com/signin'}>
                                    <img src={paybank} alt="link-chplay" className='img-fluid p-3 my-3'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-9">
                        <p className='text-success'>&copy;2023 Developed by AnSafe Developers</p>
                    </div>
                    <div className="col-md-3 d-md-flex justify-content-end">
                        <Link className='text-black fw-medium'>Privacy Policy</Link>
                        <Link className='mx-2 text-black fw-medium'>Terms of Use</Link>
                        <Link to={'contact'} className='text-black fw-medium'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default footer;