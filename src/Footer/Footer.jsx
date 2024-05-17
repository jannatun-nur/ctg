import footer from '../../public/fl.png'
import logo from '../../public/logo.png'
import { IoIosMailUnread } from "react-icons/io";
const Footer = () => {
    return (
        <div className="lg:flex lg:justify-between  lg:mt-20 mt-10 bg-gray-700 flex justify-between">
           <div>
           <img className='lg:h-16 lg:w-24 lg:mr-36 lg:mt-10 w-16 h-10 mt-2 lg:hidden md:hidden' src={logo} alt="" />
           < p className='text-white font-serif lg:text-xl text-xs lg:mr-10 lg:hidden md:hidden' >Chatgaiya App</p>
            
                <img className='h-24 w-32 lg:h-full lg:w-full' src={footer} alt="" />
           </div>
                    <div className='text-white font-serif lg:mt-6 lg:text-xl text-xs mt-5'>
                    <p className='text-2xl lg:text-4xl lg:ml-10'><a  href="mailto:jannatunur03@gmail.com"><IoIosMailUnread /></a></p>
                    For collaboration
                       
                    </div>
           <div className=''>
           <img className='lg:h-16 lg:w-24 lg:mr-36 lg:mt-10 w-16 h-10 mt-2 hidden lg:block md:block' src={logo} alt="" />
           < p className='text-white font-serif lg:text-xl text-xs lg:mr-10 hidden lg:block md:block' >Chatgaiya App</p>
           </div>
        </div>
    );
};

export default Footer;