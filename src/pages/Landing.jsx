// image
import hotel from '../assets/images/hotel.jpg'
import Artboard_3 from '../assets/svg/Artboard_3.svg'

// data
import { exploreApi, testifierApi } from '../services/api'
import { BestOfferApi } from '../services/api'

// icons
import { IoBedOutline, IoChevronDown } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdOutlineStars } from 'react-icons/md'
import { FaRegHeart, FaStar } from 'react-icons/fa6'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { CiCalendar } from 'react-icons/ci'


// carousel
import { motion } from 'motion'

// hooks
import { useState, useEffect } from 'react'


const Landing = () => {
  return (
    <div className='px-4' >

{/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fefcfb] to-[#f3f4f6] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

          <div className="relative">
            <img src={Artboard_3} alt="" className='absolute -bottom-50' />
            <img
              src={hotel}
              alt="Hotel room"
              className="w-full h-[600px] object-cover rounded-full"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              exploreApi.map((data) => (              
<div className="overflow-hidden border-[#e4e7ec] shadow-md rounded-md">
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
              ))
            }
          </div>
        </div>
      </section>

      {/* Best Offers Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Deal Card  */}
            {
              BestOfferApi.map((data) => (
              <div key={data.id} className="overflow-hidden border-[#e4e7ec] shadow-md rounded-md">
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
              ))
            }
       
        </div>
           {/* control arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button variant="outline" size="sm" className="w-12 h-12 rounded-full outline-none focus:outline-none bg-[#fefcfb] flex justify-center items-center">
                  <FiArrowLeft className="w-5 h-5" />
                </button>
            <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white w-12 h-12 rounded-full  flex justify-center items-center">
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
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
                <button variant="outline" size="sm" className="w-12 h-12 rounded-full outline-none focus:outline-none bg-[#fefcfb] flex justify-center items-center">
                  <FiArrowLeft className="w-5 h-5" />
                </button>
                <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white w-12 h-12 rounded-full flex justify-center items-center">
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* card */}
              {
                testifierApi.map((data) => (
                  <div key={data.id} className="p-6 border-[#e4e7ec]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12">
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
                ))
              }
            
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Landing