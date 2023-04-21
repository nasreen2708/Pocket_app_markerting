import React from "react";
import "../assets/SCSS/Contactus.scss";
import { Col, Row, Card, Tabs, Form, Input, ConfigProvider } from "antd";
import { Container } from "reactstrap";
import lmg from "../assets/images/Rectangle 40178.svg";
import Map from "../assets/images/map-pin.png";
import call from "../assets/images/Vector.png";
import Logo from '../Asset/images/Group.svg'
import "../Asset/Sass/Footer.scss";
import AppStore from '../Asset/images/Frame 6359433.svg'
import GooglePlay from '../Asset/images/Group 6359429.svg'
import Header from './Header';
import Footer from './Footer';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const { TextArea } = Input;

const Contactus = () => {
  return (
    <>
      <Header ></Header>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#252947",
          },
        }}
      >
        <Container>
          <center>
            <h1 className="heading_contact_us">Contact us</h1>
          </center>
          <Row className="pockets_contact_">
            <div>
              <Col span={12}>
                <p className="heading_here_we_are">
                  Here we are for your questions,
                </p>
                <h4 className="heading_let_us">Let Us Know</h4>
                <p className="pockets_lorem_ipsum">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  laoreet tellus quis turpis iaculis, et iaculis nibh malesuada.
                  Donec blandit tellus at felis suscipit, et sodales sapien
                  imperdiet. Aenean nec efficitur leo. Cras maximus porta quam sed
                  venenatis.{" "}
                </p>

                <div>
                  <button className="pockets_but_partner">
                    Become Our Partner
                  </button>
                </div>
                <img src={lmg} alt="Image" className="pockets_contactus_image" />

                <div className="pockets_contactus_address">
                  <div className="pockets_contactus_address_1">
                    <h1 className="pockets_united_kingdom">United Kingdom</h1>

                    <p className="pockets_address">

                      <img src={Map} alt="Map" /> HU11 4UR, England, East Riding of
                      Yorkshire, Great Hatfield
                    </p>
                    <p>
                      {" "}
                      <img src={call} alt="Map" /> +44 13548910578
                    </p>
                  </div>
                  <div className="pockets_contactus_address_2">
                    <h1 className="pockets_united_kingdom">United Kingdom</h1>

                    <p className="pockets_address">
                      {" "}
                      <img src={Map} alt="Map" /> HU11 4UR, England, East Riding of
                      Yorkshire, Great Hatfield
                    </p>
                    <p>
                      {" "}
                      <img src={call} alt="Map" /> +44 13548910578
                    </p>
                  </div>
                </div>
              </Col>
            </div>
            <div>
              <Col span={12} className="pockets_tabspage">

                <Card
                  className="pockets_card"
                  style={{
                    width: 539,
                    height: 872,
                  }}
                >
                  <Tabs
                    defaultActiveKey="1"
                    centered
                    onChange={callback}
                    tabBarStyle={{ color: "#fffff" }}
                    style={{ width: "100%" }}
                    className="pockets_tabs_line"
                  >

                    <TabPane tab="Contact with us" key="1" className="pockets_tab1">
                      <h4 className="pocktes_email_text">Full Name</h4>

                      <Input
                        type="text"
                        placeholder="Full Name"
                        className="pockets_contactus_but"
                      />

                      <h4 className="pocktes_email_text">Email Address</h4>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your E-mail!",
                          },
                        ]}
                      >
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          className="pockets_contactus_but"
                        />
                      </Form.Item>
                      <h4 className="pocktes_email_text">Country</h4>

                      <Input
                        type="text"
                        placeholder="Full Name"
                        className="pockets_contactus_but"
                      />
                      <h4 className="pocktes_email_text">Message</h4>
                      <TextArea
                        placeholder="Type Here"
                        autoSize={{ minRows: 6, maxRows: 6 }}
                      />
                      <button className="pocket_contactus_button">Send</button>
                    </TabPane>

                    <TabPane tab="Become Our Partner" key="2">
                      <div
                      // data-aos="flip-left"
                      // data-aos-easing="ease-out-cubic"
                      // data-aos-duration="2000"
                      >
                        <div>
                          <h4 className="pocktes_email_text">Full Name</h4>

                          <Input
                            type="text"
                            placeholder="Full Name"
                            className="pockets_contactus_but"
                          />

                          <h4 className="pocktes_email_text">Email Address</h4>
                          <Form.Item
                            name="email"
                            rules={[
                              {
                                type: "email",
                                message: "The input is not valid E-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your E-mail!",
                              },
                            ]}
                          >
                            <Input
                              type="email"
                              placeholder="example@gmail.com"
                              className="pockets_contactus_but"
                            />
                          </Form.Item>
                          <h4 className="pocktes_email_text">Country</h4>

                          <Input
                            type="text"
                            placeholder=""
                            className="pockets_contactus_but"
                          />
                          <h4 className="pocktes_email_text">Message</h4>
                          <TextArea
                            placeholder="Type Here"
                            autoSize={{ minRows: 6, maxRows: 6 }}
                          />
                          <button className="pocket_contactus_button">Send</button>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </Card>

              </Col>
            </div>
          </Row>
          <div>
            <footer className='Footer'>
              <Row justify={'center'}>
                <Col md={8}>
                  <div className='Footer_head'>
                    <img src={Logo} alt="image" />
                    <h1>POCKET.</h1>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Col>
                <Col md={6}>
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
                </Col>
                <Col md={6}>
                  <div className='Footer_img'>
                    <h1>Join us and let’s make a better world, today</h1>
                    <div><img src={AppStore} alt="image" /></div>
                    <div><img src={GooglePlay} alt="image" /></div>

                  </div>
                </Col>

              </Row>
              <Row justify={'center'}>
                <Col md={20}>
                  <div className='Footer_border' />
                  <div className='Footer_End'><span>copyright reserve pockets</span></div>
                </Col>
              </Row>
            </footer>

          </div>
        </Container>
      </ConfigProvider>
      <Footer ></Footer>
    </>
  );
};
export default Contactus;
