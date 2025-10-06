// data
import { FaRegHeart } from "react-icons/fa6"
import { BestOfferApi } from "../../services/api"

// icons
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

// hook
import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Offers = () => {

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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }

        const handleSwiperEvents = (swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }

  return (
    <section className="py-16 px-4 bg-[#f3f4f6]">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-[#616161] mb-2">Best offers</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
                Unlock unbeatable <span className="text-[#3698d4]">Deals</span>
                <br />
                on our <span className="text-[#3698d4]">Finest Stays</span>
              </h2>
              <p className="text-[#616161] mb-12 max-w-2xl mx-auto">
                Elevate your journey with our handpicked hotels. Enjoy premium comfort, exclusive discounts and stress-free
                bookings.
              </p>
    
              <div className=''>
                <div className="container mx-auto max-w-5xl">
              <Swiper
          slidesPerView={1}
      spaceBetween={5}
      navigation={{
        nextEl:'.next-btn',
        prevEl: '.prev-btn',
      }}
      onInit={(swiper) => handleSwiperEvents(swiper)}
      onSlideChange={(swiper) => handleSwiperEvents(swiper)}
      breakpoints={breakpointsResponsive}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{
        clickable: true
      }}
      autoplay = {{
        delay: 2500,
        disableOnInteraction: false
      }}
      className='mySwiper p-1 ![&_.swiper-wrapper] :!ease-in-ot ![&_.swiper-wrapper]:duration-300'
          >
                {
                  BestOfferApi.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="overflow-hidden border-[#e4e7ec] shadow-md rounded-md my-12">
                  <div className="relative">
                    <img src={data.image} alt={data.alt} className="w-full h-48 object-cover rounded-md" />
                    <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                      <FaRegHeart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#222222] mb-1">{data.hotelName}</h4>
                    <p className="text-sm text-[#616161] mb-3 line-clamp-1">{data.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-[#3698d4]">{data.amount}</span>
                        <span className="text-sm text-[#616161]">{data.perNight}</span>
                      </div>
                      <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                        {data.btnText}
                      </button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                  ))
                }
               </Swiper>
                 </div>
            </div>
               {/* control arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <button variant="outline" size="sm" className={`prev-btn w-12 h-12 rounded-full outline-none focus:outline-none  flex justify-center bg-[#3698d4]  items-center ${isBeginning ? ' cursor-not-allowed text-black bg-[#fefcfb]' : 'text-white cursor-pointer'}`} disabled={isBeginning}>
                      <FiArrowLeft className="w-5 h-5" />
                    </button>
                <button className={`next-btn bg-[#3698d4] w-12 h-12 rounded-full  flex justify-center items-center ${isEnd ? 'bg-[#fefcfb] text-black cursor-not-allowed' : 'cursor-pointer text-white'}`} disabled={isEnd}>
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
              
            </div>
          </section>
  )
}

export default Offers