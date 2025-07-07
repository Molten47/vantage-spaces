import { Helmet } from 'react-helmet-async';
import Logo from '../assets/63d919c1aaf61dc3882a2464_VantageBrandMark_WHITE.svg';

const Navbar = () => {
  return (
    <>
      <Helmet>
        <title>Vantage Spaces</title>
        <meta name="description" content="Vantage Spaces - Premium workspace solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Helmet>

      <nav className='flex flex-row justify-between items-center w-full z-20 h-[10vh] text-white lg:px-8 px-4 lg:py-8 py-4 bg-transparent'>
        {/* Logo Section */}
        <div>
          <img 
            src={Logo} 
            className='lg:h-28 h-16' 
            alt="Vantage Spaces Logo" 
          />
        </div>
        
        {/* Brand Name - Hidden on mobile, centered on desktop */}
        <div className='lg:flex hidden items-center justify-center pr-24'>
          <h2 className='uppercase alternate-font text-4xl text-white mr-8 font-semibold'>
            <span className='text-[#ffd700]'>vantage</span> spaces
          </h2>
        </div>
        
        {/* Menu Icon */}
        <div>
          <span 
            className="material-symbols-outlined lg:text-[42px] text-[32px] cursor-pointer hover:text-[#ffd700] transition-colors duration-300" 
          >
            sort
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;