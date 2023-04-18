import { Row, Col, Card, Button } from "antd";
import React from "react";
import "../assets/home.scss"
import goggle from "../images/playstore.png"
import appstore from "../images/apple.png"
import childpic from "../images/Rectangle.svg"
import children from "../images/Rectangle99.svg"
import childone from "../images/Rectangle101.svg"
import childsmile from "../images/Rectangle100.svg"
import vector from "../images/vecticon.svg"
import childrens from "../images/Rectangle102.svg"
import water from "../images/liters.svg"
import houses from "../images/House build.svg"
import delivered from "../images/toys.svg"
import built from "../images/Schools.svg"
import smallchild from "../images/Rectangle 40103.svg"
import playbutton from "../images/Group 6358828.svg"
import house from "../images/Group 6358790.svg"
import environ from "../images/Group 6358793.svg"
import african from "../images/Rectangle 40106.svg"
import articles from "../images/Rectangle 40113.svg"
import resources from "../images/Rectangle 40114.svg"
import arrow from "../images/rightarrow.svg"
import mobile from "../images/Group 6358830.svg"
import playstore from "../images/Group 6358838.svg"
import michel from "../images/Rectangle 40121.svg"
import allison from "../images/Rectangle 40120.svg"
import danie from "../images/Rectangle 40122.svg"
import group from "../images/Group 6358833.svg"
import pocket from "../images/Group.svg"
import roundpic from "../images/Ellipse 4 (2).svg"
import roundshape from "../images/Ellipse 4 (3).svg"

const Home = () => {
    return (
        <>
            <div className="Pockets_marketing_container">
                <Row >
                    <Col span={12}>
                        <div className="Pockets_home_content">
                            <div className="Pockets_home_heading">
                                <h1>Giving help to those
                                    who need it</h1>
                            </div>
                            <div className="Pockets_home_para">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                            </div>
                            <div className="Pockets_home_playstore_icon">
                                <div>
                                    <img src={goggle} alt="images" />
                                </div>
                                <div className="Pockets_home_apple_icon">
                                    <img src={appstore} alt="images" />
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="Pockets_home_child_img">
                            <img src={childpic} alt="images" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="Pockets_marketing_humans">
                <div className="Pockets_marketing_container">
                    <Row >
                        <Col span={6}>
                            <div className="Pockets_marketing_achivements">
                                <div className="Pockets_marketing_achivements_options">
                                    <h3>200M</h3>
                                    <p>Humans impacted</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Pockets_marketing_achivements">
                                <div className="Pockets_marketing_achivements_options">
                                    <h3>50K</h3>
                                    <p>Collaborators</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Pockets_marketing_achivements">
                                <div className="Pockets_marketing_achivements_options">
                                    <h3>370K</h3>
                                    <p>Donations</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Pockets_marketing_achivements">
                                <div className="Pockets_marketing_achivements_options">
                                    <h3>100+</h3>
                                    <p>Assisted communities</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr className="Pockets_marketing_horizontal" />
                <div>
                    <div className="Pockets_marketing_container">
                        <div className="Pockets_marketing_about_title">
                            <h3>ABOUT US</h3>
                        </div>
                        <div className="Pockets_marketing_about_sub_title">
                            <h2>We are here to support <br /> vulnerable communities</h2>
                        </div>
                        <Row>
                            <Col span={12}>
                                <div className="Pockets_marketing_about_content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                </div>
                                <div className="Pockets_marketing_children_image">
                                    <img src={children} alt="images" />
                                </div>
                                <div className="Pockets_marketing_childone_image">
                                    <img src={childone} alt="images" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="Pockets_marketing_childsmile_image">
                                    <img src={childsmile} alt="images" />
                                </div>
                                <div className="Pockets_marketing_about_content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                </div>
                                <div className="Pockets_marketing_about_vector_icon">
                                    <p>  <img src={vector} alt="images" />  Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                                <div className="Pockets_marketing_about_vector_icon">
                                    <p> <img src={vector} alt="images" /> Pellentesque elit ullamcorper dignissim</p>
                                </div>
                                <div className="Pockets_marketing_about_vector_icon">
                                    <p> <img src={vector} alt="images" /> Nibh mauris cursus mattis molestie a iaculis</p>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div>
                <div className="Pockets_marketing_container">
                    <Row className="Pockets_marketing_results">
                        <Col span={12}>
                            <div className="Pockets_marketing_results_title">
                                <h3>OUR RESULTS</h3>
                                <h2>Take a look at the big impact we have done</h2>
                            </div>
                            <div className="Pockets_marketing_results_icon">
                                <div className="Pockets_marketing_results_water">
                                    <div>
                                        <img src={water} alt="images" />
                                    </div>
                                    <div className="Pockets_marketing_results_achivements">
                                        <h4>500M</h4>
                                        <p>Liters of water</p>
                                    </div>

                                </div>
                                <div className="Pockets_marketing_results_water">
                                    <div className="Pockets_marketing_results_houses_img">
                                        <img src={houses} alt="images" />
                                    </div>
                                    <div className="Pockets_marketing_results_achivements">
                                        <h4>7000+</h4>
                                        <p>Houses built</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Pockets_marketing_results_icon">
                                <div className="Pockets_marketing_results_water">
                                    <div>
                                        <img src={delivered} alt="images" />
                                    </div>
                                    <div className="Pockets_marketing_results_achivements">
                                        <h4>10,000+</h4>
                                        <p>Toys delivered</p>
                                    </div>
                                </div>
                                <div className="Pockets_marketing_results_water">
                                    <div className="Pockets_marketing_results_houses_img">
                                        <img src={built} alt="images" />
                                    </div>
                                    <div className="Pockets_marketing_results_achivements">
                                        <h4>2000+</h4>
                                        <p>Schools built</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Pockets_home_playstore_icon">
                                <div>
                                    <img src={goggle} alt="images" />
                                </div>
                                <div className="Pockets_home_apple_icon">
                                    <img src={appstore} alt="images" />
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="Pockets_marketing_results_childrens_pic">
                                <img src={childrens} alt="images" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div>

                <div className="Pockets_marketing_video_content">
                    <div>
                        <h4>TAKE A LOOK AT OUR VIDEO</h4>
                        <h2>We have helped over 200 vulnerable communities worldwide</h2>
                    </div>
                    <div className="Pockets_video_playstore_icon">
                        <div>
                            <img src={goggle} alt="images" />
                        </div>
                        <div className="Pockets_video_apple_icon">
                            <img src={appstore} alt="images" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Pockets_marketing_container">
                <div className="Pockets_marketing_video_smallchild">
                    <div className="Pockets_marketing_video_smallchild_image">
                        <img src={smallchild} alt="images" />
                    </div>
                </div>
                <div className="Pockets_marketing_video_playbutton">
                    <img src={playbutton} alt="images" />
                </div>
            </div>

            <div className="Pockets_marketing_container">
                <div className="Pockets_marketing_goal">
                    <div>
                        <h4>The goal and mission behind</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                    </div>
                    <div>
                        <h4>How our charity got started</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                    </div>
                </div>
            </div>

            <hr className="Pockets_marketing_horizontal_goal" />

            <div className="Pockets_marketing_container">
                <div className="Pockets_marketing_help">
                    <h5>HOW WE HELP?</h5>
                    <h3>What are we doing to assist <br /> these communities?</h3>
                </div>

                <div>
                    <Row>
                        <Col span={8}>
                            <Card className="Pockets_marketing_help_card">
                                <div>
                                    <img src={house} alt="images" />
                                </div>
                                <div>
                                    <h4>House & shelter</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                </div>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card className="Pockets_marketing_help_card">
                                <div>
                                    <img src={house} alt="images" />
                                </div>
                                <div>
                                    <h4>Love & support</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                </div>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card className="Pockets_marketing_help_card">
                                <div>
                                    <img src={house} alt="images" />
                                </div>
                                <div>
                                    <h4>Food & groceries</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div className="Pockets_marketing_environmental_help">
                        <Row>
                            <Col span={8}>
                                <Card className="Pockets_marketing_help_card">
                                    <div>
                                        <img src={environ} alt="images" />
                                    </div>
                                    <div>
                                        <h4>Environmental help</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card className="Pockets_marketing_help_card">
                                    <div>
                                        <img src={house} alt="images" />
                                    </div>
                                    <div>
                                        <h4>Education</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card className="Pockets_marketing_help_card">
                                    <div>
                                        <img src={house} alt="images" />
                                    </div>
                                    <div>
                                        <h4>Health & insurance</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className="Pockets_marketing_container">
                <div className="Pockets_marketing_join">
                    <div>
                        <h4>Join us and let’s make a better <br /> world, today</h4>
                    </div>
                    <div className="Pockets_join_playstore_icon">
                        <div>
                            <img src={goggle} alt="images" />
                        </div>
                        <div className="Pockets_join_apple_icon">
                            <img src={appstore} alt="images" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Pockets_marketsing_aboutus">
                <div className="Pockets_marketing_container">
                    <div className="Pockets_marketing_our">
                        <Row>
                            <Col span={12}>
                                <div className="Pockets_marketing_african">
                                    <img src={african} alt="images" />
                                </div>
                                <div className="Pockets_marketing_dummy_text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <h5>Amara Onai</h5>
                                    <p>Citizen of South Africa</p>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="Pockets_marketing_our_results">
                                    <h4>OUR RESULTS</h4>
                                    <h3>See how we are making a difference</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                    <div className="Pockets_marketing_about_vector_icon">
                                        <p>  <img src={vector} alt="images" />  Excepteur sint occaecat cupidatat non proident</p>
                                    </div>
                                    <div className="Pockets_marketing_about_vector_icon">
                                        <p> <img src={vector} alt="images" /> Pellentesque elit ullamcorper dignissim</p>
                                    </div>
                                    <div className="Pockets_marketing_about_vector_icon">
                                        <p> <img src={vector} alt="images" /> Nibh mauris cursus mattis molestie a iaculis</p>
                                    </div>
                                    <div className="Pockets_marketing_our_results_button">
                                        <Button >About us</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


            <div className="Pockets_marketing_news">
                <h4>NEWS & RESOURCES</h4>
                <h2>Read our latest news</h2>
            </div>
            <div className="Pockets_marketing_container">
                <Row>
                    <Col span={12}>
                        <div className="Pockets_marketing_news_articles_picture">
                            <img src={articles} alt="images" />
                        </div>
                        <div className="Pockets_marketing_news_articles">
                            <div className="Pockets_marketing_news_articles_text">
                                <div>
                                    <h3>Articles</h3>
                                </div>
                                <div>
                                    <p>Jan 23, 2022</p>
                                </div>
                            </div>
                            <div>
                                <p>What to donate to a food bank and what to avoid ?</p>
                            </div>
                            <h6>Read more <img src={arrow} alt="images" /> </h6>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="Pockets_marketing_news_articles_picture">
                            <img src={resources} alt="images" />
                        </div>
                        <div className="Pockets_marketing_news_articles">
                            <div className="Pockets_marketing_news_articles_text">
                                <div>
                                    <h3>Resources</h3>
                                </div>
                                <div>
                                    <p>Jan 23, 2022</p>
                                </div>
                            </div>
                            <div>
                                <p>13 ways to give to charity without breaking your budget</p>
                            </div>
                            <h6>Read more <img src={arrow} alt="images" /> </h6>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="Pockets_marketing_read_button">
                <Button>Read more news</Button>
            </div>

            <div className="Pockets_marketing_container">
                <div className="Pockets_marketing_mobile_text">
                    <div className="Pockets_marketing_mobile_picture">
                        <img src={mobile} alt="images" />
                    </div>
                    <div className="Pockets_marketing_join_events">
                        <h3>Join our upcoming events for contribution</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        <div>
                            <img src={playstore} alt="images" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Pockets_marketing_customers">
                <h3>Our happy customers</h3>
            </div>

            <div className="Pockets_marketing_container">
                <Row>
                    <Col span={8}>
                        <div className="Pockets_marketing_michel">
                            <img src={michel} alt="images" />
                        </div>
                        <div className="Pockets_marketing_group">
                            <img src={group} alt="images" />
                        </div>
                        <div className="Pockets_marketing_michel_content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <h5>Michel</h5>
                            <h6>Lorem Ipsum is simply dummy text </h6>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className="Pockets_marketing_allison">
                            <img src={allison} alt="images" />
                        </div>
                        <div className="Pockets_marketing_group">
                            <img src={group} alt="images" />
                        </div>
                        <div className="Pockets_marketing_michel_content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <h5>Allison</h5>
                            <h6>Lorem Ipsum is simply dummy text </h6>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className="Pockets_marketing_danie">
                            <img src={danie} alt="images" />
                        </div>
                        <div className="Pockets_marketing_group">
                            <img src={group} alt="images" />
                        </div>
                        <div className="Pockets_marketing_michel_content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <h5>Daine</h5>
                            <h6>Lorem Ipsum is simply dummy text </h6>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="Pockets_marketing_footer">
                <div className="Pockets_marketing_container">
                    <Row>
                        <Col span={10}>
                            <div>
                                <h5> <img src={pocket} alt="images" />POCKET. </h5>
                            </div>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Pockets_marketing_footer_menu">
                                <h2>Menu</h2>
                                <h3>Home</h3>
                                <h4>About us</h4>
                                <h4>News & Articles</h4>
                                <h5>Contact us</h5>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="Pockets_marketing_footer_joinus">
                                <div className="Pockets_marketing_footer_joinus_roundpic">
                                    <img src={roundpic} alt="images" />
                                </div>
                                <div className="Pockets_marketing_footer_Joinus_content">
                                    <div>
                                        <h4>Join us and let’s make a better world, today</h4>
                                    </div>
                                    <div>
                                        <img src={goggle} alt="images" />
                                    </div>
                                    <div className="Pockets_marketing_footer_appstore">
                                        <img src={appstore} alt="images" />
                                    </div>
                                </div>
                                <div className="Pockets_markteing_footer_roundshape_pic">
                                    <img src={roundshape} alt="images" />
                                </div>


                            </div>
                        </Col>
                    </Row>
                </div>
            </div >


        </>
    )
}

export default Home