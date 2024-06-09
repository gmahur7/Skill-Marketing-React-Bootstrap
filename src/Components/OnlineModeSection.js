import React from 'react'
import phone from '../Images/phone.gif'
import map from '../Images/map.gif'

const OnlineModeSection = () => {
    return (
        <section className='common-section bussiness-section' id="online-section">
            <div className='container text-center common-title fw-bold'>
                <h2 className='common-heading'>Generating New Text Via <br /> Online Mode </h2>
                <hr className='w-25 mx-auto' />
            </div>
            <div className='container'>
                <div className='row g-5'>
                    <div className='col-12 col-md-12 col-lg-6 '>
                        <div className='d-flex px-3 py-5 shadow'>
                            <img src={phone} alt="GIF" className='d-md-block d-none img-fluid mx-3' width="150px" />
                            <div>
                                <p className='mb-3 fw-bolder'>Social Media Advertising</p>
                                <p>Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram and
                            LinkedIn. Target specific demographics to connect with potential customers interested in
                            your services.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 '>
                        <div className='d-flex px-3 py-5 shadow'>
                            <img src={map} alt="GIF" className='d-md-block d-none img-fluid mx-3' width="150px" />
                            <div>
                                <p className='mb-3 fw-bolder'>Influencer Marketing</p>
                                <p>Partner with influential individuals or bloggers in your industry to tap into their audience.
                            Through sponsored posts or endorsements, you can generate interest and attract new customers
                            to your online channels</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 '>
                        <div className='d-flex px-3 py-5 shadow'>
                            <img src={map} alt="GIF" className='d-md-block d-none img-fluid mx-3' width="150px" />
                            <div>
                                <p className='mb-3 fw-bolder'>Referral Programs</p>
                                <p>Implement a customer referral program. Incentivize existing customers to refer others with
                            rewards like discounts or loyalty points. Word-of-mouth marketing helps acquire new
                            customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 '>
                        <div className='d-flex px-3 py-5 shadow'>
                            <img src={phone} alt="GIF" className='d-md-block d-none img-fluid mx-3' width="150px" />
                            <div>
                                <p className='mb-3 fw-bolder'>Content Marketing </p>
                                <p>Publish valuable and optimized content on your website's blog. Attract organic traffic,
                            position your brand as an authority, and encourage visitors to engage and make a
                            purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OnlineModeSection