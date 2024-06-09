import React from 'react'
import phone from '../Images/phone.gif'
import { Button } from 'react-bootstrap'

const ProductShowcase = () => {
    return (
        <section className='bg-color more-info-section'>
            <div className='container '>
                <div className='row mb-5'>
                    <div className='col-12 col-md-12 col-lg-6 img-section text-center'>
                        <figure>
                            <img src={phone} alt="phone" className='img-fluid' />
                        </figure>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                        <h2 className='text-capitalize fw-bolder text-white'>Step To Build a <br/> Successfull Digital Product</h2>
                        <p className='mt-3 mb-5 para-width text-light-grey'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eius facere ratione commodi esse voluptatem ipsum beatae magnam possimus quia culpa nihil quae voluptatum sapiente dolor at ipsa, ab aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                        <div className='text-center w-100 text-md-start'>
                            <Button className='text-capitalize px-5 py-2' data-bs-toggle="tooltip" data-bs-title="Default tooltip">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase