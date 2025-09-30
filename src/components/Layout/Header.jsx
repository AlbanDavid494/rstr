// svg - logo
import logo3 from '../../assets/svg/logo3.svg'
import logo4 from '../../assets/svg/logo4.svg'


const Header = () => {
  return (
  <header className="bg-white border-b border-[#e4e7ec] px-4 h-20 flex items-center justify-between w-full">
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
            
          </div>
        </header>
  )
}

export default Header