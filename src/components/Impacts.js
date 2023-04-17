import React from 'react'
import '../Asset/Sass/Impacts.scss'
import { Col, Row, Card } from 'antd';
import Map from '../Asset/images/Frame.svg'
import study1 from '../Asset/images/Rectangle 40146.svg'
import Arrow from '../Asset/images/arrow-right.svg'
import study2 from '../Asset/images/Rectangle 40147.svg'

const Impacts = () => {

    let data = [{ id: "1", head: "Study Support", CName: "Impacts_Cards_Items1", BName: "Impacts_Cards_Border1" }, { id: "2", head: "Food ", CName: "Impacts_Cards_Items2", BName: "Impacts_Cards_Border2" }, { id: "3", head: "Study Support", CName: "Impacts_Cards_Items3", BName: "Impacts_Cards_Border3" }
    ]

    return (
<div className='container'>
            <section>
                <Row justify="center">
                    <Col md={20}>
                        <div className='Impacts_head'>   <span>Impacts</span>
                            <h1>See how we are making a difference</h1>
                        </div>
                        <div className='Impacts_para_Main'> <p className='Impacts_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col md={7}>
                        <ul className='Impacts_list'>
                            <li>Excepteur sint occaecat cupidatat non proident</li>
                            <li>Pellentesque elit ullamcorper dignissim</li>
                            <li>Nibh mauris cursus mattis molestie a iaculis</li>
                        </ul>
                    </Col>
                </Row>

                <Row justify="center">
                    {data.map((data) => {
                        return (
                            <>
                                <Col md={7}>
                                        <div className='Impacts_Cards'>
                                        <div className={data.BName}></div>

                                            <div>
                                                <div className='Impacts_Cards_Head'>
                                                    <h1>{data.head}</h1><span>No. of Campaign ; 23</span></div>
                                                <div className={data.CName}>
                                                    <div><span>south Africa</span></div>
                                                    <div><span>Burundi</span></div>
                                                    <div><span>South Sudan</span></div>
                                                    <div><span>Somalia</span></div>
                                                </div><br />
                                                <div className={data.CName}>
                                                    <div><span>Central African Republic</span></div>
                                                    <div><span>Mozambique</span></div>
                                                    <div><span>Niger</span></div>
                                                </div>
                                            </div></div>
                                </Col>
                            </>
                        )
                    })}
                </Row>

            </section>

            <section>
                <Row justify={'center'}>
                    <Col md={18}>
                        <div className='Map'>
                            <img src={Map} alt='image' width="100%" />
                        </div>
                    </Col>
                </Row>
            </section>

            <section className='News'>
                <Row justify={'center'}>
                    <Col md={5}>
                            <div className='News_Card'>
                                <img src={study1} alt='image' width="100%" />
                                <div className='News_Card_Head'>    <h1>Lorem Ipsum is simply dummy text </h1>
                                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h2></div>
                                <div className='News_Card_footer'> <h2 >Read more</h2><img src={Arrow} alt='image' /></div>
                            </div>
                    </Col>

                    <Col md={7}>
                            <div className='News_Card'>
                                <img src={study2} alt='image' width="100%" />
                                <div className='News_Card_Head'>    <h1>Lorem Ipsum is simply dummy text </h1>
                                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h2></div>
                                <div className='News_Card_footer'> <h2 >Read more</h2><img src={Arrow} alt='image' /></div>
                            </div>
                    </Col>

                    <Col md={8}>
                        <div className='News_Head'>
                            <span>News & Resources</span>
                            <h1>Read our latest news</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button type='button'>Read more news</button>
                        </div>
                    </Col>
                </Row>
            </section>
            
        </div>
    )
}

export default Impacts