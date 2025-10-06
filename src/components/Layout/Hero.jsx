import HeroVector from '../../assets/svg/HeroVector.svg'
import Hotel from '../../assets/images/hotel.jpg'


import {  Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";
import { IoBedOutline, IoChevronDown } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineStars } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const Hero = () => {

// const [isBeginning, setIsBeginning] = useState(true)
//   const [isEnd, setIsEnd] = useState(false)

//   const handleSwiperEvents = (swiper) => {
//           setIsBeginning(swiper.isBeginning)
//           setIsEnd(swiper.isEnd)
//         }



  return (
    <section className="relative bg-gradient-to-r from-[#fefcfb] to-[#f3f4f6] py:0 md:py-16 px-0  md:px-4">
            <div className="flex justify-between items-center md:flex-row  flex-col-reverse">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#222222] leading-tight text-balance">
                    Find your perfect
                    <br />
                    stay in seconds
                  </h1>
                  <p className="text-[#616161] text-lg mt-4">Best rates, verified hosts, flexible cancellation</p>
                </div>
    
                {/* Search Features */}
                <div className="flex flex-wrap gap-4 text-sm text-[#687983]">
                  <div className="flex items-center gap-2">
                    <IoBedOutline className="w-4 h-4" />
                    <span>Premium Comfort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TfiHeadphoneAlt className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineStars className="w-4 h-4" />
                    <span>Best Price Guaranteed</span>
                  </div>
                </div>
    
                {/* Search Form */}
                <div className="rounded-lg py-6 space-y-4">
                  <div className="flex bg-white w-full border  border-[#e4e7ec] p-2 rounded-md ">
                    <input type='text'
                      placeholder="Where are you going?"
                      className="w-full pl-4 pr-12 py-3 outline-none rounded-md text-[#616161] leading-tight"
                    />
                    <button className="bg-[#f4b833] hover:bg-[#e4b642] text-white px-6 py-2 rounded-md">
                      Search
                    </button>
                  </div>
    
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <button
                      variant="outline"
                      className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-2 rounded-md flex items-center justify-center gap-x-1"
                    >
                      Type <IoChevronDown className="w-4 h-4" />
                    </button>
                    <button
                      variant="outline"
                      className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-1 rounded-md flex items-center justify-center gap-x-1"
                    >
                      Location <IoChevronDown className="w-4 h-4" />
                    </button>
                    <button
                      variant="outline"
                      className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-1 rounded-md flex items-center justify-center gap-x-1"
                    >
                      Persons <IoChevronDown className="w-4 h-4" />
                    </button>
                  
                    <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-2 rounded-md flex items-center justify-center gap-x-1">Check in
                     <CiCalendar />
                    </button>
                    <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white rounded-md py-2 flex items-center justify-center gap-x-1">Check out <CiCalendar /> </button>
                    <button variant="outline" className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-1 rounded-md">
                      See top offers
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:hidden block mb-3 md:mb-0">
{/* slider */}
              <Swiper
              slidesPerView={1}
      modules={[Pagination, Autoplay]}
       pagination={{
          clickable: true,
        }}
        autoplay = {{
        delay: 2500,
        disableOnInteraction: false
      }}
              >
                <SwiperSlide><img src={Hotel} className='w-[100%] h-[300px]'/></SwiperSlide>
                <SwiperSlide><img src={Hotel} className='w-[100%] h-[300px]'/></SwiperSlide>

              </Swiper>
    </div>
    <div className="w-[50%] hidden md:block">
{/* slider */}
              <Swiper
              slidesPerView={1}
      modules={[Pagination, Autoplay]}
       pagination={{
          clickable: true,
        }}
        autoplay = {{
        delay: 2500,
        disableOnInteraction: false
      }}
              >
                <SwiperSlide><img src={HeroVector} /></SwiperSlide>
                <SwiperSlide><img src={HeroVector} /></SwiperSlide>

              </Swiper>
    </div>
            
    
    
    
            </div>
          </section>
  )
}

export default Hero