import { useState, useEffect } from 'react'
import TopImage from '../assets/adele-erolsky.jpg'
import BottomImage from '../assets/robin-strahl-.jpg'
import CubeImage from '../assets/cube.png'
import SponsImage from '../assets/matterport.webp'
import { ArrowRight } from 'lucide-react'
import { customerReviews } from '../data/review'


const Gallery = () => {
    const [currentReview, setCurrentReview] = useState(0)
    
    const topBackImage = {
        backgroundImage: `url(${TopImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    
    const bottomBackImage = {
        backgroundImage: `url(${BottomImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % customerReviews.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='min-h-screen flex flex-col bg-primary'>
            {/* Top Slide with image*/}
            <div className='flex-1 min-h-[33vh] lg:min-h-[40vh] flex flex-col lg:flex-row relative justify-between items-center p-4 sm:p-6 lg:p-8' style={topBackImage}>
                {/* Overlay for opacity effect */}
                <div className='absolute inset-0 bg-primary opacity-60'></div>
                
                {/* Yellow line - hidden on mobile */}
                <div className='hidden lg:flex flex-col w-[15%]'>
                    <div className='w-70 h-1.5 bg-yellow z-10'></div>
                </div>
                
                {/* Main content */}
                <div className='flex flex-col text-white w-full lg:w-[55%] z-10 text-center lg:text-left'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='main-font text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-4 lg:mb-0'>Get Inspired.</h2>
                        <p className='alternate-font text-base sm:text-lg lg:text-[1.2rem] mt-2 lg:mt-0'>Take a look at the latest creations our biophilic designers and curators have pulled together for our clients.</p>
                    </div>
                </div>
                
                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 w-full lg:w-[30%] basic-font text-white z-10 mt-6 lg:mt-0'>
                    <button 
                        className='uppercase text-primary border-3 border-white py-3 sm:py-4 lg:py-6 px-6 sm:px-8 rounded-full bg-white hover:bg-[#c9d4d3ce] transition-colors duration-300 text-sm sm:text-base'
                        aria-label="View the gallery"
                    >
                        View the gallery
                    </button>
                    <button 
                        className='uppercase text-white border-3 border-white py-3 sm:py-4 lg:py-6 px-6 sm:px-8 rounded-full hover:bg-[#c9d4d3ce] hover:text-[#00322d] transition-colors duration-300 text-sm sm:text-base'
                        aria-label="View case studies"
                    >
                        Case studies
                    </button>
                </div>
            </div>

            {/* Middle Slide with reviews */}
            <div className='flex-1 min-h-[34vh] lg:min-h-[20vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 relative'>
                <div className='max-w-4xl w-full relative h-auto min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center'>
                    {customerReviews.map((review, index) => (
                        <div 
                            key={review.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
                                index === currentReview 
                                    ? 'opacity-100 translate-x-0' 
                                    : index < currentReview 
                                        ? 'opacity-0 -translate-x-full' 
                                        : 'opacity-0 translate-x-full'
                            }`}
                        >
                            <div className='text-center text-white w-full'>
                                {/* Quote Icon */}
                                <div className='flex justify-center mb-4 sm:mb-6'>
                                    <img src={review.image} alt="Quote" className='w-12 h-12 sm:w-16 sm:h-16 opacity-60' />
                                </div>
                                
                                {/* Comment */}
                                <p className='alternate-font text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4'>
                                    "{review.comment}"
                                </p>
                                
                                {/* Sender */}
                                <p className='basic-font text-base sm:text-lg font-semibold uppercase tracking-wider'>
                                    — {review.sender}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>               
            </div>
            
            {/*Bottom slide with image */}
            <div className='flex-1 min-h-[33vh] lg:min-h-[40vh] flex flex-col lg:flex-row relative gap-4 sm:gap-6 justify-between items-center p-4 sm:p-6 lg:p-8' style={bottomBackImage}>
                {/* Overlay for opacity effect */}
                <div className='absolute inset-0 bg-primary opacity-60 z-10'></div>
                
                {/* Content */}
                <div className='flex flex-col z-10 w-full lg:w-[60%] text-center lg:text-left lg:px-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white main-font font-bold leading-tight'>
                        Explore our Belfast <br className='hidden sm:block' /> 
                        <span className='block sm:inline'>Showroom & HQ</span>
                    </h1>
                    <div className='mt-4 flex justify-center lg:justify-start'>
                        <button 
                            className='text-white basic-font border-3 border-white py-2 sm:py-3 px-6 sm:px-8 lg:px-10 rounded-full hover:bg-[#c9d4d3ce] hover:text-[#00322d] transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base'
                            aria-label="Explore 3D space"
                        >
                            Explore 3D space <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5'/>
                        </button>
                    </div>              
                </div>
                
                {/* Images */}
                <div className='flex flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-7 items-center lg:items-end z-10 w-full lg:w-[40%] mt-6 lg:mt-0'>
                    <img src={CubeImage} className='w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32' alt="" />                    
                    <img src={SponsImage} className='h-6 sm:h-8 lg:h-8 mt-0 lg:mt-4' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery