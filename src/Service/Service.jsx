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


 // Simple translations for demonstration purposes
      // const translations = {
      //   'ওরা': 'ঐতারা',
      //   'কেমন': ' ক্যান ',
      //   'নেই' : 'নাই'
      // };

  
      
      // const translatedText = translations[banglaText] || 'Translation not available';
      // setChittagongText(translatedText);
    //   const [banglaText, setBanglaText] = useState('');
    // const [chittagongText, setChittagongText] = useState('');
//     <div>
//     <p className="text-center font-semibold font-serif my-3 text-2xl lg:text-4xl">Bangla to Chittagong</p>
//        <div>
// <p></p>
// <div className="bg-rose-700 text-gray-800 lg:w-8/12 h-60 lg:mx-auto mt-6 p-6 lg:h-64 rounded-md">
// <input
//   placeholder="Enter text in Bangla"
//   value={banglaText}
//   onChange={(e) => setBanglaText(e.target.value)}
//   className=" w-full lg:w-11/12 lg:ml-7 h-36 lg:h-44 rounded-md text-center text-xl lg:text-2xl"
// />
// <button className="mt-4 px-4 text-2xl text-white  hover:bg-white hover:text-teal-700 hover:rounded-ss-md" onClick={handleTranslate}>Translate</button>
// </div>


// <div  className="bg-white border border-blue-950 h-56 text-gray-800 lg:w-8/12 lg:mx-auto mt-6 p-6 lg:h-56 rounded-md">
  
// <p className="text-blue-950 font-bold text-xl">Translated Text</p>
// <p className="mt-7 text-xl lg:mt-6 lg:ml-64 lg:text-2xl">{chittagongText}</p>
// </div>
// </div>
//   </div>