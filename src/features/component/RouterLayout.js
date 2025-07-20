import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import Rotate from './Rotate'
import ImageSlider from './ImageSlider'
import HomePage from './HomePage'
import FeaturesSection from './FeaturesSection'

const RouterLayout = () => {
  return (
    <div>
      <Rotate/>
      <Header/>
      <ImageSlider/>
      <HomePage/>
      <FeaturesSection/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RouterLayout
