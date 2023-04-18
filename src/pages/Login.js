import React, { useState } from "react";
import "../assets/SCSS/Login.scss";
import { Col, Row, Form, Input, ConfigProvider } from "antd";
import Image from "../assets/images/pocket.png";
import { Container } from "reactstrap";
import OTPInput, { ResendOTP } from "otp-input-react";

const Login = () => {
  const [steps, setsteps] = useState("STEP0");
  const [OTP, setOTP] = useState("");
  return (
    <>
      <div className="pockets_body_color">
        <Container>
          <Row className="pockets_main_container">
            <div>
              <Col span={12}>
                <img src={Image} alt="Image" className="pockets_login_image" />
              </Col>
            </div>
            <div className="pockets_right_container">
              <Col span={12}>
                <div>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#252947",
                      },
                    }}
                  >
                    {steps === "STEP0" ? (
                      <>
                        <Form>
                          <h1 className="pockets_login_heading">Log In</h1>
                          <div>
                            <p className="pockets_hints">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                          <h4 className="pocktes_email_text">Email ID</h4>
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
                          <h4 className="pockets_password_">Password</h4>
                          <Form.Item
                            className="pockets_pass_hints"
                            name="password"
                            rules={[
                              {
                                min: 8,
                                message:
                                  "Password must be minimum 8 characters.",
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
                          <p
                            className="pockets_forgot_password"
                            onClick={() => setsteps("STEP1")}
                          >
                            Forgot Password ?
                          </p>
                          <button className="pocket_login_button">
                            Log In
                          </button>
                        </Form>
                      </>
                    ) : steps === "STEP1" ? (
                      <>
                        <Form>
                          <h1 className="pockets_login_heading">
                            Forgot Password ?
                          </h1>
                          <p className="pockets_hints">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                          <h4 className="pocktes_email_text">
                            Enter registered email Id
                          </h4>
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

                          <button
                            className="pocket_login_button"
                            onClick={() => setsteps("STEP2")}
                          >
                            Send OTP
                          </button>
                        </Form>
                      </>
                    ) : steps === "STEP2" ? (
                      <>
                        <Form>
                          <h1 className="pockets_login_heading">
                            Check Your Email
                          </h1>
                          <p className="pockets_hints">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                          <h4 className="pocktes_email_text">Enter OTP</h4>
                          <Form.Item >
                            <div>
                             
                              <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                        
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                                className="pockets_otp_box" 
                               
                            
                              />
                   
                            </div>
                          </Form.Item>

                          <button
                            className="pocket_login_button"
                            onClick={() => setsteps("STEP3")}
                          >
                            Verify
                          </button>
                        </Form>
                      </>
                    ) : steps === "STEP3" ? (
                      <>
                        <Form>
                          <h1 className="pockets_login_heading">
                            Enter New Password
                          </h1>
                          <p className="pockets_hints">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>

                          <h4 className="pockets_password_">New Password</h4>
                          <Form.Item
                            className="pockets_pass_hints"
                            name="password"
                            rules={[
                              {
                                min: 8,
                                message:
                                  "Password must be minimum 8 characters.",
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
                          <h4 className="pockets_password_">
                            Confirm New Password
                          </h4>
                          <Form>
                            <Form.Item
                              className="pockets_pass_hints"
                              name="password"
                              rules={[
                                {
                                  min: 8,
                                  message:
                                    "Password must be minimum 8 characters.",
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
                          </Form>

                          <button className="pocket_login_button">Done</button>
                        </Form>
                      </>
                    ) : (
                      <></>
                    )}
                  </ConfigProvider>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Login;
