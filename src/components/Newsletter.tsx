import { Newsletters } from "../data/newsletter";
import SideImage from "../assets/side_plant.webp"

const Newsletter = () => {
  return (
    <div className="w-full h-[70vh] bg-new flex flex-row relative">
      <div className="w-1/6 py-6 ">
        {/*Beauty leaf */}
        <img 
          src={SideImage} 
          className="-left-8 top-4 object-cover " 
          style={{height:'36rem', width:'30rem'}} 
          alt="Decorative side plant" 
        />
      </div>
      <div className="w-5/6 flex flex-col relative z-20">
        <div className="h-2/5 flex flex-row justify-between items-center px-6">
          <div className="w-[60%]">
            <h1 className="text-7xl w-2/4 font-bold text-primary main-font">
              The latest from the grapevine.
            </h1>
          </div>
          <div className="w-[40%] flex flex-row justify-end pr-10">
            <button
              className='text-primary border-2 border-[#00322d] alternate-font py-4 px-10 rounded-full hover:bg-emerald-100 uppercase hover:text-emerald-900 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap'
              aria-label="View all newsletters"
            >
              View all
            </button>
          </div>
        </div>
        <div className="news-grid h-3/5 p-6 overflow-x-auto main-font">
          <div className="flex flex-row gap-6 h-full">
            {Newsletters.map((news) => (
              <div key={news.id} className="min-w-80 max-w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.topic}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between h-[calc(100%-14rem)]">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-gray-600 font-medium">{news.release}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                        {news.categories}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-800 mb-2 line-clamp-2">
                      {news.topic}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {news.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;