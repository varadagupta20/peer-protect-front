import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Dashboard', id: 'dashboard', path: '/dashboard' },
  { name: 'FAQs', id: 'faqs', path: '/#faqs' },
  { name: 'Join/Create Pool', id: 'register', path: '/register' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (path === '/#faqs') {
      navigate('/');
      setTimeout(() => {
        const faqElement = document.getElementById('faqs');
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full shadow-md z-50 flex items-center justify-between px-5 py-4 lg:px-20 border-b-4 border-[#2d6a99] bg-white">
      <div className="flex items-center gap-x-3">
        <img
          src="/logo.png"
          alt="LOGO"
          className="w-15 h-14 cursor-pointer" // Keep logo size consistent
          onClick={handleLogoClick}
        />
        <h1
          className="font-bold text-2xl lg:text-4xl text-[#3d4fab] cursor-pointer"
          onClick={handleLogoClick}
        >
          PeerProtect
        </h1>
      </div>

      <div className="flex items-center gap-x-5 relative lg:hidden">
        <img
          src="/menuicon.png"
          alt="menu"
          className="w-7 h-auto cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <img
          src="/usericon.jpg"
          alt="user"
          className="w-7 h-auto cursor-pointer"
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        />
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-20 lg:hidden">
          <div className="py-2">
            {navLinks.map((item, index) => (
              <a
                href="#"
                className="block px-4 py-2 text-[#3d4fab] font-medium hover:bg-[#2d6a99] hover:text-white transition-colors duration-300"
                key={index}
                onClick={() => handleNavClick(item.path)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {userMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-20 lg:hidden">
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-[#3d4fab] font-medium hover:bg-[#2d6a99] hover:text-white transition-colors duration-300"
              onClick={() => handleNavClick('/login')}
            >
              Sign-In
            </a>
          </div>
        </div>
      )}

      <div className="hidden lg:flex gap-x-8">
        {navLinks.map((item, index) => (
          <a
            href="#"
            className="relative inline-block py-2 px-4 text-[#3d4fab] font-medium rounded-full overflow-hidden hover:scale-110 hover:bg-[#2d6a99] transition-all duration-300 hover:text-white"
            key={index}
            onClick={() => handleNavClick(item.path)}
          >
            <span className="absolute inset-0 rounded-full transform translate-x-full transition-transform duration-300 hover:translate-x-0"></span>
            <span className="relative z-10">{item.name}</span>
          </a>
        ))}
        <a
          href="#"
          className="relative inline-block py-2 px-4 text-[#3d4fab] font-medium rounded-full overflow-hidden hover:scale-110 hover:bg-[#2d6a99] transition-all duration-300 hover:text-white"
          onClick={() => handleNavClick('/login')}
        >
          <span className="absolute inset-0 rounded-full transform translate-x-full transition-transform duration-300 hover:translate-x-0"></span>
          <span className="relative z-10">Sign-In</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
