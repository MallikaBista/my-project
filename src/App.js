
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import RouterLayout from './features/component/RouterLayout';
import HomePage from './features/component/HomePage';

 import Home from './features/component/Home';
 import Card1 from './features/cards/Card1';
// import Card2 from './features/cards/Card2';
// import Card3 from './features/cards/Card3';
// import Card4 from './features/cards/Card4';
// import Card5 from './features/cards/Card5';
// import Card6 from './features/cards/Card6';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout/>,
    children: [
       {index:true,element:<Home/>},
        {path:'card1',element:<Card1/>},
      //  {path:'card2',element:<Card2/>},
      //  {path:'card3',element:<Card3/>},
      //  {path:'card4',element:<Card4/>},
      //  {path:'card5',element:<Card5/>},
      //  {path:'card6',element:<Card6/>},
      {path:'homepage',element:<HomePage/>},
      
      
     
    ],
  },
]);

function App(){
  return(
    <RouterProvider router={router} />
  )
}
export default App