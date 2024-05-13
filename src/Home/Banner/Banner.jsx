
import banner from "../../../public/bn.jpg";
import logo from '../../../public/logo.png'
import { motion } from 'framer-motion';

const Banner = () => {


  return (
    <div>
         <div className="relative">
      {/* banner */}
       <div className="">
       <img
        src={banner}
        className="w-full h-[180px] lg:h-[250px] lg:my-4 my-5 md:h-[200px] object-cover"
        alt="Banner"
      />

       </div>
    
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black"></div>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <motion.img
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 2 }}
          className="lg:w-36 lg:h-16 w-28 h-16 mt-2 lg:mt-0"
          src={logo}
          alt=""
        />
        <motion.p
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 2 }}
          className="text-white lg:text-4xl font-bold text-2xl lg:mb-2"
        >
          Chatgaiya App
        </motion.p>
        <motion.p
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 2 }}
          className="text-white font-semibold font-serif lg:text-xl lg:mt-1 mt-2"
        >
          <span className="text-xs font-serif">Welcome from</span> Jannatun Nur
        </motion.p>
      </motion.div>
    </div>
    </div>
  );
};

export default Banner;
