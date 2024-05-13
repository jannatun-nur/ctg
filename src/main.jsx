import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Translator from './Translator/Translator.jsx';
import WordMeaning from './WordMeaning/WordMeaning.jsx';
import Proverbs from './Proverbs/Proverbs.jsx';
import About from './About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        
      },
      {
        path:'/translator',
        element:<Translator/>
      },
      {
        path:'/wordmeaning',
        element:<WordMeaning/>
      },
      {
        path:'/proverbs',
        element:<Proverbs/>
      },
      {
        path:'/about',
        element:<About/>
      }








    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
