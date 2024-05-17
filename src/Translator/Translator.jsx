// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Translator = () => {
//   const [formData, setFormData] = useState({ input: '' });
//   const [translatedText, setTranslatedText] = useState('');

//   // Adjusted translations object
//   const translations = {
//     "আমি": "আঁই",
//     "তুমি": "তুঁই",
//     "আমরা": "আঁরা",
//     "আপনারা": "অনোরা",
//     "তোমরা": "তোঁয়ারা",
//     "সে": "ইতে",
//     "তারা": "ইতারা",
//     "সবাই": "বিয়াজ্ঞুন",
//     "কারা": "হারা",
//     "ওরা": "ঐতারা",
//     "এরা": "ইতারা",
//     "এদের": "ইতেরো",
//     "ওদের": "ঐতেরো",
//     "আমার": "আঁর",
//     "তোমার": "তোঁয়ার",
//     "তার": "ইতের",
//     "আমাকে": "আঁরে",
//     "তোমাকে": "তোঁয়ারে",
//     "তাকে": "ইতেরে",
//     "আমাদের": "আঁরো",
//     "তোমাদের": "তোঁয়ারো",
//     "সবকিছু":"বিয়াজ্ঞিন", 
//     "করছি": "গইজ্জি",
//     "আছেন":" আছোন",
//     "কেমন":"ক্যান",
//     "নিয়ে": "লই",
//   };


//   const multiWordTranslations = {
//     "তাদের সাথে": "ইতারার হুয়ারে",
//     "আসতে পারি": "আইত ফারি",
//     "খাবো না": " ন হাইয়্যুম",
//     "খাবার": "হানা",
//     "যায় নি": "ন যায়",
//     "তাদের সাথে": "ইতারার হুয়ারে",
//     "তার জন্য": "তারল্লায়",
//     "কেমন আছেন":" ক্যান আছোন"
//   };

 
//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setFormData({ input: value });
//   };

//   const handleClick = () => {
//     let inputText = formData.input;

//     // First, replace multi-word phrases
//     for (let phrase in multiWordTranslations) {
//       const regex = new RegExp(phrase, 'g');
//       inputText = inputText.replace(regex, multiWordTranslations[phrase]);
//     }

//     // Then, replace single words
//     let inputWords = inputText.split(/\s+/);
//     let translatedWords = inputWords.map(word => translations[word] || word);
//     let finalTranslatedText = translatedWords.join(' ');

//     setTranslatedText(finalTranslatedText);
//   };
//   return (
//     <div>
//       <p className="text-center font-semibold font-serif my-3 text-2xl lg:text-4xl">Bangla to Chittagong</p>

//       <div className='lg:flex lg:justify-evenly'>
//         <div className="bg-rose-700 text-gray-800 md:mx-auto lg:w-6/12 md:w-8/12 h-60 lg:mx-auto mt-6 p-6 lg:h-64 rounded-md">
//           <input
//             placeholder="Enter text in Bangla"
//             onChange={handleInputChange}
//             value={formData.input}
//             className="w-full lg:w-11/12 lg:ml-7 h-36 lg:h-44 rounded-md text-center text-xl lg:text-2xl"
//           />
//           <button 
//             className="mt-4 px-4 lg:text-2xl text-xl bg-amber-500 text-white rounded-md font-semibold"
//             onClick={handleClick}
//           >
//             Translate
//           </button>
//         </div>

//         <div className="bg-white border border-blue-950 text-gray-800 md:mx-auto md:w-8/12 lg:w-5/12 lg:mx-auto h-48 mt-6 p-6 lg:h-56 rounded-md">
//           <p className="text-blue-950 font-bold text-xl">Translated Text</p>
//           <p className="mt-7 text-xl lg:mt-6 lg:ml-64 lg:text-2xl">{translatedText}</p>
//         </div>
//       </div>

//       <section>
//         <p className='text-center lg:mt-10 lg:text-2xl mt-5 lg:mb0 mb-3'>
//           কাঙ্খিত ফলাফল পাচ্ছেন না?? 
//           <Link to="/wordmeaning">
//             <button className='text-rose-600'>আরো জানুন</button>
//           </Link>
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Translator;


