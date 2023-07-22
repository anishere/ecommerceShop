/* eslint-disable no-unused-vars */
import React from 'react';
import iconHero1 from '../assets/imgs/he-1.png'
import iconHero2 from '../assets/imgs/he-2.png'
import iconHero3 from '../assets/imgs/he-3.png'
import iconHero4 from '../assets/imgs/he-4.png'
import iconHero5 from '../assets/imgs/he-5.png'

function hero() {
    return (<>
        <section className='hero'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto hero-detail my-4 px-5 d-flex justify-content-around">
                        <div className="card px-4 pb-3">
                            <img src={iconHero1} alt="icon" className='img-fluid mx-auto'/>
                            <p className='mt-3'>Fast Orders</p>
                        </div>
                        <div className="card px-4 pb-3">
                            <img src={iconHero2} alt="icon" className='img-fluid mx-auto'/>
                            <p className='mt-3'>Quick Shipping</p>
                        </div>
                        <div className="card px-4 pb-3">
                            <img src={iconHero3} alt="icon" className='img-fluid mx-auto'/>
                            <p className='mt-3'>High Saves</p>
                        </div>
                        <div className="card px-4 pb-3">
                            <img src={iconHero4} alt="icon" className='img-fluid mx-auto'/>
                            <p className='mt-3'>24/7 Support</p>
                        </div>
                        <div className="card px-4 pb-3">
                            <img src={iconHero5} alt="icon" className='img-fluid mx-auto'/>
                            <p className='mt-3'>Online Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default hero;