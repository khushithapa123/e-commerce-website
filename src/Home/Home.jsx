import React from 'react'
import Banner from './Banner'
import HomeCatergory from './HomeCatergory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import Location from './Location'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCatergory/>
        <CategoryShowCase/>
        <Register/>
       <Location/>
        <AboutUs/>
        <AppSection/>
        {/* <Sponsor/> */}
    </div>
  )
}

export default Home
