// import banner from "../../public/bn.jpg";
// import logo from '../../public/logo.png'
// import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-600">
      {/* <div>
         <div className="relative">
  
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
            </div> */}

      <div className="lg:w-11/12 bg-red-400 lg:p-3 mx-auto">
        <p>Introduction:</p>
        <p>
          The Chatgaiya app is primarily based on an adaptation from Bengali to
          the Chittagonian dialect. We all know that the language of Chittagong
          is much older than the other languages of Bangladesh. Essentially,
          Chittagonians are Bangladeshis but not Bengalis. This is why the
          language of Chittagong is not easily understandable to people from
          other districts. Through the Chatgaiya app, the language of Chittagong
          will be easily understandable for everyone.
        </p>

        <p>Translator</p>
        <p>
          The main attraction of the Chittagong app is its translator. It is
          designed specifically to translate from Bengali to the language of
          Chittagong. This enables a non-chittagonian to receive their desired
          meaning through writing in Bengali. It only has the capability to
          translate from Bengali to the language of Chittagong.
        </p>

        <p>Word meaning</p>
      </div>
    </div>
  );
};

export default About;
