import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import Food from '../Components/Food'
import About from '../Components/About'
import Community from '../Components/Community'
import Download from '../Components/Download'
import Footer from '../Components/Footer'
import Search from '../Components/Search'
// import Search from '../Components/Search'

 
const Home = ({foodData, setFoodData}) => {
  return (
	<div>
		<NavBar foodData={foodData} setFoodData={setFoodData} />
		<HeroSection/>
		<Search setFoodData={setFoodData} foodData={foodData} />
		<Food foodData={foodData} setFoodData={setFoodData} />
		<About/>
		<Community/>
		<Download/>
		<Footer/>
	</div>
  )
}

export default Home