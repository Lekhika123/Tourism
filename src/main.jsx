import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import StatePage from './Components/Pages/StatePage.jsx';
import Destination from './Components/Pages/Destination.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/states",
            element: <StatePage/>,
        },
        {
            path: "/worship-place/:id",
            element: <Destination/>,
        }  
      
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
