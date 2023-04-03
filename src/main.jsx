import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Countries from './component/Countries/Countries';
import SingleCountry from './component/SignleCountry/SingleCountry';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Countries></Countries>,
        loader: () => fetch(`https://restcountries.com/v3.1/all`)
      },
      {
        path: '/country/:countryId',
        element: <SingleCountry></SingleCountry>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
