import React from 'react'
import { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";





 const Otp = () => {

  const [OTP, setOTP] = useState("");
  return (
    <>
    
    <>
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}  />
      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
    </>
    </>
  )
}
export default Otp;
