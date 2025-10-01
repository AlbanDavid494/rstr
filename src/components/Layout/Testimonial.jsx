// icons
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

// data
import { testifierApi } from "../../services/api"
import Slider from "react-slick";


const Testimonial = () => {

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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

              {/* card */}
            <div className="">
          <Slider {...settings}>
            {
   testifierApi.map((data) => (
   <div className="w-full overflow-hidden p-4">
                  <div 
                  key={data.id}
                   className="p-6 border-[#e4e7ec]
                    bg-gray-50 shadow-md rounded-2xl mx-auto w-70 h-full ">
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
     </div>         
                ))
              }
        </Slider>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial