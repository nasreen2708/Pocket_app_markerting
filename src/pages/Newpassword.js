import React from 'react'
import "../assets/SCSS/Login.scss";
import { Col, Row, Form, Input, ConfigProvider } from "antd";
import Image from "../assets/images/pocket.png";










 const Newpassword = () => {
  return (
    <>
    
    
    <div className="pockets_main_container">
        <Row>
          <div>
            <Col span={8}>
              <img src={Image} alt="Image" className="pockets_login_image" />
            </Col>
          </div>

     
            <Col span={8}className="pockets_main_container_right">


            <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#252947",
          },
        }}
      >
              <Form>
                <h1 className="pockets_login_heading">Enter New Password</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <h4 className="pockets_password_">New Password</h4>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      min: 8,
                      message: "Password must be minimum 8 characters.",
                    },
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="enter the password"
                    className="pockets_password"
                  />
                </Form.Item>
                <h4 className="pockets_password_">Confirm New Password</h4>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      min: 8,
                      message: "Password must be minimum 8 characters.",
                    },
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="enter the password"
                    className="pockets_password"
                  />
                </Form.Item>
              
                <button className="pocket_login_button">Done</button>
              </Form>
              </ConfigProvider>
            </Col>
       
        </Row>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
export default Newpassword;