import React from 'react'
import { Col, Row, Card, Carousel } from 'antd';
import Giving1 from '../Asset/images/image 9.svg'
import Giving2 from '../Asset/images/image 10.svg'
import Giving3 from '../Asset/images/image 5.svg'
import Giving4 from '../Asset/images/image 7.svg'
import Giving5 from '../Asset/images/image 6.svg'
import Giving6 from '../Asset/images/image 8.svg'
import Phone1 from '../Asset/images/Group 6358830.svg'
import Phone2 from '../Asset/images/Group 6358831.svg'
import AppStore from '../Asset/images/Frame 6359433.svg'
import GooglePlay from '../Asset/images/Group 6359429.svg'
import Women from '../Asset/images/Rectangle 40149.svg'
import men from '../Asset/images/Rectangle 40149 (1).svg'

import "../Asset/Sass/OurPartners.scss";


const OurPartners = () => {

    return (
        <div className='container'>
            <section>
                <Row justify={'center'}>
                    <Col md={10}>
                        <div className='OurPartners_head'>
                            <span>Trusted by many,</span>
                            <h1>Our Partners</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p></div></Col>
                    <Col md={10}>
                        <div className='OurPartners_Card'>
                            <div className='OurPartners_image'>
                                <div><img src={Giving1} alt="image" /></div>
                                <div><img src={Giving2} alt="image" /></div>
                                <div><img src={Giving3} alt="image" /></div>
                            </div>
                            <div className='OurPartners_image'>
                                <div><img src={Giving4} alt="image" /></div>
                                <div><img src={Giving5} alt="image" /></div>
                                <div><img src={Giving6} alt="image" /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className='UpcomingEvents'>
                <Row justify={'center'}>
                    <Col md={10}>
                        <div className="UpcomingEvents_img1"><img src={Phone1} alt="image" />
                            <div className="UpcomingEvents_img2"><img src={Phone2} alt="image" /></div>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="UpcomingEvents_Text">
                            <h1>Join our upcoming events <br/>for contribution</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                            <img src={AppStore} alt="image" />
                            <img src={GooglePlay} alt="image" />
                        </div>            </Col>
                </Row>
            </section>

            <section>
                <div className='Customers_head'>
                    <h1>Our happy customers</h1>
                </div>
                <Carousel autoplay>
                    <div>
                        <Row justify={'center'}><Col md={10}>
                            <Card className='Customers_Card'>
                                <div className='Customers_Card_head'>
                                    <img src={Women} alt="image" />
                                    <div>
                                        <h1>Jane Doe</h1>
                                        <span>17th Aug, 2022</span>
                                    </div>
                                </div>
                                <p className='Customers_Card_para'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                <div className='Customers_Card_border'></div>
                            </Card>
                        </Col>

                            <Col md={10}>
                                <Card className='Customers_Card'>
                                    <div className='Customers_Card_head'>
                                        <img src={men} alt="image" />
                                        <div>
                                            <h1>Jane Doe</h1>
                                            <span>17th Aug, 2022</span>
                                        </div>
                                    </div>
                                    <p className='Customers_Card_para'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                    <div className='Customers_Card_border'></div>
                                </Card>
                            </Col></Row>
                    </div>

                    <div>
                        <Row justify={'center'}>
                            <Col md={20}>
                                <Card className='Customers_Card'>
                                    <div className='Customers_Card_head'>
                                        <img src={Women} alt="image" />
                                        <div>
                                            <h1>Jane Doe</h1>
                                            <span>17th Aug, 2022</span>
                                        </div>
                                    </div>
                                    <p className='Customers_Card_para'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                    <div className='Customers_Card_border'></div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Carousel>
            </section>
        </div>)
}

export default OurPartners