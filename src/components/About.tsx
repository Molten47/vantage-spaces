import PolaroidImage from '../assets/PolaroidPhoto.webp'
import HangingLeaf from '../assets/Hanging Leaf.webp'

const About = () => {
  return (
    <div className='w-full bg-white relative pt-8 sm:pt-12 md:pt-17 pb-8 sm:pb-12 md:pb-16'>
      {/* Top spacing to accommodate flowing cards */}
      <div className='flex flex-row justify-end items-end h-6 sm:h-8 md:h-10'>
        {/*rotating test at the end overlappnig on last card on the right and below it */}
        
      </div>
      
      {/* Hanging leaf positioned at leftmost edge - hidden on mobile */}
      <div className='absolute left-0 top-20 sm:top-24 md:top-32 z-10 hidden sm:block'>
        <img 
          src={HangingLeaf} 
          alt="" 
          className='-translate-x-1/2 w-16 sm:w-20 md:w-auto'
        />
      </div>
      
      {/* About Section Content */}
      <div className='max-w-4/6 mx-auto px-4 sm:px-6 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-4 sm:space-y-6 main-font'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
              Looking after, <span className='underline'></span>since 1977.
              <span className='text-[#2d5a4f] block'></span>
            </h2>
            <p className='text-base sm:text-lg text-gray-600 leading-relaxed alternate-font'>
                We've been looking after plants for over 40 years. But that 'looking after' spirit goes further. Customers, staff, suppliers, the environment around us, and the wider community – we care about them all and are committed to fair and sustainable practice.
            </p>
            <p className='text-base sm:text-lg text-gray-600 leading-relaxed alternate-font'>
              From low-maintenance succulents perfect for beginners to statement plants that transform entire rooms, we provide expert guidance and premium quality plants with a 100% health guarantee.
            </p>
               <div className='flex my-4 sm:my-5'>
                  <button 
                    className='uppercase alternate-font text-white border-3 border-[#00322d] py-3 sm:py-4 px-6 sm:px-8 text-primary rounded-full hover:bg-[#e3ebeace] transition-colors duration-300 text-sm sm:text-base'
                    aria-label="Shop premium indoor plants collection"
                  >
                    OUR HISTORY
                  </button>
                </div>
        
          </div>
          
          {/* Right Content - Image or additional info */}
          <div className='relative mt-8 lg:mt-0'>
           <img src={PolaroidImage} 
           aria-label='Old Polaroid Photo world'
           loading='lazy'
           className='w-full h-auto max-w-md mx-auto lg:max-w-none'
           alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;