import { Link } from "react-router-dom";
import trans from '../../public/bc.png'
import book from '../../public/b.png'
import peo from '../../public/p.png'
import about from '../../public/ab.png'

const Service = () => {
    return (
        <div>

          <p className="text-center lg:text-4xl text-2xl text-amber-700 lg:my-10 my-8 font-bold">services for you</p>

            <div className="lg:flex lg:justify-evenly grid grid-cols-2 lg:ml-0 ml-7 gap-3 md:ml-40">
                {/* btn 01 */}
              <Link to='/translator'>
              <button className="bg-white ">
                <img className="lg:w-44 lg:h-36 w-28 h-24" src={trans} alt="" />
                <p className="font-semibold font-serif text-gray-800 lg:text-2xl text-xs">Translator</p>
              </button>
              </Link>


                {/* btn 02*/}
              <Link to='/wordmeaning'>
              <button className="bg-white">
                <img className="lg:w-40 lg:h-36 w-28 h-24" src={book} alt="" />
                <p className="font-semibold font-serif text-gray-800 lg:text-2xl text-xs">Word Meaning</p>
              </button>
              </Link>


                {/* btn 03 */}
              <Link to='/proverbs'>
              <button className="bg-white">
                <img className="lg:w-40 lg:h-36 w-28 h-24" src={peo} alt="" />
                <p className="font-semibold font-serif text-gray-800 lg:text-2xl text-xs">Proverbs</p>
              </button>
              </Link>

                {/* btn 04 */}
              <Link to='/about'>
              <button className="bg-white">
                <img className="lg:w-40 lg:h-36 w-28 h-24" src={about} alt="" />
                <p className="font-semibold font-serif text-gray-800 lg:text-2xl text-xs">About</p>
              </button>
              </Link>














            </div>
            
        </div>
    );
};

export default Service;