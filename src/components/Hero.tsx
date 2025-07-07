import { Helmet } from 'react-helmet-async';
import BackVideo from '../assets/64b7ad3f85627ca028e3cf80_VantageHomepageVideoWeb (1)-transcode.mp4'
import Navbar from './Navbar'
import ReviewPlant from '../assets/Review plant.webp'
import { flashCards } from '../data/flashcards';

const Hero = () => {
 

  return (
    <>
      <Helmet>
        <title>Premium Indoor Plants for Sale | Transform Your Space with Living Beauty</title>
        <meta name="title" content="Premium Indoor Plants for Sale | Transform Your Space with Living Beauty" />
        <meta name="description" content="Discover our curated collection of premium indoor plants, houseplants, and office plants. Expert plant care advice, fast shipping, and 100% healthy plant guarantee. Perfect for plant lovers, beginners, and workspace enhancement." />
        <meta name="keywords" content="indoor plants for sale, houseplants, office plants, plant lovers, buy plants online, premium plants, plant care, workspace plants, air purifying plants, low maintenance plants, plant delivery" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourplantstore.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourplantstore.com/" />
        <meta property="og:title" content="Premium Indoor Plants for Sale | Transform Your Space with Living Beauty" />
        <meta property="og:description" content="Curated collection of premium indoor plants for plant lovers. Expert care advice, healthy plant guarantee, and fast delivery to transform your home or office space." />
        <meta property="og:image" content="https://yourplantstore.com/og-plants-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="PlantStore - Premium Indoor Plants" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourplantstore.com/" />
        <meta property="twitter:title" content="Premium Indoor Plants for Sale | Transform Your Space" />
        <meta property="twitter:description" content="Curated collection of premium indoor plants for plant lovers. Expert care advice and healthy plant guarantee." />
        <meta property="twitter:image" content="https://yourplantstore.com/twitter-plants-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="author" content="PlantStore" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "PlantStore - Premium Indoor Plants",
              "description": "Premium indoor plants and houseplants for sale with expert care advice and healthy plant guarantee",
              "url": "https://yourplantstore.com",
              "telephone": "+1-555-PLANTS",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Green Street",
                "addressLocality": "Plant City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "priceRange": "$",
              "servesCuisine": "Plants",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Indoor Plants Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Premium Indoor Plants",
                      "description": "Curated collection of healthy indoor plants for homes and offices"
                    }
                  }
                ]
              }
            }
          `}
        </script>
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "ProductGroup",
              "name": "Premium Indoor Plants Collection",
              "description": "Curated selection of premium indoor plants perfect for plant lovers, beginners, and workspace enhancement",
              "url": "https://yourplantstore.com",
              "brand": {
                "@type": "Brand",
                "name": "PlantStore"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "15.99",
                "highPrice": "299.99",
                "offerCount": "200+"
              },
              "hasVariant": [
                {
                  "@type": "Product",
                  "name": "Office Plants",
                  "description": "Low-maintenance plants perfect for office environments"
                },
                {
                  "@type": "Product", 
                  "name": "Air Purifying Plants",
                  "description": "Plants that naturally clean and purify indoor air"
                },
                {
                  "@type": "Product",
                  "name": "Beginner Houseplants",
                  "description": "Easy-care plants perfect for new plant parents"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Main Hero Section - Full screen on mobile */}
      <div className='w-full flex flex-col z-10 lg:h-[90vh] h-screen relative bg-primary overflow-hidden'>
        {/* Background video section */}
        <div className="vintagebackvideo absolute w-full h-full inset-0 z-0">
          <video 
            loop
            muted
            autoPlay
            playsInline
            className='w-full h-full object-cover bg-no-repeat opacity-55'
            aria-label="Background video showcasing beautiful indoor plants in modern spaces"
          >
            <source src={BackVideo} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English captions" />
          </video>
        </div>
        <Navbar/>
        
        {/* Split overlay container - Full screen on mobile */}
        <div className='absolute inset-0 z-10 flex lg:flex-row flex-col'>
          {/* Left section - Text content */}
          <div className='lg:w-[50%] w-full lg:h-full h-full'>
            {/* Content for the overlay section goes here */}
            <div className='p-4 lg:p-8 h-full flex flex-col justify-center'>
              <div className='lg:p-26 lg:w-3/4 w-full'>
                <p className='text-white lg:text-4xl text-2xl font-light basic-font mb-4 tracking-wide'>
                  Use the power of planting to
                </p>
                <h1 className='text-white lg:text-8xl text-4xl main-font font-bold'>
                  attract, engage and <span className='text-[#ffd700]'>inspire.</span>
                </h1>
                
                {/* Mobile-only content from right section */}
                <div className='lg:hidden mt-8'>
                  <h2 className='text-white text-xl font-bold mb-4 tracking-wide'>
                    Planting the places where great teams thrive.
                  </h2>
                  <p className='text-white/80 text-sm mb-6'>
                    We all know that indoor planting enhances a space. But we believe it can do more. Used skilfully, it supports the creation of workspaces of the future.
                  </p>
                  <div className='flex'>
                    <button 
                      className='uppercase text-white border-3 border-white py-3 px-6 rounded-full hover:bg-[#3f615dce] transition-colors duration-300 text-sm'
                      aria-label="Shop premium indoor plants collection"
                    >
                      Shop Plants Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right section - Content and plant image - Hidden on mobile */}
          <div className='lg:w-[50%] w-full basic-font lg:h-full h-1/2 lg:flex hidden flex-row items-center justify-center bg-primary relative'>
            {/* Content for the overlay section goes here */}
            <div className='lg:pl-8 pl-4 h-full flex flex-col justify-center z-20'>
              <div className='lg:p-26 lg:w-4/6 w-full'>
                <h2 className='text-white lg:text-3xl text-xl font-bold mb-4 tracking-wide'>
                  Planting the places where great teams thrive.
                </h2>
                <p className='text-white/80 lg:text-base text-sm'>
               We all know that indoor planting enhances a space. But we believe it can do more. Used skilfully, it supports the creation of workspaces of the future.
                </p>
                <div className='flex my-5'>
                  <button 
                    className='uppercase text-white border-3 border-white lg:py-4 lg:px-8 py-3 px-6 rounded-full hover:bg-[#3f615dce] transition-colors duration-300 lg:text-base text-sm'
                    aria-label="Shop premium indoor plants collection"
                  >
                    Shop Plants Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Plant image positioned to overflow to the right - Desktop only */}
            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10'>
              <img 
                src={ReviewPlant} 
                style={{height:'36rem', width:'36rem'}} 
                alt="Premium indoor houseplant - perfect for plant lovers and home decoration"
                loading="lazy"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flash Cards - More space on mobile */}
      <div className='relative z-30 main-font lg:-mt-40 mt-8'>
        {/* Desktop Grid (lg and up) */}
        <div className='hidden lg:grid grid-cols-4 gap-6 px-8 max-w-[90rem] z-40 mx-auto'>
          {flashCards.map((flash, index) => (
            <div key={flash.id} className='flip-card h-80 w-full perspective-1000'>
              <div 
                className='flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180'
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card before flip */}
                <div 
                  className='flip-card-front absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl'
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  <img 
                   loading='lazy'
                    src={flash.image} 
                    alt={flash.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute flex flex-col p-3   inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                     <h2 className='text-white text-5xl font-bold'>{flash.head}</h2>
                  </div>
                </div>
                
                {/* Back of the card when flipped*/}
                <div 
                  className='flip-card-back absolute w-full h-full backface-hidden rounded-2xl shadow-2xl flex flex-col justify-center items-center p-6 text-center'
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: index === 0 ? '#ffffff' : '#ffffff'
                  }}
                >
                  <h3 className={`text-4xl font-bold mb-4 ${index === 0 ? 'text-gray-800' : 'text-primary'}`}>
                    {flash.title}
                  </h3>
                  <p className={`text-xl mb-6 leading-relaxed ${index === 0 ? 'text-gray-600' : 'text-primary'}`}>
                    {flash.paragraph}
                  </p>
                  <button 
                    className={`
                      px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 uppercase
                      ${index === 0 
                        ? 'bg-[#ffd700] text-gray-800 hover:bg-yellow-500' 
                        : 'border-2 border-[#00322d] text-primary hover:bg-[#ffd700] hover:text-green-800'
                      }
                    `}
                    aria-label={`Discover ${flash.title}`}
                  >
                    {flash.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll with more space */}
        <div className='lg:hidden'>
          <div className='flex overflow-x-auto gap-6 px-4 pb-6 scrollbar-hide snap-x snap-mandatory'>
            {flashCards.map((flash, index) => (
              <div key={flash.id} className='flex-shrink-0 w-80 h-96 snap-start'>
                <div className='flip-card h-full w-full perspective-1000'>
                  <div 
                    className='flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180'
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of card before flip */}
                    <div 
                      className='flip-card-front absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl'
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)'
                      }}
                    >
                      <img 
                       loading='lazy'
                        src={flash.image} 
                        alt={flash.title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute flex flex-col p-4 inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                         <h2 className='text-white text-4xl font-bold'>{flash.head}</h2>
                      </div>
                    </div>
                    
                    {/* Back of the card when flipped*/}
                    <div 
                      className='flip-card-back absolute w-full h-full backface-hidden rounded-2xl shadow-2xl flex flex-col justify-center items-center p-6 text-center'
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: index === 0 ? '#ffffff' : '#ffffff'
                      }}
                    >
                      <h3 className={`text-3xl font-bold mb-4 ${index === 0 ? 'text-gray-800' : 'text-primary'}`}>
                        {flash.title}
                      </h3>
                      <p className={`text-base mb-6 leading-relaxed ${index === 0 ? 'text-gray-600' : 'text-primary'}`}>
                        {flash.paragraph}
                      </p>
                      <button 
                        className={`
                          px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 uppercase
                          ${index === 0 
                            ? 'bg-[#ffd700] text-gray-800 hover:bg-yellow-500' 
                            : 'border-2 border-[#00322d] text-primary hover:bg-[#ffd700] hover:text-green-800'
                          }
                        `}
                        aria-label={`Discover ${flash.title}`}
                      >
                        {flash.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .flip-card-inner:hover {
          transform: rotateY(180deg);
        }

        /* Hide scrollbar for mobile cards */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Smooth scrolling for mobile */
        .scrollbar-hide {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Hero;