// svg - logo
import logo2 from '../../assets/svg/logo2.svg'

// icons
import { FaXTwitter, FaInstagram} from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF} from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="bg-[#0b1e2a] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex flex-col space-x-2">
                <img src={logo2} alt="rester_logo" className='w-26 -mt-10 -ml-3' />
                 <p className="text-sm text-[#b0b4b8] -mt-6">Copyright © 2025 Rester Hospitality and Technology Limited. <br />
                 All Rights Reserved.</p>
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
            <div className="flex flex-col gap-6 text-sm text-[#b0b4b8]">
              <a href="#">Terms of service</a>
              <a href="#">Privacy Policy</a>
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
        </div>
      </footer>
  )
}

export default Footer