import React from 'react';
import backgroundImg from "../../assets/img/shape/35.png";
import { FooterLinks } from '../../data/FooterLinks';
import logo from "../../assets/img/logo.png"
import SocialMediaButtons from "../../ui/SocialMediaButtons"

function Footer() {
  return (
    <section className="bg-[#10182F]  mx-auto w-full">
      <div className="flex flex-wrap justify-between gap-y-[3.5rem] py-[60px] px-6 md:p-[60px]">

        <div className="footer-col max-w-[14rem]">
            <div className=' w-[12rem]' >
                <img src={logo} />
            </div>
            <div className='text-richblack-25 w-'>
            Excellence decisively nay man per impression maximum contrasted remarkably is perfect point. uncommonly solicitude inhabiting projection.
            </div>
            <div className='-translate-y-5'>
              <SocialMediaButtons/>
            </div>
        </div>
        
            {
                FooterLinks.map((singleFooter,index)=>(
                    <div className="footer-col">
                        <h4 key={index} className="text-richblack-5 text-[1.2rem] font-normal">{singleFooter.title}</h4>
                        <ul className="mt-5">
                            {
                                singleFooter.links.map((links,ind)=>(
                                    <li className="mb-[10px] hover:cursor-pointer">
                                        <div className="text-richblack-200 hover:translate-x-1 transition-all duration-150 hover:text-richblack-25">{links.subLink}</div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))

            }
          
        <div className="footer-col">
          <h4 className="text-white text-[1.2rem] font-normal">Newsletter</h4>
          <p className="mt-[20px] text-[#bfbfbf] max-w-[300px]">
            Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
          </p>
          <form className="flex gap-2 mt-5" action="#">
            <input
              type="text"
              placeholder="Your email"
              required
              className="h-[40px] rounded-lg bg-transparent w-full outline-none border border-[#7489C6] caret-white text-white pl-[10px] placeholder-[#ccc]"
            />
            <button
              type="submit"
              className="bg-white outline-none border-none px-4 py-2 rounded-lg cursor-pointer font-medium transition duration-200 ease-in-out hover:bg-[#cecccc]"
            >
              SUBSCRIBE
            </button>
          </form>
          <div className="flex gap-[30px] mt-[30px] cursor-pointer">
            <i className="fa-brands fa-facebook-f text-[#afb6c7] hover:text-white"></i>
            <i className="fa-brands fa-twitter text-[#afb6c7] hover:text-white"></i>
            <i className="fa-brands fa-linkedin text-[#afb6c7] hover:text-white"></i>
            <i className="fa-brands fa-github text-[#afb6c7] hover:text-white"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
