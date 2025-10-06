import { useRef, useState } from 'react';

// icons
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

// data
import { testifierApi } from "../../services/api"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Testimonial = () => {

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const breakpointsResponsive = {
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }

        const handleSwiperEvents = (swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }



  return (
   <section className="py-16 px-4 bg-white">

          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
                What people say
                <br />
                <span className="text-[#3698d4]">about us.</span>
              </h2>
              <p className="text-[#616161] mb-8">
                Our clients send us bunch of smiles with our services and we love them.
              </p>

              <div className="flex gap-4">
                <button variant="outline" size="sm" className={`ctm-prev w-12 h-12 rounded-full outline-none focus:outline-none  flex justify-center items-center ${isBeginning ? 'bg-[#fefcfb] text-black cursor-not-allowed' : 'cursor-pointer bg-[#3698d4] text-white'}`} disabled={isBeginning} >
                  <FiArrowLeft className="w-5 h-5" />
                </button>
                <button className={`ctm-next  w-12 h-12 rounded-full flex justify-center items-center ${isEnd ? 'cursor-not-allowed text-black bg-[#fefcfb]' : 'cursor-pointer bg-[#3698d4] text-white'}`} disabled={isEnd} >
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

              {/* card */}
            
     <div className="w-full py-0 md:py-1">
      <Swiper
      slidesPerView={1}
      spaceBetween={5}
      navigation={{
        nextEl:'.ctm-next',
        prevEl: '.ctm-prev',
      }}
      onInit={(swiper) => handleSwiperEvents(swiper)}
      onSlideChange={(swiper) => handleSwiperEvents(swiper)}
      breakpoints={breakpointsResponsive}
      modules={[Navigation, Pagination, Autoplay]}
       pagination={{
          clickable: true,
        }}
        autoplay = {{
        delay: 2500,
        disableOnInteraction: false
      }}
      className='mySwiper p-1 ![&_.swiper-wrapper] :!ease-in-ot ![&_.swiper-wrapper]:duration-300'
      >
        {
   testifierApi.map((data) => (
      <SwiperSlide key={data.id}>
        
         <div                  
                   className="p-6 border-[#e4e7ec]
                    bg-gray-50 shadow-md rounded-2xl mx-auto w-full md:w-70 h-full md:mb-0 mb-10 md:my-10 ">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={data.image} alt={data.alt} className="rounded-full w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#222222] mb-4">
                      {data.description}
                    </p>
                    <div>
                      <p className="font-semibold text-[#222222]">{data.name}</p>
                      <p className="text-sm text-[#616161]">{data.address}</p>
                    </div>
                  </div>
                </div>
          </div>
        
      </SwiperSlide>
                ))
              }
       
      </Swiper> 
     </div>
     
            
          </div>
        </div>
      </section>
  )
}

export default Testimonial