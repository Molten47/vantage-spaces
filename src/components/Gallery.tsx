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
        <div className='h-[110vh] flex flex-col bg-primary'>
            {/* Top Slide with image*/}
            <div className='flex-1 flex flex-row relative justify-between items-center' style={topBackImage}>
                {/* Overlay for opacity effect */}
                <div className='absolute inset-0 bg-primary opacity-60'></div>
                <div className='flex flex-col w-[15%]'>
                    <div className='w-70 h-1.5 bg-yellow z-10'></div>
                </div>
                <div className='flex flex-col text-white w-[55%] z-10'>
                    <div className='w-1/2'>
                        <h2 className='main-font text-[4rem] font-bold'>Get Inspired.</h2>
                        <p className='alternate-font text-[1.2rem]'>Take a look at the latest creations our biophilic designers and curators have pulled together for our clients.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3 w-[30%] basic-font text-white z-10'>
                    <button 
                        className='uppercase text-primary border-3 border-white py-6 px-8 rounded-full bg-white hover:bg-[#c9d4d3ce] transition-colors duration-300'
                        aria-label="Shop premium indoor plants collection"
                    >
                        View the gallery
                    </button>
                    <button 
                        className='uppercase text-white border-3 border-white py-6 px-8 rounded-full hover:bg-[#c9d4d3ce] hover:text-[#00322d] transition-colors duration-300'
                        aria-label="Shop premium indoor plants collection"
                    >
                        Case studies
                    </button>
                </div>
            </div>

            {/* Middle Slide with reviews */}
            <div className='flex-1 flex flex-col justify-center items-center px-8 py-12 relative overflow-hidden'>
                <div className='max-w-4xl w-full relative mb-70'>
                    {customerReviews.map((review, index) => (
                        <div 
                            key={review.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                index === currentReview 
                                    ? 'opacity-100 translate-x-0' 
                                    : index < currentReview 
                                        ? 'opacity-0 -translate-x-full' 
                                        : 'opacity-0 translate-x-full'
                            }`}
                        >
                            <div className='text-center text-white'>
                                {/* Quote Icon */}
                                <div className='flex justify-center mb-6'>
                                    <img src={review.image} alt="Quote" className='w-16 h-16 opacity-60' />
                                </div>
                                
                                {/* Comment */}
                                <p className='alternate-font text-2xl md:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto'>
                                    "{review.comment}"
                                </p>
                                
                                {/* Sender */}
                                <p className='basic-font text-lg font-semibold uppercase tracking-wider'>
                                    — {review.sender}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>               
            </div>
            {/*Bottom slide with image */}
            <div className='flex-1 flex flex-row relative gap-6 justify-between items-center px-8' style={bottomBackImage}>
                {/* Overlay for opacity effect */}
                <div className='absolute inset-0 bg-primary opacity-60 z-10'></div>
                <div className='flex flex-col z-10 w-[60%] px-10'>
                    <h1 className='text-7xl text-white main-font font-bold'>Explore our Belfast <br /> Showroom & HQ</h1>
                    <div className='mt-4 flex flex-row'>
                        <button 
                            className='text-white basic-font border-3 border-white py-3 px-10 rounded-full hover:bg-[#c9d4d3ce] hover:text-[#00322d] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap'
                            aria-label="Shop premium indoor plants collection"
                        >
                            Explore 3D space <ArrowRight/>
                        </button>
                    </div>              
                </div>
                <div className='flex flex-col gap-7 items-end z-10 w-[40%]'>
                    <img src={CubeImage} style={{height:'8rem', width:'8rem'}} alt="" />                    
                    <img src={SponsImage} className='mt-4' style={{height:'2rem'}} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery