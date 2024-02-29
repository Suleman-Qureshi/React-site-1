import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Feature from './component/Feature';
import Pricing from './component/Pricing';
import Blog from './component/Blog';
import ContactUs from './component/ContactUs';
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },{
        path:'Feature',
        element:<Feature/>,
      },{
        path:'Pricing',
        element:<Pricing/>,
      },{
        path:'Blog',
        element:<Blog/>,
      },{
        path:'ContactUs',
        element:<ContactUs/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
