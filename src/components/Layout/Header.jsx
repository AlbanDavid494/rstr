// svg - logo
import { useState } from 'react'
import logo3 from '../../assets/svg/logo3.svg'
import logo4 from '../../assets/svg/logo4.svg'

// icons
import { IoMenu } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'


const Header = () => {

const [isOpen, setIsOpen] = useState(false)


  return (
  <header className="bg-white border-b border-[#e4e7ec] ">
    <div className='px-4 h-20 flex items-center justify-between w-full shadow-md'>
<div className="max-w-7xl mx-auto flex items-center justify-between w-full">
            <div className="flex items-center max-w-[100px]">
              <img src={logo4} alt="rester_logo" className='w-20 -ml-6' />
              <img src={logo3} alt="rester_logo" className='w-24 -ml-8 mb-[4px]' />
            </div>
             
             <div>
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

             <button className='block md:hidden transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
              {
                isOpen ? 
                 <IoMdClose className='text-red-400 text-3xl' />: 
                <IoMenu className='text-[#3698d4] text-3xl' />
              }
             </button>
            
          </div>
    </div>
          
          {
            isOpen && (
              <div className='md:hidden px-2 pt-2 pb-3 space-y-1'>
                {
                  ['List Property', 'Be a Patner', 'Contact us', 'Log in'].map((link, index) => (
                    <a href='#' key={index}  className='block text-gray-700 hover:text-[#3698d4] px-3 py-2 text-base font-medium rounded-md'>
                  {link}
                    </a>
                  ))
                }
              </div>
            )
          }
  </header>
  )
}

export default Header