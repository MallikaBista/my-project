import React from 'react'
import HomeImage from"../Images/Homebar.jpeg";
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';
import Card3 from '../cards/Card3';
import Card4 from '../cards/Card4';
import Card5 from '../cards/Card5';
import Card6 from '../cards/Card6';
const Home = () => {
  return (
    <div className="w-full mt-0">
      <div className='flex flex-row m-4 space-x-4 '>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/>
     
      </div>
      <img
        src={HomeImage}
        alt="Homepage Banner"
        className="w-full h-[500px]  "
      />
       
    </div>
  )
}

export default Home
