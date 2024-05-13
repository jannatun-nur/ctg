import { useState } from "react";



const Translator = () => {

    const [banglaText, setBanglaText] = useState('');
    const [chittagongText, setChittagongText] = useState('');
  
    const handleTranslate = () => {
      // Simple translations for demonstration purposes
      const translations = {
        'ওরা': 'ঐতারা',
        'কেমন': ' ক্যান ',
        'নেই' : 'নাই'
      };
      // const collections = [
      //   {input:"",output:""}
      //   {input:"",output:""}
      //   {input:"",output:""}
      //   {input:"",output:""}
      // ]
  
      // const new = collections.map(c=>c.includes(c.input))
      // console.log(new);
      // Get translation or set default message
      const translatedText = translations[banglaText] || 'Translation not available';
      setChittagongText(translatedText);
    };

    
    return (
        <div>
          <p className="text-center font-semibold font-serif my-3 text-2xl lg:text-4xl">Bangla to Chittagong</p>
             <div>
     <p></p>
     <div className="bg-rose-700 text-gray-800 lg:w-8/12 h-60 lg:mx-auto mt-6 p-6 lg:h-64 rounded-md">
     <input
        placeholder="Enter text in Bangla"
        value={banglaText}
        onChange={(e) => setBanglaText(e.target.value)}
        className=" w-full lg:w-11/12 lg:ml-7 h-36 lg:h-44 rounded-md text-center text-xl lg:text-2xl"
      />
     <button className="mt-4 px-4 text-2xl text-white  hover:bg-white hover:text-teal-700 hover:rounded-ss-md" onClick={handleTranslate}>Translate</button>
     </div>
     
     
     <div  className="bg-white border border-blue-950 h-56 text-gray-800 lg:w-8/12 lg:mx-auto mt-6 p-6 lg:h-56 rounded-md">
        
      <p className="text-blue-950 font-bold text-xl">Translated Text</p>
      <p className="mt-7 text-xl lg:mt-6 lg:ml-64 lg:text-2xl">{chittagongText}</p>
     </div>
    </div>
        </div>
    );
};

export default Translator;