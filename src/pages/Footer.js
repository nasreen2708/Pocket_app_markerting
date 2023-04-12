import React from 'react'
import flogoimg from "../assets/image/Blogs/f-logo.png";
import appStoreimg from "../assets/image/Blogs/appstore.png";
import googlePayimg from "../assets/image/Blogs/googleplay.png";


const Footer = () => {


    return (
        <>
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

export default Footer