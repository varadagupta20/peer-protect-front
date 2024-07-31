import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ whyPeopleUseRef }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    "/peer-to-peer-trading-p2p-lending-investment-in-loan-deposit-agreement-tiny-people-invest-e-money-cryptocurrency-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
    "/peer-to-peer-trading-p2p-lending-tiny-people-enter-into-deposit-agreement-invest-e-money-investment-in-loan-cryptocurrency-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
    "/i5.webp",
    "/istockphoto-1370110078-612x612.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleRegisterClick = () => {
    navigate('/login');
  };

  const handleLearnMoreClick = () => {
    if (whyPeopleUseRef.current) {
      whyPeopleUseRef.current.scrollToSection();
    }
  };

  return (
    <div className='bg-[#ecf5fb] pt-20 mt-16 flex flex-wrap items-center justify-between p-6 w-full'>
      <div className='px-5 w-full md:w-3/5 mb-4 md:mb-0 p-4'>
        <h1 className='text-center leading-10 text-4xl font-bold mb-4 text-[#3d4fab]'>
          "Empower Your Coverage with Decentralized Insurance"
        </h1>
        <p className='text-left pt-6 mb-6 text-[#2d6a99]'>
          PeerProtect pools utilize blockchain technology to enable users to form and manage their own insurance groups, providing tailored coverage and lower premiums. By eliminating intermediaries and employing smart contracts, this system ensures transparent transactions and efficient claims processing. Members actively participate in decision-making, fostering a sense of ownership and satisfaction. This innovative approach transforms traditional insurance by enhancing control, reducing costs, and increasing transparency.
        </p>
        <div className='flex justify-center gap-4'>
          <button
            className="w-15 h-10 py-2 px-4 text-white bg-[#3d4fab] rounded-[20px] hover:bg-[#2d6a99] transition-all duration-300"
            onClick={handleRegisterClick}
          >
            Register Yourself
          </button>
          <button
            className="w-15 h-10 py-2 px-4 text-[#3d4fab] rounded-[20px] flex items-center justify-center gap-x-2 hover:bg-[#2d6a99] hover:text-white transition-all duration-300"
            onClick={handleLearnMoreClick}
          >
            Learn More
            <span>
              <img src="/arrow.png" className='w-7 h-auto' alt="Right Arrow" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full md:w-2/5 p-4" style={{ height: '400px' }}>
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slider Image ${index + 1}`}
              className={`absolute w-full h-full object-cover rounded-[4px] shadow-md transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-[#3d4fab]' : 'bg-gray-400'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;