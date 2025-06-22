import PolaroidImage from '../assets/PolaroidPhoto.webp'

const About = () => {
  return (
    <div className='w-full bg-white relative pt-20 pb-16'>
      {/* Top spacing to accommodate flowing cards */}
      <div className='h-4'></div>
      
      {/* About Section Content */}
      <div className='max-w-4/6 mx-auto px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-6 main-font'>
            <h2 className='text-5xl font-bold text-gray-800 leading-tight'>
              Looking after, since 1977.
              <span className='text-[#2d5a4f] block'></span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed alternate-font'>
                We’ve been looking after plants for over 40 years. But that ‘looking after’ spirit goes further. Customers, staff, suppliers, the environment around us, and the wider community – we care about them all and are committed to fair and sustainable practice.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed alternate-font'>
              From low-maintenance succulents perfect for beginners to statement plants that transform entire rooms, we provide expert guidance and premium quality plants with a 100% health guarantee.
            </p>
               <div className='flex my-5'>
                  <button 
                    className='uppercase alternate-font text-white border-3 border-[#00322d] py-4 px-8 text-primary rounded-full hover:bg-[#e3ebeace] transition-colors duration-300'
                    aria-label="Shop premium indoor plants collection"
                  >
                    OUR HISTORY
                  </button>
                </div>
        
          </div>
          
          {/* Right Content - Image or additional info */}
          <div className='relative'>
           <img src={PolaroidImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;