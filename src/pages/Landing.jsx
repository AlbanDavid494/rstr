// image
import hotel from '../assets/images/hotel.jpg'
import Artboard_3 from '../assets/svg/Artboard_3.svg'
import HeroVector from '../assets/svg/HeroVector.svg'

// data
import { exploreApi} from '../services/api'

// icons
import { IoBedOutline, IoChevronDown } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdOutlineStars } from 'react-icons/md'
import { FaRegHeart, FaStar } from 'react-icons/fa6'
import { CiCalendar } from 'react-icons/ci'


// carousel
import Slider from 'react-slick'

// components
import Offers from '../components/Layout/Offers'
import Testimonial from '../components/Layout/Testimonial'



const Landing = () => {

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
   speed: 4000,
   autoplay:true,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='px-4' >

{/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fefcfb] to-[#f3f4f6] py-16 px-4">
        <div className="max-w-7xl mx-auto flex md:flex-row justify-between flex-col-reverse gap-12 items-center">
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

          <div className="">
            <img src={HeroVector} alt="" className='hidden md:block' />
            <img
              src={hotel}
              alt="Hotel room"
              className="w-full h-full block md:hidden md:h-[600px] object-cover rounded-none md:rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Explore most visited stays in Nigeria</h2>

          <div className="flex gap-6 mb-8">
            <button variant="outline" className="border-[#3698d4]">
              Port-Harcourt
            </button>
            <button variant="ghost" className="">
              Lagos
            </button>
            <button variant="ghost" className="">
              Abuja
            </button>
          </div>

          <h3 className="text-xl font-semibold text-[#222222] mb-6">Top Rated Hotels in Port-Harcourt, Nigeria</h3>



          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
          <div className='mx-auto max-w-7xl'>
            <Slider {...settings} >
            {
              exploreApi.map((data) => (
                <div key={data.id}>     
            <div className="overflow-hidden border-[#e4e7ec] shadow-md rounded-md w-75">
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
                </div>
            
              ))
            }
          {/* </div> */}
            </Slider>
            </div>

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