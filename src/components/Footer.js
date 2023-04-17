import React from 'react'
import { Col, Row, } from 'antd';
import Logo from '../Asset/images/Group.svg'
import "../Asset/Sass/Footer.scss";
import AppStore from '../Asset/images/Frame 6359433.svg'
import GooglePlay from '../Asset/images/Group 6359429.svg'
const Footer = () => {
    return (
        <div className='container'>
            <footer className='Footer'>
                <Row >
                    <Col md={24} className='Footer1'>
                        
                      <div>
                        <div className='Footer_head'>
                            <img src={Logo} alt="image" />
                            <h1>POCKET.</h1>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div className='Footer_li'>
                            <h1>
                                Menu
                            </h1>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>News & Articles</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                   

                 
                        <div className='Footer_img'>
                            <h1>Join us and let’s make a better world, today</h1>
                            <div><img src={AppStore} alt="image" /></div>
                            <div><img src={GooglePlay} alt="image" /></div>
                        </div>
                    </Col>
                </Row>

                <Row justify={'center'}>
                    <Col md={24}>
                        <div className='Footer_border' />
                        <div className='Footer_End'><span>copyright reserve pockets</span></div>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer