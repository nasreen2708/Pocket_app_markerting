import React from 'react'
import blogBannerimg from "../assets/image/Blogs/blogbanner.png";
import blogImg from "../assets/image/Blogs/blog-img (1).png";
import hlogoimg from "../assets/image/Blogs/h-logo.png";
import flogoimg from "../assets/image/Blogs/f-logo.png";
import appStoreimg from "../assets/image/Blogs/appstore.png";
import googlePayimg from "../assets/image/Blogs/googleplay.png";


const Blog = () => {


    return (
        <>
            <header className='nav-header'>
                <nav class="navbar">
                    <div class="container">
                        <div className='header-aline'>
                            <div class="navbar-header">
                                <a class="navbar-brand" href="#">  <img
                                    alt="image"
                                    src={hlogoimg}
                                    className="pocketapp-logo"
                                /></a>
                            </div>
                            <ul class="nav navbar-nav menu">
                                <li ><a href="#">About us</a></li>
                                <li><a href="#">News & Articles</a></li>
                                <li class="active"><a href="#">Blog</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right bttn">
                                {/* <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
                                {/* <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Charity Login</a></li> */}
                                <li><a href="#"> Charity Login</a></li>
                            </ul></div>
                    </div>
                </nav>
            </header>
            <section className='container'>
                <div>
                    <h2 className='bannerimg-head'>Blog</h2>
                    <img
                        alt="image"
                        src={blogBannerimg}
                        className="pocketappban"
                    />
                </div>
            </section>
            <section className='container'>
                <div className='pocket-blog-details'>
                    <h2>We will create modern Beautiful World, Empowering futures, changing lives:</h2>
                    <span>7th Mat 2022</span>
                    <p>This blog is dedicated to spreading awareness and sharing information about the plight of poor children around the world.
                        Our goal is to educate and inspire individuals to take action and support various charitable organizations and initiatives
                        aimed at improving the lives of these vulnerable children. From providing access to education,
                        healthcare, and basic necessities, to advocating for their rights and improving their living conditions, we believe that every
                        child deserves a chance to grow and thrive. Join us on this journey to make a difference in the lives of poor children.</p>
                </div>
                <div className='blog-describe'>
                    <div className='blog-diffrence-left-col'>
                        <div className='blog-diffrence'>
                            <img
                                alt="image"
                                src={blogImg}
                                className="pocketappblog-diffrence"
                            />
                            <h4>Making a difference, one life </h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className='read-blog_bttn'>Read Blog</button>
                        </div>
                        <div className='blog-diffrence'>
                            <img
                                alt="image"
                                src={blogImg}
                                className="pocketappblog-diffrence"
                            />
                            <h4>Making a difference, one life </h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className='read-blog_bttn'>Read Blog</button>
                        </div>
                        <div className='blog-diffrence'>
                            <img
                                alt="image"
                                src={blogImg}
                                className="pocketappblog-diffrence"
                            />
                            <h4>Making a difference, one life </h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className='read-blog_bttn'>Read Blog</button>
                        </div>
                        <div className='blog-diffrence'>
                            <img
                                alt="image"
                                src={blogImg}
                                className="pocketappblog-diffrence"
                            />
                            <h4>Making a difference, one life </h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className='read-blog_bttn'>Read Blog</button>
                        </div>
                    </div>
                    <div className='blog-difrence-right-col'>
                        <div className='diffrence-onelife'>
                            <h2>Making a difference, one life at a time</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <a>Read it now</a>
                        </div>
                        <div className='diffrence-onelife'>
                            <h2>Making a difference, one life at a time</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <a>Read it now</a>
                        </div>
                        <div className='diffrence-onelife'>
                            <h2>Making a difference, one life at a time</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <a>Read it now</a>
                        </div>
                        <div className='diffrence-onelife'>
                            <h2>Making a difference, one life at a time</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <a>Read it now</a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='container'>
                <div className='pocket-footer'>
                    <div className='footer-logopack'>
                        <img
                            alt="image"
                            src={flogoimg}
                            className="pocketapp-logo"
                        /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <ul class="nav navbar-nav menu footer">
                        <h2>Menu</h2>
                        <li ><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li ><a href="#">News & Articles</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                    <div className='footer-socialmedia'>
                        <h2>Join us and let’s make a better world, today</h2>
                        <img
                            alt="image"
                            src={appStoreimg}
                            className="pocketapp-logo"
                        />
                        <img
                            alt="image"
                            src={googlePayimg}
                            className="pocketapp-logo"
                        />
                    </div>
                </div>
                <div className='copyrights'>
                    <h5>copyright reserve pockets</h5>
                </div>
            </footer>
        </>
    )
}

export default Blog