import React from 'react'
import blogBannerimg from "../assets/image/Blogs/blogbanner.png";
import blogImg from "../assets/image/Blogs/blog-img (1).png";
import hlogoimg from "../assets/image/Blogs/h-logo.png";
import flogoimg from "../assets/image/Blogs/f-logo.png";
import appStoreimg from "../assets/image/Blogs/appstore.png";
import googlePayimg from "../assets/image/Blogs/googleplay.png";
import Header from './Header';
import Footer from './Footer';


const Blog = () => {


    return (
        <>
            <Header></Header>
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
            <Footer></Footer>
        </>
    )
}

export default Blog