import React from 'react'
import email from '../Images/emjoi.gif'
import call from '../Images/call.gif'
import map from '../Images/map.gif'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="main-footer-section bg-color">
            <div class="contact-details">
                <div class="container px-5">
                    <div class="row g-0">
                        <div class="col-lg-4 ">
                            <div class="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                                <div class="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <img src={call} alt="GIF" className="img-fluid" />
                                </div>
                                <p class="text-white">(+00) 1234 5678</p>
                            </div>
                        </div>
                        <div class="col-lg-4 ">
                            <div class="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                                <div class="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <img src={email} alt="GIF" class="img-fluid" />
                                </div>
                                <p class="text-white">arceus@gmail.com</p>
                            </div>
                        </div>

                        <div class="col-lg-4 ">
                            <div class="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                                <div class="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <img src={map} alt="GIF" class="img-fluid" />
                                </div>
                                <p class="text-white">45 Maple, Springfield, IL 62701, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-section py-5 text-white">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-6">
                            <div class="footer-links">
                                <h4 class="text-white mt-5 mb-3">About</h4>
                                <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                    <li>Our Story</li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6 col-6">
                            <div class="footer-links">
                                <h4 class="text-white mt-5 mb-3">About</h4>
                                <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                    <li>Our Story</li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6 col-6">
                            <div class="footer-links">
                                <h4 class="text-white mt-5 mb-3">About</h4>
                                <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                    <li>Our Story</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="footer-links">
                                <h4 class="mt-5 mb-3 text-white">Subscribe</h4>
                                <div class="input-group mb-3 w-75">
                                    <input type="text" class="form-control" placeholder="Recipient's username"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text btn btn-primary" id="basic-addon2">Subscribe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <hr class="container mx-auto" />

                <div class="row">
                    <div class="col-lg-8 col-12 ">
                        Copyright ©2023 All rights reserved.
                    </div>
                    <div class="col-md-4 col-12  ">
                        <div class="d-flex justify-content-center justify-content-lg-end gap-5 mt-lg-0 mt-3">
                            <NavLink to="https://www.instagram.com/thapatechnical/" target="_blank">
                                <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </NavLink>
                            <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                <i class="fa-brands fa-whatsapp"></i>
                            </div>
                            <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
<div class="contact-details"></div>

export default Footer