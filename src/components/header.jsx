/* eslint-disable react-hooks/rules-of-hooks */
import {BiPhoneCall} from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/imgs/react.svg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { useSelector } from 'react-redux';

function header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation()

    const totalItems = useSelector(state => state.items.total)

    return (
        <>
        <header className="header-top-strip p-2 shadow-sm">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-8">
                        <span>The trending outfits at 100% off</span>
                    </div>
                    <div className="col-md-4 col-2 d-flex justify-content-between">
                        <div className='header-tel'>
                            <a href="tel:+840123456789">Call us at +840123456789</a>
                        </div>
                        <div className='d-flex '>
                            <Link><HiOutlineMail className='fs-3 mx-3'/></Link>
                            <Link><BiPhoneCall className='fs-3 mx-3'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav className="header-upper navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid container-xxl">
                <Link className="navbar-brand mx-auto" href="#"><img src={logo} alt=""  className='img-fluid logo ms-md-5'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-md-flex justify-content-evenly collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                    <div className="input-group ms-3 mb-1">
                        <input type="text" className="form-control" placeholder="Find products ... " aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <Link className="input-group-text" id="basic-addon2">search</Link>
                    </div>
                    </form>
                    <nav className='nav-links'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3 mx-md-3">
                                <Link to={'/'} className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            </li>
                            <li className="nav-item ms-3 mx-md-3">
                                <Link to={'shop'} className={location.pathname === '/shop' ? 'nav-link active' : 'nav-link'}>Shop</Link>
                            </li>
                            <li className="nav-item ms-3 mx-md-3">
                                <Link to={'blog'} className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}>Blog</Link>
                            </li>
                            <li className="nav-item ms-3 mx-md-3">
                                <Link to={'about'} className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
                            </li>
                            <li className="nav-item ms-3 mx-md-3">
                                <Link to={'contact'} className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-links-nav col-md-3 d-md-flex align-items-center justify-content-end">
                        <Link to={'login'} className='mx-md-2 d-flex'>  <VscAccount className='fs-md-3 fs-2 mx-2 mx-md-2'/>
                            <p>Account</p>
                        </Link>
                        <Link to={'cart'} className='position-relative mx-md-2 d-flex'> <AiOutlineShoppingCart className='fs-md-3 fs-2 mx-2 mx-md-2'/>
                            {totalItems > 0 && <p className='text-center totalItems'>{totalItems}</p>}
                            <p>Cart</p>
                        </Link>
                </div>
            </div>
            </nav>
        </>
    );
}

export default header;