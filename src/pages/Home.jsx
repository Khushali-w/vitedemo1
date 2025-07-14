import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import slideImg from "../assets/images/slide.webp";
import aboutImg from "../assets/images/about.png";
import { FaAppStore, FaBeer, FaGlobe, FaIdBadge } from "react-icons/fa";

function Home(){
    return(
        <>
            <Header/>
            <section className="slider">
                <div className="slideSec">
                    <div className="slideTxt">
                        <h1 className="title">Let's Build <br/> Something.</h1>

                        <p className="description">We work with the most innovative solutions on the market to help you get the best results.</p>

                        <a href="#" className="slideBtn">GET STARTED</a>
                    </div>
                    
                    <img src={slideImg} className="imgSlide" />
                </div>
            </section>

            <section className="about-sec">
                <div className="about-cont">
                    <div className="intro">
                        <h2 className="featured">About Us</h2>
                        <p>For over 8 years we have been developing digital solutions for companies looking to gain better visibility on the internet.</p>
                    </div>
                    <div className="about-points d-flex align-items-center">
                        <div className="about-icon">
                            <FaAppStore/>
                        </div>
                        <div class="about-point-desc align-self-center">
                            <h4>Quality</h4>
                            <p>Everything we do has the commitment of a well trained and motivated team.</p>
                        </div>
                    </div>

                    <div className="about-points d-flex align-items-center">
                        <div className="about-icon">
                            <FaAppStore/>
                        </div>
                        <div class="about-point-desc align-self-center">
                            <h4>Quality</h4>
                            <p>Everything we do has the commitment of a well trained and motivated team.</p>
                        </div>
                    </div>
                </div>
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
            </section>

            <section className="service-sec">
                <div className="text-center mb-30">
                    <h2>Services</h2>
                    <p>Focused on results we seek to raise the level of our customers.</p>
                </div>
                <div className="d-flex services-main">
                    <div className="services-card text-center">
                        <div className="services-icon mb-20">
                            <FaGlobe/>
                        </div>
                        <h4 className="mb-20">Website Pro</h4>
                        <p>We build professional responsive websites optimized for the most popular search engines.</p>
                    </div>
                    <div className="services-card text-center">
                        <div className="services-icon mb-20">
                            <FaGlobe/>
                        </div>
                        <h4 className="mb-20">Website Pro</h4>
                        <p>We build professional responsive websites optimized for the most popular search engines.</p>
                    </div>
                    <div className="services-card text-center">
                        <div className="services-icon mb-20">
                            <FaGlobe/>
                        </div>
                        <h4 className="mb-20">Website Pro</h4>
                        <p>We build professional responsive websites optimized for the most popular search engines.</p>
                    </div>
                </div>
            </section>

         



            <Footer/>
        </>
    )
}

export default Home;