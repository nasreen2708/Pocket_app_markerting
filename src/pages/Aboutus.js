import React from 'react'
import banneraboutImg from "../assets/image/Aboutus/bannerabout.png";
import bluecoreImg from "../assets/image/Aboutus/bluecard.png";
import greyImg from "../assets/image/Aboutus/Grey.png";
import suhanaImg from "../assets/image/Aboutus/Suhana.png";
import JannieImg from "../assets/image/Aboutus/Jannie.png";
import RobertImg from "../assets/image/Aboutus/Robert.png";
import galleryImg from "../assets/image/Aboutus/gallery.png";
import AlanstuardImg from "../assets/image/Aboutus/Alanstuard.png";
import babyimgImg from "../assets/image/Aboutus/babyimg.png";
import sixImg from "../assets/image/Aboutus/six.png";
import nineImg from "../assets/image/Aboutus/nine.png";
import hlogoimg from "../assets/image/Blogs/h-logo.png";
import flogoimg from "../assets/image/Blogs/f-logo.png";
import appStoreimg from "../assets/image/Blogs/appstore.png";
import googlePayimg from "../assets/image/Blogs/googleplay.png";
import Header from './Header';
import Footer from './Footer';


const Aboutus = () => {


    return (

        <>
            <Header></Header>
            <section className='container'>
                <div className='pocketapp-aboutus'>
                    <h2 className='bannerimg-head'>About</h2>
                    <div className='aboutus'>
                        <h2><span>Empowering Progress, Together</span>
                            Our Path</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis iaculis,
                            et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales sapien imperdiet.
                            Aenean nec efficitur leo. Cras maximus porta quam sed venenatis. </p>
                    </div>
                    <img
                        alt="image"
                        src={banneraboutImg}
                        className="pocketappban"
                    />
                    <div className='about-value'>
                        <div className='value_details'>
                            <h1>200M</h1>
                            <span>Humans impacted</span>
                        </div>
                        <div className='value_details'>
                            <h1>50K</h1>
                            <span>Collaborators</span>
                        </div>
                        <div className='value_details'>
                            <h1>370K</h1>
                            <span>Donations</span>
                        </div>
                        <div className='value_details'>
                            <h1>100+</h1>
                            <span>Assisted communities</span>
                        </div>
                    </div>
                </div>
            </section>
            <img
                alt="image"
                src={bluecoreImg}
                className="pocketappblue"
            />
            <section className='container'>
                <div className='pocket-blog-details AboutUs'>
                    <span>Why Us,</span>
                    <h2> How we are leaving Impact</h2>
                </div>

                <div className='aboutus_describe_care'>
                    <div className='aboutus_describe'>
                        <h6>Overview of the child care services offered</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                    </div>
                    <div className='aboutus_describe'>
                        <h6>afety and security measures in place</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                    </div>
                    <div className='aboutus_describe'>
                        <h6>Age-appropriate activities and educational programs</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                    </div>
                    <img
                        alt="image"
                        src={greyImg}
                        className="pocketappgrey"
                    />
                </div>


            </section>
            <section className='container'>
                <div className='pocket-aboutus'>
                    <div className='blogdetails about'>
                        <span>Our Team,</span>
                        <h2>A dynamic group, committed to excellence</h2>
                    </div>
                    <div className='blog-describe'>
                        <div className='blogdetails-diffrence-col'>
                            <div className='blog-diffrence about_us'>
                                <img
                                    alt="image"
                                    src={suhanaImg}
                                    className="pocketappblog-diffrence about"
                                />
                                <h4>Suhana</h4>
                                <a>Founder</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis iaculis,
                                    et iaculis nibh malesuada. </p>

                            </div>

                            <div className='blog-diffrence about_us'>
                                <img
                                    alt="image"
                                    src={JannieImg}
                                    className="pocketappblog-diffrence about"
                                />
                                <h4>Jannie joseph</h4>
                                <a>Co-Founder</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis iaculis,
                                    et iaculis nibh malesuada. </p>
                            </div>
                            <div className='blog-diffrence about_us'>
                                <img
                                    alt="image"
                                    src={RobertImg}
                                    className="pocketappblog-diffrence about"
                                />
                                <h4>Robert</h4>
                                <a>CEO</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis iaculis,
                                    et iaculis nibh malesuada. </p>
                            </div>
                            <div className='blog-diffrence about_us'>
                                <img
                                    alt="image"
                                    src={AlanstuardImg}
                                    className="pocketappblog-diffrence about"
                                />
                                <h4>Alan stuard</h4>
                                <a>Founder</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis iaculis,
                                    et iaculis nibh malesuada. </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='pocket-aboutus_blesses'>
                    <div className='blogdetails about'>
                        <span>Your blessing to them,</span>
                        <h2>Our Gallery</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                    </div>

                    <div className='blog-diffrence about_us_gallery'>
                        <img
                            alt="image"
                            src={galleryImg}
                            className="pocketappblog-diffrence about_gallery"
                        />
                    </div>
                </div>
            </section>
            <section className='pocket_kid'>
                <div className='container pocket-aboutus_blesses'>
                    <div className='blogdetails about'>
                        <span>How we get inspired,</span>
                        <h2>Our Story</h2>
                        <p>
                            <img
                                alt="image"
                                src={sixImg}
                                className="pocketappblog-diffrence about_cotimg"
                            />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            <img
                                alt="image"
                                src={nineImg}
                                className="pocketappblog-diffrence about_cotimg"
                            />
                        </p>
                    </div>


                </div>
                <div className='blog-diffrence about_us_gallery_babyimgImg'>
                    <img
                        alt="image"
                        src={babyimgImg}
                        className="pocketappblog-diffrence about_us_gallery_babyimgImg"
                    />
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Aboutus