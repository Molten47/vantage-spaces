import TopImage from '../assets/adele-erolsky.jpg'
import BottomImage from '../assets/robin-strahl-.jpg'
import CubeImage from '../assets/cube.png'
import SponsImage from '../assets/matterport.webp'
const Gallery = () => {
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
            {/* Middle Slide with bg-primary */}
            <div className='flex-1 flex flex-col'>

            </div>
            {/*Bottom slide with image */}
            <div className='flex-1 flex flex-row relative gap-6 justify-between items-center px-8' style={bottomBackImage}>
                {/* Overlay for opacity effect */}
                <div className='absolute inset-0 bg-primary opacity-60 z-10'></div>
                <div  className='flex flex-col z-10'>
                    <h1>Explore our Leeds Showroom & HQ</h1>
                    <button 
                    className='uppercase text-white border-3 border-white py-5 px-8 rounded-full hover:bg-[#c9d4d3ce] hover:text-[#00322d] transition-colors duration-300'
                    aria-label="Shop premium indoor plants collection"
                  >
                    Case studies
                  </button>
                </div>
                <div className='flex flex-col gap-7 items-end z-10'>
                    <img src={CubeImage} style={{height:'8rem', width:'8rem'}} alt="" />                    
                    <img src={SponsImage} className='mt-4' style={{height:'2rem'}}   alt="" />

                    

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Gallery