import { useState } from 'react';
import { Link } from 'react-router-dom';

const Translator = () => {
  const [formData, setFormData] = useState({ input: '' });
  const [translatedText, setTranslatedText] = useState('');

  // Adjusted translations object for single words
  const translations = {
    "আমি": "আঁই",
    "তুমি": "তুঁই",
    "আমরা": "আঁরা",
    "আপনারা": "অনোরা",
    "তোমরা": "তোঁয়ারা",
    "সে": "ইতে",
    "তারা": "ইতারা",
    "সবাই": "বিয়াজ্ঞুন",
    "কারা": "হারা",
    "ওরা": "ঐতারা",
    "এরা": "ইতারা",
    "এদের": "ইতেরো",
    "ওদের": "ঐতেরো",
    "আমার": "আঁর",
    "তোমার": "তোঁয়ার",
    "তার": "ইতের",
    "আমাকে": "আঁরে",
    "তোমাকে": "তোঁয়ারে",
    "তাকে": "ইতেরে",
    "আমাদের": "আঁরো",
    "তোমাদের": "তোঁয়ারো",
    "সবকিছু": "বিয়াজ্ঞিন",
    "করছি": "গইজ্জি",
    "আছেন": "আছোন",
    "কেমন": "ক্যান",
    "নিয়ে": "লই"
  };

  // Adjusted translations object for multi-word phrases
  const multiWordTranslations = {
    "তাদের সাথে": "ইতারার হুয়ারে",
    "আসতে পারি": "আইত ফারি",
    "খাবো না": "ন হাইয়্যুম",
    "খাবার": "হানা",
    "যায় নি": "ন যায়",
    "তার জন্য": "তারল্লায়",
    "কেমন আছেন": "ক্যান আছোন"
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({ input: value });
  };

  const handleClick = () => {
    let inputText = formData.input;

    // First, replace multi-word phrases
    for (let phrase in multiWordTranslations) {
      const regex = new RegExp(phrase, 'g');
      inputText = inputText.replace(regex, multiWordTranslations[phrase]);
    }

    // Then, replace single words
    const words = inputText.split(/\s+/);
    const translatedWords = words.map(word => translations[word] || word);
    const finalTranslatedText = translatedWords.join(' ');

    setTranslatedText(finalTranslatedText);
  };

  return (
    <div>
      <p className="text-center font-semibold font-serif my-3 text-2xl lg:text-4xl">Bangla to Chittagong</p>

      <div className='lg:flex lg:justify-evenly'>
        <div className="bg-rose-700 text-gray-800 md:mx-auto lg:w-6/12 md:w-8/12 h-60 lg:mx-auto mt-6 p-6 lg:h-64 rounded-md">
          <input
            placeholder="Enter text in Bangla"
            onChange={handleInputChange}
            value={formData.input}
            className="w-full lg:w-11/12 lg:ml-7 h-36 lg:h-44 rounded-md text-center text-xl lg:text-2xl"
          />
          <button 
            className="mt-4 px-4 lg:text-2xl text-xl bg-amber-500 text-white rounded-md font-semibold"
            onClick={handleClick}
          >
            Translate
          </button>
        </div>

        <div className="bg-white border border-blue-950 text-gray-800 md:mx-auto md:w-8/12 lg:w-5/12 lg:mx-auto h-48 mt-6 p-6 lg:h-56 rounded-md">
          <p className="text-blue-950 font-bold text-xl">Translated Text</p>
          <p className="mt-7 text-xl lg:mt-6 lg:ml-64 lg:text-2xl">{translatedText}</p>
        </div>
      </div>

      <section>
        <p className='text-center lg:mt-10 lg:text-2xl mt-5 lg:mb0 mb-3'>
          কাঙ্খিত ফলাফল পাচ্ছেন না?? 
          <Link to="/wordmeaning">
            <button className='text-rose-600'>আরো জানুন</button>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Translator;
