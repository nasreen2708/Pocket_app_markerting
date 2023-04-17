import React from 'react'
import { Col, Row, Card } from 'antd';
import QR from '../Asset/images/Rectangle 40168.svg'
import AppStore from '../Asset/images/Frame 6359433.svg'
import GooglePlay from '../Asset/images/Group 6359429.svg'
import mopile from '../Asset/images/iPhone 13 Pro.svg'
import mopile1 from '../Asset/images/iPhone 12 Pro.svg'
import mopile2 from '../Asset/images/Group 6358521 1.svg'

import '../Asset/Sass/Givinghelp.scss'
const Givinghelp = () => {
    return (
            <div className='container'>
                <section className='Giving-Help'>
                    <Row justify="space-around">
                        <Col md={15}>
                            <div className='Giving-Help_head'>
                                <span>Giving help to those</span>
                                <h1>who need it</h1>
                            </div>
                            <p className='Giving-Help_para'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text<br />  ever since the 1500s </p>

                            <div className='Giving-Help_Download'>
                                <Card className='Giving-Help_Download_QR'>
                                    <img alt='image' src={QR} />
                                    <span>Scan to download</span>
                                </Card>
                                <div className='Giving-Help_Download_button'>
                                    <div><img alt='image' src={AppStore} /></div><br />
                                    <div><img alt='image' src={GooglePlay} /></div>

                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="Giving-Help_Img"><img src={mopile} alt="image" />
                                <div className="Giving-Help_Img1"><img src={mopile1} alt="image" /></div>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section>
                    <Row >
                        <Col md={24}>
                            <div className='BuildingTrust'>
                                <img alt='image' src={mopile2} />
                                <br />
                                <div className='BuildingTrust_head'>
                                    <h1> Building Trust, </h1>
                                    <span>Bridging the World </span>
                                </div>
                                <div className='BuildingTrust1'>
                                    <div className='BuildingTrust_items'>
                                        <div className='BuildingTrust_items_num'>
                                            <h1> 200M </h1>
                                            <span>Humans impacted</span>
                                        </div>
                                        <div className='BuildingTrust_items_num'>
                                            <h1> 50K </h1>
                                            <span>Collaborators</span>
                                        </div>
                                    </div>
                                    <div className='BuildingTrust_items'>

                                        <div className='BuildingTrust_items_num'>
                                            <h1> 370K </h1>
                                            <span>Donations </span>
                                        </div>
                                        <div className='BuildingTrust_items_num'>
                                            <h1> 100+ </h1>
                                            <span>Assisted communities</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
    )
}

export default Givinghelp