import React from 'react'
import newsbannerImg from "../assets/image/Newsarticle/newsbanner.png";
import featureImg from "../assets/image/Newsarticle/feature.png";
import refreshImg from "../assets/image/Newsarticle/refresh.png";
import kidnessImg from "../assets/image/Newsarticle/kidness.png";
import babyimgImg from "../assets/image/Aboutus/babyimg.png";
import sixImg from "../assets/image/Aboutus/six.png";
import nineImg from "../assets/image/Aboutus/nine.png";
import hlogoimg from "../assets/image/Blogs/h-logo.png";
import flogoimg from "../assets/image/Blogs/f-logo.png";
import appStoreimg from "../assets/image/Blogs/appstore.png";
import googlePayimg from "../assets/image/Blogs/googleplay.png";


const Newsarticle = () => {


    return (
        <>
            <header className='nav-header'>
                <nav class="navbar">
                    <div class="container">
                        <div className='header-aline'>
                            <div class="navbar-header">
                                <a class="navbar-brand" href="#">
                                    <img
                                        alt="image"
                                        src={hlogoimg}
                                        className="pocketapp-logo"
                                    /></a>
                            </div>
                            <ul class="nav navbar-nav menu">
                                <li ><a href="#">About us</a></li>
                                <li class="active"><a href="#">News & Articles</a></li>
                                <li><a href="#">Blog</a></li>
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
                <div className='pocketapp-newsarticles'>
                    <h2 className='bannerimg-head'>News & Articles</h2>
                    <div className='newscircle'>
                        <div className='newsarticle'>
                            <img
                                alt="image"
                                src={newsbannerImg}
                                className="pocketapp_news"
                            />
                            <div className='news_articlesdetails'>
                                <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                    iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                    sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                        </div>
                        <div className='news-value'>
                            <div className='newsarticles'>

                                <h2>Empowering communities through acts of kindness</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                            <div className='newsarticles'>

                                <h2>Empowering communities through acts of kindness</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                            <div className='newsarticles'>

                                <h2>Empowering communities through acts of kindness</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                            <div className='newsarticles'>

                                <h2>Empowering communities through acts of kindness</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='explore_news'>
                    <div>
                        <span>Explore more</span>
                        <h2>Featured News</h2>
                    </div>
                    <button className='refresh_bttn'> <img
                        alt="image"
                        src={refreshImg}
                        className="pocketapp_news features refresh"
                    />
                        Refresh
                    </button>
                </div>
                <div className='featurenews '>
                    <div className='features_value'>
                        <div className='newsarticle features'>
                            <img
                                alt="image"
                                src={featureImg}
                                className="pocketapp_news features"
                            />
                            <div className='news_articlesdetails'>
                                <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                    iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                    sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                        </div>
                        <div className='newsarticle features '>
                            <img
                                alt="image"
                                src={featureImg}
                                className="pocketapp_news features"
                            />
                            <div className='news_articlesdetails'>
                                <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                    iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                    sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                        </div>
                        <div className='newsarticle features'>
                            <img
                                alt="image"
                                src={featureImg}
                                className="pocketapp_news features"
                            />
                            <div className='news_articlesdetails'>
                                <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                    iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                    sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                                </p>
                                <div className='newsabc'>
                                    <h2>ABC News</h2><label>|  37 min Ago</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='newsarticle features describe'>

                        <div className='news_articlesdetails'>
                            <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                            </p>
                            <div className='newsabc'>
                                <h2>ABC News</h2><label>|  37 min Ago</label>
                            </div>
                        </div>

                        <div className='news_articlesdetails'>
                            <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                            </p>
                            <div className='newsabc'>
                                <h2>ABC News</h2><label>|  37 min Ago</label>
                            </div>
                        </div>

                        <div className='news_articlesdetails'>
                            <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                            </p>
                            <div className='newsabc'>
                                <h2>ABC News</h2><label>|  37 min Ago</label>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='pocket_kid articlenews'>
                <div className='container pocket-aboutus_blesses'>
                    <div className='blogdetails about_news'>
                        <div className='newsarticle features_news '>
                            <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                            </p>
                            <div className='newsabc'>
                                <h2>ABC News</h2><label>|  37 min Ago</label>
                            </div>
                        </div>
                        <div className='newsarticle features_news '>
                            <h2>Inspiring Change, Making a Difference: Your Source for Charity News.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus quis turpis
                                iaculis, et iaculis nibh malesuada. Donec blandit tellus at felis suscipit, et sodales
                                sapien imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed venenatis.
                            </p>
                            <div className='newsabc'>
                                <h2>ABC News</h2><label>|  37 min Ago</label>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='blog-diffrence about_us_gallery_babyimgImg'>
                    <img
                        alt="image"
                        src={kidnessImg}
                        className="pocketappblog-diffrence about_us_gallery_babyimgImg"
                    />
                </div>
            </section>




            <footer className='container'>
                <div className='pocket-footer '>
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

export default Newsarticle