import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

import Rotate from './Rotate'
import ImageSlider from './ImageSlider'
import HomePage from './HomePage'
import FeaturesSection from './FeaturesSection'
import IconContainer from './IconContainer'
import NewArrivals from './NewArrivals'
import Home from './Home'
import Deal from './Deal'
import ExploreBooks from './ExploreBooks'
import ClientReviews from './ClientReviews'
import Blogs from './Blogs'


const RouterLayout = () => {
  return (
    <div>
      <Rotate/>
      <Header/>
      <ImageSlider/>
      <HomePage/>
      <IconContainer/>
      <FeaturesSection/>
    <Home/>
      <NewArrivals/>
      <Deal/>
      <ExploreBooks/>
      <ClientReviews/>
      <Blogs/>
      <Outlet/>
      
    </div>
  )
}

export default RouterLayout
