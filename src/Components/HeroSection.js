import React from 'react'
import hero from '../Images/hero.mp4'
import { Button } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section className='bg-main bg-color hero-section'>
        <div className='container'>
            <div className='row mb-5'>
                <div className="mt-3 mt-lg-0 order-lg-0 order-1 col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start text-center text-lg-start">
                    <h1 className='text-capitalize fw-bolder text-white'>We collect high quality leads</h1>
                    <p className='mt-3 mb-5 para-width text-light-grey'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eius facere ratione commodi esse voluptatem ipsum beatae magnam possimus quia culpa nihil quae voluptatum sapiente dolor at ipsa, ab aliquid?
                    </p>
                    <div className='text-center w-100 text-md-start'>
                      <Button className='text-capitalize mx-auto px-5 py-2'  data-bs-toggle="tooltip" data-bs-title="Default tooltip">Contact Us</Button>
                    </div>
                </div>
                <div className='col-12 col-md-12 col-lg-6 1 order-lg-1'>
                  <div className='text-center text-lg-end'>
                      <video className='hero-section-video' loop muted autoPlay>
                        <source src={hero}/>
                      </video>
                  </div>
                </div>
            </div>
        </div>
        <div class="custom-shape-divider-bottom-1717754069">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>
  )
}

export default HeroSection