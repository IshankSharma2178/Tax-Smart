import React from 'react';
import Shape from "../../../assets/img/shape/43.png";
import ServiceCard from './ServiceCard';
import image1 from "../../../assets/img/icon/s2.png";
import image2 from "../../../assets/img/icon/s3.png";
import image3 from "../../../assets/img/icon/s4.png";
import Button from '../../../ui/Button1';
import { useNavigate } from 'react-router';

function ServicesPage() {

    const navigate = useNavigate();

    return (
        <div className='bg-[#f3f7fd] relative min-h-[900px]'>

            {/* Background shape */}
            <div className='absolute z-0 -left-[16rem]'>
                <img src={Shape} alt="Background Shape" className='' />
            </div>

            {/* Main content */}
            <div className='relative z-10 max-w-[1260px] mx-auto py-[8rem] w-11/12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='w-full lg:w-[78%] flex flex-col justify-center gap-4'>
                        <p className='text-[1.75rem] lg:text-[2.75rem] font-bold'>
                            Uncover the Unique Features Designed Just for You
                        </p>
                        <div className='w-fit' onClick={() => navigate("/login")}>
                            <Button text={"Explore Now"} />
                        </div>
                    </div>

                    {/* Service Cards */}
                    <ServiceCard 
                        heading={"Tax Calculator"}
                        image={image1}
                        subHeading={"Calculate your payable tax with ease using our Tax Calculator. Get accurate results based on your salary, exemptions, and chosen tax regime."}
                        features={["Accurate tax calculation", "Easy-to-use interface", "Helps in tax planning"]}
                    />
                    <ServiceCard 
                        heading={"Tax Genie"}
                        image={image2}
                        subHeading={"Meet Tax Genie, your personal AI assistant for all finance-related queries. Get detailed explanations and expert advice on taxation topics."}
                        features={["AI-powered chatbot", "Personalized advice on taxation", "Expert guidance on finance"]}
                    />
                    <ServiceCard 
                        heading={"Modules"}
                        image={image3}
                        subHeading={"Our comprehensive modules cover everything you need to know about Indian taxation, from the basics to advanced topics. Learn at your own pace with our structured lessons and become a taxation expert."}
                        features={["Understand the basics of Indian taxation", "Learn about various tax-saving schemes", "Understand how to claim tax rebates"]}
                    />
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
