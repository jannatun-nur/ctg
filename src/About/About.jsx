import banner from "../../public/bn.jpg";
import logo from '../../public/logo.png'
import { motion } from 'framer-motion';
import sunflower from "../../public/sun.png";
import flower from "../../public/fls.png";
import flowers from "../../public/cls (1).png";
import rose from "../../public/rose.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-600">
      <div>
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
            </div>

      <div className=" bg-white ">
        <div className="lg:flex lg:justify-items-start   lg:gap-32">
          <section className="">
            <img className="hidden lg:block" src={sunflower} alt="" />
          </section>

          <section className="lg:mt-20 lg:w-8/12 md:text-2xl lg:text-2xl">
            <p>
              <span className="text-purple-600 font-serif font-semibold">
                Chatgaiya App
              </span>{" "}
              প্রধানত বাংলা থেকে চট্টগ্রামের উপভাষায় রূপান্তরের ভিত্তিতে তৈরি
              করা হয়েছে। আমরা সবাই জানি যে চট্টগ্রামের ভাষা বাংলাদেশের অন্যান্য
              ভাষার তুলনায় অনেক প্রাচীন। মূলত, চট্টগ্রামবাসীরা বাংলাদেশি কিন্তু
              বাঙালি নয়। এই কারণেই চট্টগ্রামের ভাষা অন্যান্য জেলার মানুষের জন্য
              সহজে বোধগম্য নয়। চাটগাঁইয়া অ্যাপের মাধ্যমে, চট্টগ্রামের ভাষা
              সবার জন্য সহজেই বোঝার মতো হবে।
            </p>
          </section>
        </div>

        <div className="lg:flex lg:justify-between lg:gap-32">
          <section className="lg:mt-20 lg:w-8/12  md:text-2xl lg:text-2xl lg:ml-5">
            <p>
              <span className="text-teal-600 font-serif font-semibold ">
                Chatgaiya App
              </span>
                এর প্রধান আকর্ষণ হল এর   <Link><button className="text-pink-600 font-semibold">Translator</button></Link> । এটি বিশেষভাবে বাংলা থেকে
              চট্টগ্রামের ভাষায় অনুবাদ করার জন্য ডিজাইন করা হয়েছে। এর ফলে একজন
              ব্যক্তি বাংলা লেখার মাধ্যমে তাদের পছন্দসই অর্থ পেতে পারেন। এটি
              শুধুমাত্র বাংলা থেকে চট্টগ্রামের ভাষায় অনুবাদ করার ক্ষমতা রাখে।
            </p>
          </section>
          <section>
            <img className="hidden lg:block" src={flower} alt="" />
          </section>
        </div>

        <div className="lg:flex lg:justify-items-start lg:gap-32">
          <section className="">
            <img className="hidden lg:block" src={flowers} alt="" />
          </section>

          <section className="lg:mt-20 lg:w-8/12  md:text-2xl lg:text-2xl">
            <p>
              অনেক সময় বিভিন্ন কারণেকাঙ্খিত ফলাফল পেতে ব্যর্থ হতে পারেন। যার
              জন্য আমি দুঃখ প্রকাশ করছি। কিন্তু তার বিকল্প হিসেবে   <Link><button className="text-rose-600 font-semibold">Word Meaning</button></Link>  বিশেষ ভাবে
              তৈরি করা হয়েছে যার মাধ্যমে আপনারা শব্দের অর্থ পেতে পারেন। তাছাড়া
              নতুন শব্দের সাথে পরিচিত হওয়ার জন্য শব্দার্থের বিকল্প নেই। প্রতিবার
              নতুন কিছু শব্দ যুক্ত করার চেষ্টায় থাকবো।
            </p>
          </section>
        </div>

        <div className="lg:flex lg:justify-between lg:gap-32">
          <section className="lg:mt-20 lg:w-8/12  md:text-2xl lg:text-2xl lg:ml-5">
            <p>
              প্রবাদ প্রবচন মূলত লোক মুখের নিত্যদিনের বুলি। বাংলা ভাষার প্রবাদ
              প্রবচন সবার কাছে বোধগম্য হলেও চট্টগ্রাম ভাষা প্রবাদ প্রবচন
              অন্যান্য জেলার মানুষের কাছে বোধগম্য নয়। যার কারণে  <Link><button className="text-rose-800 font-semibold">Proverbs</button></Link> বিশেষ ভাবে তৈরি
              করা হয়েছে।
            </p>
          </section>
          <section>
            <img className="hidden lg:block" src={rose} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;




 