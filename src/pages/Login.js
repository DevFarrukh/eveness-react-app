import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LoginPageNavItems } from '../data/mockData';
import loginImage from '../assets/login-left.jpeg';
import  AppleIcon  from '../assets/apple.svg';
import  GoogleIcon  from '../assets/google.svg';
const Login = () => {
  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      {/* Navbar at the top */}
      <Navbar navItems={LoginPageNavItems}/>
      
      {/* Main container with max width */}
      <div className="max-w-[1446px] mx-auto px-4 lg:px-[32px]">
        <div className="min-h-[calc(100vh-80px)] lg:min-h-0 flex items-center lg:items-start pt-[124px] lg:pb-[40px] gap-0 lg:gap-[30px] xl:gap-[90px] justify-center lg:justify-start">
          {/* Left side - Image */}
          <div className="hidden lg:block">
            <div className="w-[500px] h-[600px] xl:w-[708px] xl:h-[822px]">
              <img 
                src={loginImage}        
                alt="Fashion" 
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="w-full lg:w-auto lg:pt-[60px] xl:pt-[105px] flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px] lg:max-w-none lg:w-[450px] xl:w-[514px] -mt-20 lg:mt-0">
              {/* Background container */}
              <div className="lg:w-full lg:h-[500px] xl:h-[611px] lg:bg-[#FFFFFF99] lg:rounded-[16px] lg:relative">
                {/* Inner container */}
                <div className="w-full lg:absolute lg:w-[380px] xl:w-[418px] lg:h-[460px] xl:h-[496px] lg:top-[40px] xl:top-[58px] lg:left-[35px] xl:left-[48px] flex flex-col gap-[46px]">
                  <h1 className="text-[26px] font-bold leading-[32px] text-center">
                    Log In to your account
                  </h1>
                  
                  <form className="flex flex-col gap-[46px]">
                    <div className="flex flex-col gap-6 items-center">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full xl:w-[320px] h-[42px] px-4 rounded-[8px] bg-[#FFFFFF75] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] focus:outline-none focus:border-[#22272A] text-[14px]"
                      />
                      
                      <div className="w-full xl:w-[320px]">
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full h-[42px] px-4 rounded-[8px] bg-[#FFFFFF75] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] focus:outline-none focus:border-[#22272A] text-[14px]"
                        />
                        <div className="flex justify-end mt-2">
                          <Link to="/forgot-password" className="text-[12px] text-[#797979]">
                            Forgot Password ?
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                      <button
                        type="submit"
                        className="w-full xl:w-[320px] h-[42px] bg-[#22272A] text-white rounded-[8px] font-medium text-[14px]"
                      >
                        Log in
                      </button>

                      <div className="text-center text-[12px] text-[#797979] mt-[24px]">
                        or continue with
                      </div>

                      <div className="flex gap-4 justify-center w-full xl:w-[320px]">
                        <button className="flex-1 xl:w-[252px] h-[50px] bg-[#FFFFFF5C] rounded-[8px] backdrop-blur-[36px] px-[44px] py-[13px] flex items-center gap-[16px]">
                          <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
                          <span className="text-[14px] text-[#22272A]">Log in with Google</span>
                        </button>
                        <button className="w-[51px] h-[50px] bg-[#FFFFFF5C] rounded-[8px] flex items-center justify-center shadow-[0px_0px_16px_0px_#00000004]">
                          <img src={AppleIcon} alt="Apple" className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="text-center text-[14px] text-[#797979]">
                        Don't have an account ? <Link to="/signup" className="text-[#22272A] font-medium">
                          Create Account
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
