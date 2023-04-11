import React from 'react'
import blogBannerimg from "../assets/image/Blogsdetails/blogdetailbanner.png";
import blogDetailImg from "../assets/image/Blogsdetails/blogdetail.png";
import blogImg from "../assets/image/Blogs/blog-img (1).png";
import hlogoimg from "../assets/image/Blogs/h-logo.png";
import flogoimg from "../assets/image/Blogs/f-logo.png";
import appStoreimg from "../assets/image/Blogs/appstore.png";
import googlePayimg from "../assets/image/Blogs/googleplay.png";


const Blogdetails = () => {


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
                    <p>TThis blog is dedicated to spreading awareness and sharing information about the plight of poor children around the world.
                        Our goal is to educate and inspire individuals to take action and support various charitable organizations and initiatives
                        aimed at improving the lives of these vulnerable children. From providing access to education, healthcare, and basic
                        necessities, to advocating for their rights and improving their living conditions, we believe that every child deserves a
                        chance to grow and thrive. Join us on this journey to make a difference in the lives of poor children.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h2>5 things we can do to improve our mental health without spending a dime:</h2>
                    <p>.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <ul>
                        <li>This blog is dedicated to spreading awareness and sharing</li>
                        <li> information about the plight of poor children around the world. Our goal is to educate and inspire individuals to take action</li>
                        <li>   support various charitable organizations and initiatives aimed at improving the lives of these vulnerable children. From providing
                            access to education, healthcare, and basic necessities, to advocating for their rights and improving their living conditions,</li>
                        <li>   we believe that every child deserves a chance to grow and thrive.</li>
                        <li>   Join us on this journey to make a difference in the lives of poor children.Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
                        <li> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</li>
                        <li>  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</li>
                    </ul>

                </div>
                <div className='blogdetails'>
                    <h2>Related blogs</h2>
                </div>
                <div className='blog-describe'>
                    <div className='blogdetails-diffrence-col'>
                        <div className='blog-diffrence'>
                            <img
                                alt="image"
                                src={blogDetailImg}
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
                                src={blogDetailImg}
                                className="pocketappblog-diffrence"
                            />
                            <h4>Making a difference, one life </h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className='read-blog_bttn'>Read Blog</button>
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

export default Blogdetails