
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Leaf, ArrowRight } from 'lucide-react';
import Logo from '../assets/63d919c1aaf61dc3882a2464_VantageBrandMark_WHITE.svg';

const Footer = () => {
  return (
    <footer className='w-full bg-primary text-white relative overflow-hidden basic-font'>
      {/* Decorative leaf elements */}
      <div className='absolute top-0 left-0 w-32 h-32 opacity-10'>
        <Leaf className='w-full h-full transform rotate-45' />
      </div>
      <div className='absolute bottom-0 right-0 w-24 h-24 opacity-10'>
        <Leaf className='w-full h-full transform -rotate-12' />
      </div>
      
      <div className='max-w-5/6 mx-auto px-8 py-16'>
        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <img src={Logo} style={{height:'34px'}} alt="" />
              <h3 className='text-2xl font-bold uppercase alternate-font'>Vantage <span className='text-[#ffd700]'>Spaces</span></h3>
            </div>
            <p className='text-gray-300 leading-relaxed'>
              Looking after plants and people since 1977. Your trusted partner for biophilic design and premium plant care.
            </p>
            <div className='flex space-x-4'>
              <a href="#" className='text-gray-300 hover:text-green-400 transition-colors duration-300'>
                <Instagram className='w-5 h-5' />
              </a>
              <a href="#" className='text-gray-300 hover:text-green-400 transition-colors duration-300'>
                <Facebook className='w-5 h-5' />
              </a>
              <a href="#" className='text-gray-300 hover:text-green-400 transition-colors duration-300'>
                <Twitter className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-green-400'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Gallery</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Case Studies</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Our History</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Plant Care Guide</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Consultation</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-green-400'>Services</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Biophilic Design</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Plant Installation</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Maintenance Plans</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Corporate Solutions</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>Plant Rental</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-green-400'>Contact Us</h4>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-green-400 mt-0.5' />
                <div>
                  <p className='text-gray-300'>Belfast Showroom & HQ</p>
                  <p className='text-gray-400 text-sm'>123 Green Street, Belfast, BT1 2AB</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-green-400' />
                <p className='text-gray-300'>+44 (0)28 9032 1234</p>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='w-5 h-5 text-green-400' />
                <p className='text-gray-300'>hello@vantagespaces.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='border-t border-gray-700 pt-8 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
            <div>
              <h4 className='text-xl font-semibold mb-2'>Stay Connected</h4>
              <p className='text-gray-300'>Get plant care tips, design inspiration, and exclusive offers delivered to your inbox.</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <input 
                type="email" 
                placeholder="Enter your email"
                className='flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300'
              />
              <button className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2'>
                Subscribe
                <ArrowRight className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>
              © 2025 PlantCare. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className='flex items-center space-x-4 text-gray-400 text-sm'>
              <span>Sustainable • Ethical • Local</span>
              <div className='flex items-center space-x-1'>
                <Leaf className='w-4 h-4 text-green-400' />
                <span>Carbon Neutral Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;