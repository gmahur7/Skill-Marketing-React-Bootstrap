import React from 'react'
import link from '../Images/link.gif'
import speaker from '../Images/speaker.gif'
import seo from '../Images/seo.gif'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <section className='services-section'>
        <div className='container text-center common-title fw-bold'>
            <h2 className='common-heading'>What We Will Do For <br/>  Your Bussiness </h2>
            <hr className='w-25 mx-auto'/>
        </div>
        <div className='container mt-5'>
            <div className='row g-5'>
                <div className='col-12 col-lg-4 col-md-12'>
                    <div className="text-center card-box rounded-2 p-5">
                        <img src={link} alt="link" className='img-fluid' width="200px" />
                        <h5 className='my-3 fw-normal'>Link Building</h5>
                        <p className='mb-5'>hello link building, What can i do for you. lorem ipsum duret id mecho kiwi</p>
                        <div className='d-flex justify-content-center align-items-center'>
                          <NavLink to='/services' className="icon-span rounded-circle d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-arrow-right'></i>
                          </NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 col-md-12'>
                    <div className="text-center card-box rounded-2 p-5">
                        <img src={speaker} alt="link" className='img-fluid' width="200px" />
                        <h5 className='my-3 fw-normal'>Content Marketing</h5>
                        <p className='mb-5'>hello link building, What can i do for you. lorem ipsum duret id mecho kiwi</p>
                        <div className='d-flex justify-content-center align-items-center'>
                          <NavLink to='/services' className="icon-span rounded-circle d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-arrow-right'></i>
                          </NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 col-md-12'>
                    <div className="text-center card-box rounded-2 p-5">
                        <img src={seo} alt="link" className='img-fluid' width="200px" />
                        <h5 className='my-3 fw-normal'>On Page SEO</h5>
                        <p className='mb-5'>hello link building, What can i do for you. lorem ipsum duret id mecho kiwi</p>
                        <div className='d-flex justify-content-center align-items-center'>
                          <NavLink to='/services' className="icon-span rounded-circle d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-arrow-right'></i>
                          </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services