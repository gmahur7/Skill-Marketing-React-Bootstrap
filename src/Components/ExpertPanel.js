import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../Images/web.png'
import app from '../Images/app.png'
import digital from '../Images/digital.png'
import graphic from '../Images/graphic.png'

const ExpertPanel = () => {
    return (
        <section className='common-section mb-5 pt-5'>
            <div className='container text-center common-title fw-bold'>
                <h2 className='common-heading text-dark'>Tips and Tricks from<br /> Our Experts </h2>
                <hr className='w-25 mx-auto' />
            </div>
            <div className='container'>
                <div className="row gy-md-5">
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={web} className="card-img-top" alt="testimonial" />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p className='small text-grey'>
                                            <i className='fa-solid fa-book-open-reader small'> : 5000</i>
                                        </p>
                                        <p className='small text-grey'>March 3, 2024</p>
                                    </div>
                                    <h5 className="card-title">Web Develpement</h5>
                                    <p className="card-text  mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="#" className="btn btn-dark">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={digital} className="card-img-top" alt="testimonial" />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p className='small text-grey'>
                                            <i className='fa-solid fa-book-open-reader small'> : 5000</i>
                                        </p>
                                        <p className='small text-grey'>March 3, 2024</p>
                                    </div>
                                    <h5 className="card-title">Digital Marketinf</h5>
                                    <p className="card-text  mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="#" className="btn btn-dark">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={app} className="card-img-top" alt="testimonial" />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p className='small text-grey'>
                                            <i className='fa-solid fa-book-open-reader small'> : 5000</i>
                                        </p>
                                        <p className='small text-grey'>March 3, 2024</p>
                                    </div>
                                    <h5 className="card-title">App Develpement</h5>
                                    <p className="card-text  mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="#" className="btn btn-dark">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={graphic} className="card-img-top" alt="testimonial" />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p className='small text-grey'>
                                            <i className='fa-solid fa-book-open-reader small'> : 5000</i>
                                        </p>
                                        <p className='small text-grey'>March 3, 2024</p>
                                    </div>
                                    <h5 className="card-title">Graphic Designer</h5>
                                    <p className="card-text  mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="#" className="btn btn-dark">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertPanel