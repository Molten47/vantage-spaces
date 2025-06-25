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

      {/* Main Hero Section - Reduced height to make room for flowing cards */}
      <div className='w-full flex flex-col z-10 h-[90vh] relative bg-primary overflow-hidden'>
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
        
        {/* Split overlay container */}
        <div className='absolute inset-0 z-10 flex'>
          {/* Left 50% - transparent (video visible) */}
          <div className='w-[50%] h-full '>
            {/* Content for the overlay section goes here */}
            <div className='p-8 h-full flex flex-col justify-center'>
              <div className='p-26 w-3/4'>
                <p className='text-white text-4xl font-light basic-font mb-4 tracking-wide'>
                  Use the power of planting to
                </p>
                <h1 className='text-white text-8xl main-font font-bold'>
                  attract, engage and <span className='text-[#ffd700]'>inspire.</span>
                </h1>
              </div>
            </div>
          </div>
          
          {/* Right side with - overlay no opacity */}
          <div className='w-[50%] basic-font h-full flex flex-row items-center justify-center bg-primary relative'>
            {/* Content for the overlay section goes here */}
            <div className='pl-8 h-full flex flex-col justify-center z-20'>
              <div className='p-26 w-4/6'>
                <h2 className='text-white text-3xl font-bold mb-4 tracking-wide'>
                  Planting the places where great teams thrive.
                </h2>
                <p className='text-white/80'>
               We all know that indoor planting enhances a space. But we believe it can do more. Used skilfully, it supports the creation of workspaces of the future.
                </p>
                <div className='flex my-5'>
                  <button 
                    className='uppercase text-white border-3 border-white py-4 px-8 rounded-full hover:bg-[#3f615dce] transition-colors duration-300'
                    aria-label="Shop premium indoor plants collection"
                  >
                    Shop Plants Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Plant image positioned to overflow to the right */}
            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10'>
              <img 
                src={ReviewPlant} 
                style={{height:'36rem', width:'36rem'}} 
                alt="Premium indoor houseplant - perfect for plant lovers and home decoration"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flash Cards Section - Positioned to flow into About section */}
      <div className='relative z-30 main-font -mt-40'>
        <div className='grid grid-cols-4 gap-6 px-8 max-w-[90rem] z-40 mx-auto'>
          {flashCards.map((flash, index) => (
            <div key={flash.id} className='flip-card h-80 w-full perspective-1000'>
              <div 
                className='flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180'
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
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
                
                {/* Back of card */}
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
      `}</style>
    </>
  );
};

export default Hero;