import React from 'react'

const ContactUs = () => {
    return (
        <section className='common-section contact-section text-white pt-5 bg-color'>
            <div class="custom-shape-divider-top-1717909388">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='container text-center common-title fw-bold'>
                <h2 className='common-heading text-white'>Our Contacts</h2>
                <hr className='w-25 mx-auto' />
            </div>
            <div className='container'>
                <form className='form-section mx-auto'>
                    <div className='mb-3'>
                        <div className='row d-flex'>
                            <div className='col-lg-6 col-12'>
                                <label for="exampleFormControlFirst" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="exampleFormControlFirst" placeholder="First Name" />
                            </div>
                            <div className='col-lg-6 col-12'>
                                <label for="exampleFormControlLast" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="exampleFormControlLast" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs