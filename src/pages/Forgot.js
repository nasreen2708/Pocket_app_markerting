import React from 'react'

import "../assets/SCSS/Login.scss";
import { Col, Row, Form, Input, ConfigProvider } from "antd";
import Image from "../assets/images/pocket.png";







 const Forgot = () => {
  return (
    <>
      <div className="pockets_main_container">
        <Row>
          <div>
            <Col span={12}>
              <img src={Image} alt="Image" className="pockets_login_image" />
            </Col>
          </div>

     
            <Col span={12}className="pockets_main_container_right">


            <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#252947",
          },
        }}
      >
              <Form>
                <h1 className="pockets_login_heading">Forgot Password ?</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <h4 className="pocktes_email_text">Enter registered email Id</h4>
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
                    className="pockets_email_verification"
                  />
                </Form.Item>
                
                <button className="pocket_login_button">Log In</button>
              </Form>
              </ConfigProvider>
            </Col>
       
        </Row>
      </div>
   
    </>
  )
}
export default Forgot;
