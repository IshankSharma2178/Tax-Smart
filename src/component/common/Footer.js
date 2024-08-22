import React from 'react';
import backgroundImg from "../../assets/img/shape/35.png";
import { FooterLinks } from '../../data/FooterLinks';
import logo from "../../assets/img/logo-invert-color-removebg-preview.png";
import SocialMediaButtons from "../../ui/SocialMediaButtons";
import { useNavigate } from 'react-router';
import Button3 from '../../ui/Button3';

function Footer() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#03112d] relative pt-6 mx-auto w-full">
      {/* Background Wave Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImg}
          alt="Wave background"
          className="w-full h-full object-cover"
          style={{ 
            width: '200%',  
            height: 'auto',
          }}
        />
      </div>


      <div className='flex flex-col max-w-[1260px] w-[98%] m-auto relative z-10'>

        <div className="flex flex-wrap justify-between gap-y-[3.5rem] py-[60px] px-6 md:px-8 md:py-[60px]">

          <div className="w-full md:max-w-[18rem] flex-col flex items-start">
            <div className='w-[12rem]  mb-10'>
              <img src={logo} alt="Logo" />
            </div>
            <div className='text-md text-richblack-50 tracking-wide leading-6'>
              Excellence decisively nay man per impression maximum contrasted remarkably is perfect point. uncommonly solicitude inhabiting projection.
            </div>
            <div className='-translate-y-5'>
              <SocialMediaButtons />
            </div>
          </div>

          {FooterLinks.map((singleFooter, index) => (
            <div key={index}>
              <h4 className="text-richblack-5 text-[1.2rem] font-normal">{singleFooter.title}</h4>
              <ul className="mt-5">
                {singleFooter.links.map((links, ind) => (
                  <li key={ind} className="mb-[10px] hover:cursor-pointer">
                    <div className="text-richblack-200 hover:translate-x-1 transition-all duration-150 hover:text-richblack-25">
                      {links.subLink}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-[1.2rem] font-normal">Newsletter</h4>
            <p className="mt-[20px] text-richblack-50 max-w-[300px]">
              Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
            </p>
            <form className="flex gap-2 justify-center items-center mt-5" action="#">
              <input
                type="text"
                placeholder="Your email"
                required
                className="h-[40px] rounded-lg bg-transparent w-full outline-none border border-[#7489C6] caret-white text-white pl-[10px] placeholder-[#ccc]"
              />
              <Button3 text={"Subscribe"}/>
            </form>
          </div>

        </div>

      </div>
      <div className='border-t py-6 m-auto border-richblack-500'>
        <div className='flex flex-col md:flex-row justify-between md:gap-0 gap-6 mx-auto max-w-[1260px] w-11/12 text-sm'>
          <div className='text-richblack-25 px-4 md:px-0 leading-6 md:text-none text-center '>
            © Copyright 2024. All Rights Reserved by <b onClick={() => navigate("/")} className='hover:cursor-pointer'>TaxSmart</b>
          </div>
          <div className='flex flex-row justify-center gap-6 md:gap-0 md:justify-between text-richblack-5  text-center w-[100%] md:w-[17%]'>
            <p className='hover:cursor-pointer'>Terms</p>
            <p className='hover:cursor-pointer'>Privacy</p>
            <p className='hover:cursor-pointer'>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
