// image
import hotel from '../assets/images/hotel.jpg'
// import Artboard_3 from '../assets/svg/Artboard_3.svg'
import HeroVector from '../assets/svg/HeroVector.svg'

// data
import { exploreApi} from '../services/api'


// icons
import { IoBedOutline, IoChevronDown } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdOutlineStars } from 'react-icons/md'
import { FaRegHeart, FaStar } from 'react-icons/fa6'
import { CiCalendar } from 'react-icons/ci'


// components
import Offers from '../components/Layout/Offers'
import Testimonial from '../components/Layout/Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Hero from '../components/Layout/Hero'

 



const Landing = () => {

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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }

        const handleSwiperEvents = (swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }

  return (
    <div className='px-4' >

{/* Hero Section */}
      <Hero />

      {/* Explore Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Explore most visited stays in Nigeria</h2>

          <div className="flex justify-between gap-6 mb-8 flex-col">
           <div className='flex md:gap-x-4 gap-x-4 '>
             <button className='border-[#3698d4] font-semibold text-[#222222]'> Port-Harcourt
            </button>
            <button className="text-sm font-semibold text-[#222222]">Lagos </button>
            <button className="text-sm font-semibold text-[#222222]">Abuja</button>
            </div>

            <h3 className="md:hidden block text-xl font-semibold text-[#222222] mb-1 md:mb-6">Top Rated Hotels in Port-Harcourt, Nigeria</h3>

          {/* custom buttons */}
                   <div className="flex items-center justify-center gap-6"> 
                    <button variant="outline" size="sm" className={`c-prev w-12 h-12 rounded-full outline-none focus:outline-none  flex justify-center bg-[#3698d4]  items-center ${isBeginning ? ' cursor-not-allowed text-black bg-[#fefcfb]' : 'text-white cursor-pointer'}`} disabled={isBeginning}>
                                         <FiArrowLeft className="w-5 h-5" />
                                       </button>
                                   <button className={`c-next bg-[#3698d4] w-12 h-12 rounded-full  flex justify-center items-center ${isEnd ? 'bg-[#fefcfb] text-black cursor-not-allowed' : 'cursor-pointer text-white'}`} disabled={isEnd}>
                                     <FiArrowRight className="w-5 h-5" />
                                   </button>
                  </div>

          </div>

          <h3 className="hidden md:block text-xl font-semibold text-[#222222] mb-6">Top Rated Hotels in Port-Harcourt, Nigeria</h3>

          <Swiper
          slidesPerView={1}
      spaceBetween={5}
      navigation={{
        nextEl:'.c-next',
        prevEl: '.c-prev',
      }}
      pagination = {{
        clickable: true
      }}
      autoplay = {{
        delay: 2500,
        disableOnInteraction: false
      }}
      onInit={(swiper) => handleSwiperEvents(swiper)}
      onSlideChange={(swiper) => handleSwiperEvents(swiper)}
      breakpoints={breakpointsResponsive}
      modules={[Navigation, Pagination, Autoplay]}
      className='mySwiper p-1 ![&_.swiper-wrapper] :!ease-in-ot ![&_.swiper-wrapper]:duration-300'

          >
            
            {
              exploreApi.map((data) => (
                <SwiperSlide key={data.id}>     
            <div className="overflow-hidden border-[#e4e7ec] shadow-md rounded-md w-full md:w-75 mb-14 md:my-12">
              <div className="relative">
                <img src={data.image} alt={data.alt} className="w-full h-48 object-cover rounded-md" />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart  className="w-4 h-4 " />
                </button>
                <div className="absolute -bottom-3 left-3 bg-[#f4b833] text-white rounded-md p-1 text-sm font-semibold flex justify-between items-center gap-1 px-2 bg-gradient-to-t from-[#de7d08] to-[#ffaf04]">
                 <FaStar  className="w-[16px] text-[#ffaf04]" /> <span>{data.rating}</span></div>
              </div>
              {/* card content */}
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">{data.hotelName}</h4>
                <p className="text-sm text-[#616161] my-4 line-clamp-1 ">{data.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#222222]">{data.amount}</span>
                    <span className="text-sm text-[#616161]">{data.perNight}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm mb-1 text-[#3698d4]">{data.review}</span>
                  <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    {data.btnText}
                  </button>
                  </div>
                </div>
              </div>
            </div> 
                </SwiperSlide>
            
              ))
            }
            
            </Swiper>

            

        </div>
      </section>

      {/* Best Offers Section */}
      <Offers />

      {/* Testimonials Section */}
      <Testimonial />
    </div>
  )
}

export default Landing