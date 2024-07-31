import React from 'react';
import appStore from '/appstore.svg.png'; // Replace with the actual path to the App Store image
import playStore from '/en_badge_web_generic-removebg-preview.png'; // Replace with the actual path to the Play Store image

const Footer = () => {
  return (
    <footer className="bg-[#ecf5fb] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-6 lg:space-y-0 lg:space-x-16">
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold text-[#2d6a99]">Download Our App</h2>
          <div className="flex space-x-4 mt-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="Download on the App Store" className="object-contain h-14" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src={playStore} alt="Get it on Google Play" className="object-contain h-14" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold text-[#2d6a99]">Contact Us</h2>
          <p className="mt-4 text-black">
            <span className="font-semibold text-[#3d4fab]">Email:</span> support@example.com
          </p>
          <p className="mt-2 text-black">
            <span className="font-semibold text-[#3d4fab]">Phone:</span> +1 (123) 456-7890
          </p>
          <p className="mt-4 text-[#3d4fab]">
            We are here to help you with any questions or concerns you may have.<br /> Reach out to our support team via email or phone.
          </p>
        </div>
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold text-[#2d6a99]">More Information</h2>
          <p className="mt-4">
            <a href="/privacy-policy" className="text-[#3d4fab] hover:underline">Privacy Policy</a>
          </p>
          <p className="mt-2">
            <a href="/terms-of-service" className="text-[#3d4fab] hover:underline">Terms of Service</a>
          </p>
          <p className="mt-2">
            <a href="/about-us" className="text-[#3d4fab] hover:underline">About Us</a>
          </p>
        </div>
      </div>
      <div className="border-t border-black mt-8 pt-4 text-center text-sm text-black">
        &copy; 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
