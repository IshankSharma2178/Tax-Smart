import React from 'react';
import backgroundImg from "../../assets/img/shape/35.png";
import { FooterLinks } from '../../data/FooterLinks';

function Footer() {
  return (
    <section className="bg-[#10182F]  mx-auto w-full">
      <div className="flex flex-wrap justify-between gap-[3.5rem] p-[60px]">
        <div className="footer-col">
            {/* {
                FooterLinks.

            } */}
          <h4 className="text-white text-[1.2rem] font-normal">Info</h4>
          <ul className="mt-5">
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">About Us</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Compressions</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Customers</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Service</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Collection</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-white text-[1.2rem] font-normal">Explore</h4>
          <ul className="mt-5">
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Free Designs</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Latest Designs</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Themes</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Popular Designs</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Art Skills</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">New Uploads</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-white text-[1.2rem] font-normal">Legal</h4>
          <ul className="mt-5">
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Customer Agreement</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Privacy Policy</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">GDPR</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Security</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Testimonials</a>
            </li>
            <li className="mb-[10px]">
              <a href="#" className="text-[#bfbfbf] hover:text-white">Media Kit</a>
            </li>
          </ul>
        </div>
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
