// data
import { FaRegHeart } from "react-icons/fa6"
import { BestOfferApi } from "../../services/api"

// react-slick for carousel
import Slider from "react-slick"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

// icons


const Offers = () => {

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
   speed: 4000,
   nextArrow: false,
    prevArrow: false,
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
    
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
              <div className='container mx-auto max-w-5xl'>
                <Slider {...settings} >
                {
                  BestOfferApi.map((data) => (
                <div key={data.id}>
                  <div className="overflow-hidden border-[#e4e7ec] shadow-md rounded-md w-75">
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
                </div>
                  ))
                }
                 </Slider>
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
  )
}

export default Offers