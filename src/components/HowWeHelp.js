import React from 'react'
import { Col, Row, Card } from 'antd';
import "../Asset/Sass/HowWeHelp.scss";
import Home from '../Asset/images/Group 6358790.svg'
import Heart from '../Asset/images/Group 6359702.svg'
import Cap from '../Asset/images/Food.svg'
import Tree from '../Asset/images/tree.svg'
import Education from '../Asset/images/Education.svg'
import Plus from '../Asset/images/Group 6359416.svg'
import Phone from '../Asset/images/iPhone 13.svg'
import AppStore from '../Asset/images/Frame 6359433.svg'
import GooglePlay from '../Asset/images/Group 6359429.svg'
const HowWeHelp = () => {
    return (
        <div className='container'>

            <section className='HowWeHelp'>
                <Row justify={'center'}>
                    <Col md={10}>
                        <div className='HowWeHelp_Head'>
                            <h1>How we help?</h1>
                            <span>What are we doing to assist these <br />communities?</span>
                        </div>
                    </Col>

                    <Col md={5}>
                        <Card className='HowWeHelp_Card'>
                            <img src={Home} alt="image" />
                            <h1>House & shelter</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card className='HowWeHelp_Card'>
                            <img src={Heart} alt="image" />

                            <h1>Love & support</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        </Card>
                    </Col>
                </Row>

                <Row justify={'center'}>
                    <Col md={5}>
                        <Card className='HowWeHelp_Card'>
                            <img src={Cap} alt="image" />
                            <h1>Food & groceries</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card className='HowWeHelp_Card'>
                            <img src={Tree} alt="image" />
                            <h1>Environmental help</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card className='HowWeHelp_Card'>
                            <img src={Education} alt="image" />
                            <h1>Education</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card className='HowWeHelp_Card'>
                            <img src={Plus} alt="image" />
                            <h1>Health & insurance</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className='Join-Us'>
                <Row justify={'center'}>
                    <Col md={8}>
                        <div>
                            <img src={Phone} alt="image" />
                        </div>
                    </Col>

                    <Col md={12}>
                        <div>
                            <h1 className='Join-Us_head'>
                                Join us and let’s make a <br />better world, today
                            </h1>
                            <img src={AppStore} alt="image" className='Join-Us_Image' />
                            <img src={GooglePlay} alt="image" className='Join-Us_Image' />
                        </div>
                    </Col>
                </Row>
            </section>

        </div>
    )
}

export default HowWeHelp