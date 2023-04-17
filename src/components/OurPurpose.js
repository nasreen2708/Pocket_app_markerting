import React from 'react'
import { Col, Row, Card } from 'antd';
import '../Asset/Sass/OurPurpose.scss'
import Child from '../Asset/images/Rectangle 40129.svg'
import GHeart from '../Asset/images/Group 6358780.svg'
import BHeart from '../Asset/images/Group 6358847.svg'
import Ball from '../Asset/images/Group 6359454.svg'
import School from '../Asset/images/Group 6358850.svg'
import Video from '../Asset/images/Rectangle 40137.svg'

const OurPurpose = () => {
  return (
    <div className='container'>
      <Row justify="center">
        <Col md={20}>
          <div className='Purpose_Head'>
            <span>Discovering Our Identity,</span>
            <h1>Defining Our Purpose</h1>
          </div>
          <div className='Purpose_para_Main'> <p className='Purpose_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
          </div>

          <div className='Purpose_list'>
            <ul >
              <li>Excepteur sint occaecat cupidatat non proident</li>
              <li>Pellentesque elit ullamcorper dignissim</li>
              <li>Nibh mauris cursus mattis molestie a iaculis</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <img src={Child} width="100%" alt='childimg' />
        </Col>
      </Row>

      <Row>
        <Col md={24}>
          <section className='Results'>
            <div className='Results_Head'>
              <span>
                Our Results
              </span>
              <h1>Making a big impact, one <br />step at a time</h1>
            </div>

            <div className='Results_Card'>
              <Card className='Results_Card_Item1'>
                <img src={GHeart} />
                <h1>500M</h1>
                <span>Liters of water</span>
              </Card>

              <Card className='Results_Card_Item2'>
                <img src={BHeart} />
                <h1>7000+</h1>
                <span>Houses built</span>
              </Card>

              <Card className='Results_Card_Item3'>
                <img src={Ball} />
                <h1>10,000+</h1>
                <span>Toys delivered</span>
              </Card>

              <Card className='Results_Card_Item4'>
                <img src={School} />
                <h1>2000+</h1>
                <span>Schools built</span>
              </Card>
            </div>
          </section>
        </Col>
      </Row>

      <section>
        <Row justify={'center'}>
          <Col md={24}>
            <div className='Look-at-our-video_head'>
              <h1>
                Take a look at our video,</h1>
              <span>We have helped over 200 vulnerable communities worldwide </span>
            </div>

            <div className='Look-at-our-video_Item'>
              <div className='Look-at-our-video_Img'>
                <img src={Video} />
                <div className='Look-at-our-video_Content'>
                  <div>
                    <h1>The goal and mission behind</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                  </div>
                  <div>
                    <h1>How our charity got started</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>

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

export default OurPurpose