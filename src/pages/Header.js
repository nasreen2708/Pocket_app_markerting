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


const Header = () => {


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
                                <li><a href="#">About us</a></li>
                                <li><a href="#">News & Articles</a></li>
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
        </>
    )
}

export default Header