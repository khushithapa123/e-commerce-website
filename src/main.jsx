import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './Shop/Shop.jsx'
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import { About } from './About/About.jsx';
import Contact from './Contact/Contact.jsx';





const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {   path:"/", 
        element: <Home/>},
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog/>
      },
      {
        path: "/Shop",
        element:<Shop/>
      },
      {
        path: "/Shop/:id",
        element: <SingleProduct/>
      },
      {
         path: "/cart-page",
         element: <CartPage/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
     
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginDemo/>
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
