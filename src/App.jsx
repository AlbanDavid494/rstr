
import { FaXTwitter, FaInstagram, FaRegHeart  } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaStar  } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineStars } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";


// images
import hotel from './images/hotel.jpg'
import cardImg from './images/cardImg.png'
import cardImgOne from './images/cardImgOne.jpg'
import cardImgTwo from './images/cardImgTwo.jpg'
import cardImgThree from './images/cardImgThree.jpg'
import testifier from './images/testifier.jpg'

function App() {


  return (
    <>
    <div className="min-h-screen bg-[#fefcfb]">
     
     {/* Header */}
 <header className="bg-white border-b border-[#e4e7ec] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#3698d4] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-[#222222] font-semibold text-xl">Rester</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#616161] hover:text-[#222222] text-sm">
              List property
            </a>
            <a href="#" className="text-[#616161] hover:text-[#222222] text-sm">
              Be a partner
            </a>
            <a href="#" className="text-[#616161] hover:text-[#222222] text-sm">
              Contact us
            </a>
            <a href="#" className="text-[#616161] hover:text-[#222222] text-sm">
              Contact us
            </a>
            <a href="#" className="text-[#3698d4] hover:text-[#2980b9] text-sm">
              Log in
            </a>
            <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md text-sm">Sign up</button>
          </nav>
        </div>
      </header>

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
            <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
              <div className="flex">
                <input type='text'
                  placeholder="Where are you going?"
                  className="w-full pl-4 pr-12 py-3 border border-[#e4e7ec] rounded-md"
                />
                <button className="bg-[#f4b833] hover:bg-[#e4b642] text-white px-6 py-2 rounded-md">
                  Search
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  variant="outline"
                  className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-1 rounded-md flex items-center justify-center gap-x-1"
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

              <div className="grid grid-cols-3 gap-3">
                <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white rounded-md">Check in</button>
                <button className="bg-[#3698d4] hover:bg-[#2980b9] text-white rounded-md py-1">Check out</button>
                <button variant="outline" className="bg-[#3698d4] hover:bg-[#2980b9] text-white py-1 rounded-md">
                  See top offers
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
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
            <button variant="outline" className="border-[#3698d4] text-[#3698d4] bg-[#d7eaf6]">
              Port-Harcourt
            </button>
            <button variant="ghost" className="text-[#616161]">
              Lagos
            </button>
            <button variant="ghost" className="text-[#616161]">
              Abuja
            </button>
          </div>

          <h3 className="text-xl font-semibold text-[#222222] mb-6">Top Rated Hotels in Port-Harcourt, Nigeria</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hotel Card 1 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img src={cardImg} alt="Hotel Presidential" className="w-full h-48 object-cover rounded-md" />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart  className="w-4 h-4" />
                </button>
                <div className="absolute -bottom-3 left-3 bg-[#f4b833] text-white rounded-md p-1 text-sm font-semibold flex justify-between items-center gap-1 px-2">
                 <FaStar  className="w-[16px]" /> <span>4.8</span></div>
              </div>
              {/* card content */}
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">Hotel Presidential</h4>
                <p className="text-sm text-[#616161] mb-2 line-clamp-1">Ada George Rd, Rumukrushi Port City, Nigeria</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#222222]">₦100,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                  <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Hotel Card 2 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img
                  src={cardImgOne}
                  alt="LeMeridien Ogeyi Place"
                  className="w-full h-48 object-cover rounded-md"
                />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart className="w-4 h-4" />
                </button>
               <div className="absolute -bottom-3 left-3 bg-[#f4b833] text-white rounded-md p-1 text-sm font-semibold flex justify-between items-center gap-1 px-2">
                 <FaStar className="w-[16px]" /> <span>4.7</span></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">LeMeridien Ogeyi Place</h4>
                <p className="text-sm text-[#616161] mb-2">Ogeyi Place, Rivers State, Nigeria</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#222222]">₦75,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Hotel Card 3 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img src={cardImgTwo} alt="Novotel" className="w-full h-48 object-cover rounded-md" />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart className="w-4 h-4" />
                </button>
               <div className="absolute -bottom-3 left-3 bg-[#f4b833] text-white rounded-md p-1 text-sm font-semibold flex justify-between items-center gap-1 px-2">
                 <FaStar className="w-[16px]" /> <span>4.6</span></div>
              </div>
              {/* card content */}
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">Novotel</h4>
                <p className="text-sm text-[#616161] mb-2">5 Azikiwe Road, Rumuomasi Port Harcourt</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#222222]">₦50,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                  <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Hotel Card 4 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img src={cardImgThree} alt="Hotel Presidential" className="w-full h-48 object-cover rounded-md rounded-full" />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-md">
                  <FaRegHeart className="w-4 h-4" />
                </button>
               <div className="absolute -bottom-3 left-3 bg-[#f4b833] text-white rounded-md p-1 text-sm font-semibold flex justify-between items-center gap-1 px-2">
                 <FaStar className="w-[16px]" /> <span>4.9</span></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">Hotel Presidential</h4>
                <p className="text-sm text-[#616161] mb-2 line-clamp-1">Ada George Rd, Rumukrushi Port City, Nigeria</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#222222]">₦100,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                 <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deal Card 1 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img src={cardImgTwo} alt="Hotel Presidential" className="w-full h-48 object-cover rounded-md" />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">Hotel Presidential</h4>
                <p className="text-sm text-[#616161] mb-3 line-clamp-1">Ada George Rd, Rumukrushi Port City, Nigeria</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#3698d4]">₦75,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                  <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Deal Card 2 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img
                  src={cardImgThree}
                  alt="LeMeridien Ogeyi Place"
                  className="w-full h-48 object-cover rounded-md"
                />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart className="w-4 h-4" />
                </button>
              </div>
              {/* card content */}
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">LeMeridien Ogeyi Place</h4>
                <p className="text-sm text-[#616161] mb-3">Ogeyi Place, Rivers State, Nigeria</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#3698d4]">₦75,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                  <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Deal Card 3 */}
            <div className="overflow-hidden border-[#e4e7ec]">
              <div className="relative">
                <img src={cardImg} alt="Novotel" className="w-full h-48 object-cover rounded-md" />
                <button size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#222222] p-2 rounded-full">
                  <FaRegHeart className="w-4 h-4" />
                </button>
                <p className="absolute top-3 left-3 bg-[#ff0000] text-white p-1 rounded-md">-15%</p>
              </div>
              {/* card content */}
              <div className="p-4">
                <h4 className="font-semibold text-[#222222] mb-1">Novotel</h4>
                <p className="text-sm text-[#616161] mb-3">5 Azikiwe Road, Rumuomasi Port Harcourt</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#3698d4]">₦75,000</span>
                    <span className="text-sm text-[#616161]"> per night</span>
                  </div>
                  <button size="sm" className="bg-[#3698d4] hover:bg-[#2980b9] text-white p-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

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
              <div className="p-6 border-[#e4e7ec]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12">
                    <img src={testifier} className="rounded-full w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#222222] mb-4">
                      "Rester made booking easy and stress-free. The stay matched the description, and support was
                      always there. I'll book with them again."
                    </p>
                    <div>
                      <p className="font-semibold text-[#222222]">Michael Olawale</p>
                      <p className="text-sm text-[#616161]">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
               
               {/* card */}
              <div className="p-6 border-[#e4e7ec] bg-[#f3f4f6]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12">
                    <img src={testifier} className="rounded-full w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div>
                      <p className="font-semibold text-[#222222]">Miriam Ahmed</p>
                      <p className="text-sm text-[#616161]">Kano State, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1e2a] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#3698d4] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-white font-semibold text-xl">Rester</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About us</h4>
              <div className="space-y-2 text-sm text-[#b0b4b8]">
                <p>Rooms & Suites</p>
                <p>FAQs</p>
                <p>Contact us</p>
              </div>
            </div>

            <div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#444444] rounded-full flex items-center justify-center">
                  <FaXTwitter className="text-white text-xs" />
                </div>
                <div className="w-8 h-8 bg-[#444444] rounded-full flex items-center justify-center">
                  < FaInstagram className="text-white text-xs" />
                </div>
                <div className="w-8 h-8 bg-[#444444] rounded-full flex items-center justify-center">
                  <FaFacebookF className="text-white text-xs" />
                </div>
                <div className="w-8 h-8 bg-[#444444] rounded-full flex items-center justify-center">
                  <CiLinkedin className="text-white text-xs" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Updates and Offers</h4>
              <div className="relative">
                <input type='text'
                  placeholder="Your Email Here"
                  className="bg-[#fff] border-[#444444] text-white placeholder:text-[#000000] pla outline-none rounded-md p-2 w-full"
                />
                <button className="bg-[#f4b833] hover:bg-[#e4b642] text-white p-2 rounded-md absolute right-1 top-1 bottom-1 text-sm font-semibold ">Sign Up</button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#444444] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-[#b0b4b8]">
              <a href="#">Terms of service</a>
              <a href="#">Privacy Policy</a>
            </div>
            <p className="text-sm text-[#b0b4b8]">Copyright © Rester 2025. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
