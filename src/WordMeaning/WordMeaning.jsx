import Aos from "aos";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const WordMeaning = () => {
    useEffect(() => {
        Aos.init();
    }, []); 
    return (
        <div>
            <Marquee>
             < p className="text-teal-700 lg:text-4xl text-2xl p-7">এক নজরে দেখে নিই শব্দের অর্থ</p>
                </Marquee>


             <div   className="grid lg:grid-cols-3 gap-8 text-teal-700 p-4 "> 

       
           
            <div  
     className="columns-1 bg-rose-500 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl ">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
                    ১. আমি - আঁই<br />
                    ২. তুমি - তুঁই<br />
                    ৩. আমরা - আঁরা<br />
                    ৪. আপনারা - অনোরা<br />
                    ৫. তোমরা - তোঁয়ারা<br />
                    ৬. সে - ইতে (ছেলে) / ইতি (মেয়ে)<br />
                    ৭. তারা/ওনারা - ইতারা<br />
                    ৮. সবাই - বিয়াজ্ঞুন<br />
                    ৯. কারা - হারা<br />
                    ১০.ওরা - ঐতারা<br />
                    ১১.এরা - ইতারা<br />
                    ১২.এদের - ইতেরো<br />
                    ১৩.ওদের - ঐতেরো<br />
                    ১৪.আমার - আঁর<br />
                    ১৫.তোমার - তোঁয়ার<br />
                    ১৬.তার - ইতের(ছেলে)/ইতির(মেয়ে)<br />
                    ১৭.আমাকে - আঁরে<br />
                    ১৮.তোমাকে - তোঁয়ারে <br />
                    ১৯.তাকে - ইতেরে(ছেলে)/ইতিরে(মেয়ে)<br />
                    ২০.আমাদের - আঁরো<br />
                    ২১.তোমাদের - তোঁয়ারো<br />
                    ২২.তাদের - ইতেরো<br />
                </p>
            </div>

            <div className="columns-1 bg-purple-500 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl ">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
               <p className="text-2xl text-white pt-5 font-semibold"> ---প্রশ্ন----
                </p>
              
                
                                 ১. কোথায় - হন্ডে <br />
                                ২.কোনদিক - হইক্কে/হন্দি<br />
                                ৩. কি বলছে - কি হদ্দে <br />
                                ৪. নতুন নাকি   - নোয়া না<br />
                                ৫. আর কে -  আর হন<br />
                                ৬. এটা কি   - ইবে কিতারা<br />
                                ৭.  কি করবো  - কিত্তাম/ কি গইজ্জুম/কিজ্জুম<br />
                                ৮. কখন   - হত্তে <br />
                                ৯. কেনো  - কিল্লে <br />
                                ১০. কি করবে?   - কিরিবে/ কি গরিবে<br />
                                ১১. কি চাও   - কি চ<br />
                                ১২. কিভাবে বলবো  - কেনে হইয়্যুম<br />
                                ১৩. কেমন - ক্যান
                                ১৪. কখনো - হনোসমত <br />
                                ১৫. কয়বার - হ'বার <br />
                                ১৬. কিরকম - হন ডইল্লে/ হইল্লে<br />
                                ১৭. কোত্থেকে - হত্তুন <br />
                                ১৮. কে বলেছে - হনে হইয়্যি <br />
                                ১৯. কে বলবে - হনে হইবু<br />
                                ২০. কে এসেছে - হন আইস্যি<br />
                                ২১. কে গেলো - হন গেইয়্যি<br />
                                ২২. কার সাথে - হার লয়<br />
                                ২৩. কারা যাবে - হারা যাইবু<br />
                                ২৪. কি বলবো - কি হইতাম<br />
                                ২৫. কি করতে চাও - কিত্তে চ<br />
                                ২৬. কোথায় গেলো - হডে গেইয়্যি<br />
                                ২৭. এমন কেনো - এ্যান হা<br />
                                ২৮. কি হবে - কি'বুু / কি অইবু<br />
                                ২৯. কি নিবে - কি লইবে<br />
                                ৩০. কে নিবে - হনে লইবু<br />
                                
                           
                </p>
            </div> 

            <div className="columns-1 bg-blue-800 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl ">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
           
              
                                ১. ঘরে-বাইরে -   ঘরে-বা'রে <br />
                                ২. কাপড়  - হর<br />
                                ৩. কামড় - হঁর<br />
                                ৪. যুক্তিহীন - আফাদা<br />
                                ৫. যেমন-তেমন - যেন-তেন<br />
                                ৬. এসিডিটি - চুনোফোরা ড্যাক<br />
                                ৭. অনিয়ম - আফাতাইজ্জে<br />
                                ৮.  সাগর - দইজ্জে<br /><br />
                                ৯.  সবকিছু - বিয়াজ্ঞিন<br />
                                ১০. অজানা - আন্নো<br />
                                ১১. তামাশা - টঁ'শা<br />
                                ১২.  ঝগড়া-ফ্যাসাদ - হইজ্জে-ফজাত<br />
                                ১৩. সাথে - ওঁয়ারে / লগে <br />
                                ১৪.  মতোন/ মতো - ডইল্লে<br />
                                ১৫. কথা - হতা<br />
                                ১৬. বিরতিহীন - একদুইজ্জে<br /> 
                                ১৭. অল্প - থুরা<br />
                                ১৮. গরম - উইট্টে<br />
                                ১৯. অনর্থক - আপছারাপ/আচ্ছারাপ
                            
                           
                </p>
            </div> 
           
            {/* <p className="text-2xl text-teal-700 pt-5 font-semibold">  ----- দিক সম্পর্কিত ----
                    <br />
                    </p> */}

            <div className="columns-1 bg-amber-400 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl ">
        
                <p style={{ display: 'flex', flexDirection: 'column' , textAlign:'justify', marginLeft:'50px'}}>
            
                                
                            ১. উত্তর - ওতোর <br />
                            ২. দক্ষিণ - দইন <br />
                            ৩. পূর্ব - ফুউ <br />
                            ৪. পশ্চিম - ফচিন <br />
                            ৫. উপরে - উরে/ আগারে /আলাইঙ্গে<br />
                            ৬. পাশে - ঢাগে <br />
                            ৭. পিছনে -পিছুদি <br />
                            ৮. সামনে - আগোদি/ ছাম্মে <br />
                            ৯. কোণা - হোণা <br />
                            ১০. চারপাশ - চারিমিক্কে / চাইরো কিনেদ্দি <br />
                            ১১. যেদিকে-সেদিকে   - যিক্কে-ইক্কে <br />
                            ১২. যেখানে-সেখানে   - যেন্ডে-এন্ডে <br />
                </p>
            </div> 

            {/* <p className="text-2xl text-teal-700 pt-5 font-semibold">   ---- সময় সম্পর্কিত -----
                <br />
                </p> */}
              
            <div className="columns-1 bg-teal-700 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
              

                    ১. সকাল - ফজরত / বিয়েন্নে ফজর <br />
                    ২. দুপুর - দুইজ্জে <br />
                    ৩.  বিকেল - বিয়েল <br />
                    ৪. সন্ধ্যা - আঁজইন্নে  <br />
                    ৫. রাত - রাইত  <br />
                    ৬. মাঝরাত - ফুঁ-আইত্তে <br />
                    ৭. আজ - আজিয়ে  <br />
                    ৮. কাল - হালিয়ে  <br />
                    ৯. আগামীকাল - আইজ্জে হাইল <br />
                    ১০.. পরশু - পশ্শু / ফরোউ <br />
                    ১১. সেদিন - এদিনে <br />
                    ১২.. যখন - যেত্তে  <br />
                    ১৩.. তখন - এত্তে <br />
                            
                           
                </p>
            </div> 

            {/* <p className="text-2xl text-teal-700 pt-5 font-semibold">   ----- নিত্যদিন -----
                <br />
                </p> */}
   {/* <p className="text-2xl text-teal-700 pt-5 font-semibold"> ----- অঙ্গপ্রত্যঙ্গ ---- <br /></p> */}
   <div  className="columns-1 bg-pink-400 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl ">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
               
                    ১. মগজ - মঅছ<br />
                    ২. মুখ - থোঁরা /চেঁরা<br />
                    ৩. কপাল - হোয়াল<br />
                    ৪. কান - হান<br />
                    ৫. জিহ্বা - জিলকে<br />
                    ৬. গলা - টোন্ডরা<br />
                    ৭. চোয়াল - চাবা<br />
                    ৮. হাত - আত<br />
                    ৯. আঙ্গুল - অউল<br />
                    ১০. গিড়া - গিরে<br />
                    ১১. কব্জি - হব্জি<br />
                    ১২. কনুই - হুনুই<br />
                    ১৩. বাহু - ডোঁয়া<br />
                    ১৪. পা - ঠ্যাং<br />
                    ১৫. গোড়ালি - মুরি<br />
                    ১৬.হাঁটু - আঁডু<br />
                    ১৭. কোমড় - কেঁইল<br />
                </p>
            </div>
           
            <div className="columns-1 bg-red-500 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl  ">
                <p style={{ display: 'flex', flexDirection: 'column' }}>
               <p className="text-2xl text-white  pt-5 font-semibold">   ------ জীব ও পশু ------
                <br />
                </p>
              
                                                
                                    ১.  মুরগী - কুরো <br />
                                    ২. ডিম পাড়া মুরগী - কুঁরি <br />
                                    ৩.  বাচ্চাসহ মুরগী- ছরমা কুঁরি<br />
                                    ৪. মোরগ - লাতা কুরো <br />
                                    ৫. ছাগল - ছ'ল<br />
                                    ৬. মহিশ - মইশ <br />
                                    ৭. হাঁস - আঁস<br />
                                    ৮. রাজহাঁস - লাদা আঁস<br />
                                    ১০. কুকুর - কুত্তো<br />
                                    ১১. বিড়াল - বিলেই <br />
                                    ১২. বন বিড়াল - মুয়াফ<br />
                                    ১৩. সাপ - আফ <br />
                                    ১৪. শিয়াল - ইয়েল <br />
                                    ১৫. হাতি - আঁতি <br />
                                    ১৬. ইদুর - উন্দুর <br />
                                    ১৭. কুমির - কুঁইর <br />
                                    ১৮. কেঁচো - কেচ্ছো<br />
                                    ১৯. শামুক - অঁউক<br />
                                    ২০. ঘোড়া - ঘোরা <br />
                                    ২১. গরুর বাছু - ডেহা<br />
                                    ২৩. ময়না - মনা<br />
                                    ২৪. কোয়েল - হঁউল
                             </p>
            </div> 
            <div className="columns-1 bg-blue-500 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl  ">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
               <p className="text-2xl text-white pt-5 font-semibold">   ----- কর্ম ও পেশা ----
                <br />
                </p>
              
               
                
                                ১. ডাক্তার - ডাক্তর<br />
                                ২. মাস্টার - মাশ্টর <br />
                                ৩. জেলে - জাইল্লে <br />
                                ৪. গোয়ালী - গোয়াইল্লে <br />
                                ৫. বাবুর্চি - বস্তি <br />
                                ৬. কাজের লোক - হাম্ম মানুষ <br />
                                ৭. ব্যবসাী/ ব্যাপারী - বেয়ারি <br />
                                ৮. ড্রাইভার - ডেরাভার <br />
                                ৯. সরকারি চাকুরীজীবী - সরগারী চইজ্জে <br />
                                ১০. ঠিকাদার - টিয়াদার
                             </p>
            </div> 
            <div className="columns-1 bg-rose-500 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl  ">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
               <p className="text-2xl text-white pt-5 font-semibold"> আসবাবপত্র ও সামগ্রী 
                <br />
                </p>
              
               
                
                              
                                        ১. চেয়ার - ছিয়ার<br />
                                        ২. বিছানা - চইর / ফালং /বিচেন<br />
                                        ৩. দরজা - দজ্জা <br />
                                        ৪. চৌকাঠ - দজ্জার বাডং <br />
                                        ৫. শেকল - ছিউল<br />
                                        ৬. মাদুর - মাদুরৌ<br />
                                        ৭.হাতপাখা - বিছেন <br />
                                        ৮. হামানদিস্তা - অউনদিস্তে<br />
                                        ৯. শিখর - আগারে / আলাইঙ্গে<br />
                                        ১০. খাতা - হাতা <br />
                                        ১১. কলম - হলম<br />
                                        ১২. শার্পনার - ছাচ'নি <br />
                                        ১৩. চা-ছাকনি  - চা ছ'নি<br />
                                        ১৪. ঢাকনা - ছেনি <br />
                                        ১৫. পেয়ালা - ফেঁ'লা <br />
                                        ১৬. কাপ - হাপ
                             </p>
            </div> 
            <div className="columns-1 bg-teal-700 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl">
                <p style={{ display: 'flex', flexDirection: 'column', textAlign:'justify', marginLeft:'50px' }}>
               <p className="text-2xl text-white pt-5 font-semibold"> ---- সমন্ধ সম্পর্ক -----
                <br />
                </p>
              
               
                
                              
                                    
                                    ১. বৌ - মৌগ <br />
                                    ২. জামাই - নেক  <br />
                                    ৩. শ্বশুর - অউর <br />
                                    ৪. শ্বাশুড়ি - অউরি <br />
                                    ৫. শ্যালক/শ্যালিকা    - আলা/আলি <br />
                                    ৬. বৌ-এর বড়ো ভাই/বোন    - অৌন্দি/ দেচ্ছচ <br />
                                    ৭. বরের বড়ো ভাই/বোন  - ভাইর/ নন্যস <br />
                                    ৮. বরের ছোট ভাই/বোন - দি'অর/নন'ন <br />
                                    ৯. জ্যাঠা -   ড'বা /জেডা <br />
                                    ১০. মেজ চাচা  - মাইজ্জে'বা <br />
                                    ১১. খালা - হালা/হালাম্মা  <br />
                                    ১২. মামা - মৌ <br />
                                    ১৩. মামি  - মাঈ <br />
                                    ১৪. বোন   -  বব্বুু <br />
                                    ১৫. ভাই -  বদ্দা  <br />
                                    ১৬. ভাগ্নে/ভাগ্নী   - ভাইনে/ভাইনি
                             </p>
            </div> 
            <div className="columns-1 bg-yellow-300 text-white lg:w-11/12 text-center p-5 rounded-lg shadow-2xl">
                <p style={{ display: 'flex', flexDirection: 'column' , textAlign:'justify', marginLeft:'50px'}}>
               <p className="text-2xl text-white pt-5 font-semibold">  ফল,  পিঠা ও শাকসবজি
                <br />
                </p>
              
               
                
                              
                                    
                                                       
                                        ১. কাঁঠাল - হাট্টল<br />
                                        ২. পেয়ারা - গোঁয়াছি/গোঁয়াই<br />
                                        ৩. লেবু - হঁজি<br />
                                        ৪. জব্বুরা - তরুমজৌ<br />
                                        ৫. নারকেল - নাইরকুল<br />
                                        ৬. 

                                        ১. ভাবা পিঠা - ঢু'পিডে<br />
                                        ২. পাটিসাপটা - হাফাইন্নে পিডে/ফাডিআপ্টা<br />
                                        ৩. নকশা পিঠা - ছাচ ফাক্কন<br />
                                        ৪. ছিট পিঠা - আত ঝারা পিডে<br />
                                        ৫. রুটি - লুডি পিডে<br />

                                        ১. বেগুন - বাইউন<br />
                                        ২. বরবটি - বরহডি/লইব্যে<br />
                                        ৩. শিম - ছঁই<br />
                                        ৪. মিষ্টি কুমড়ো - মিডে হদু<br />
                                        ৫. লাউ - যাইদ হদু<br />
                                        ৭. কাঁচা কলা - আনাজি কেলা<br />
                                        ৮. টমেটো - হট্টা বাইউন<br />
                                        ৯. করলা - হরোলা<br />
                                        ১০. পেঁয়াজ - পিঁয়েজ<br />
                                        ১১. রসুন - রৌন
                             </p>
            </div> 


                
            </div> 
        </div>
    
    );
};

export default WordMeaning;