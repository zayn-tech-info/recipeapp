import React from 'react'
import logo from "../assets/logo.png"
import Salad from "../assets/Salad.png"
import FriedEggs from "../assets/Fried Eggs.png"

const Footer = () => {
  return (
	<footer className='footer my-10 mt-40 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
		<div className='flex mb-5 gap-1 text-xl font-medium text-[#046E1B]'>
			<img src={logo} alt="" />
			<p>Recipedia</p>
		</div>
		<div className='grid grid-cols-4'>
			<div className='col-span-1'>
				<p className='text-xl font-bold mb-3'>Menu</p>
				<ul className='space-y-1 font-medium'>
					<li className='text-[#046E1B]'>Home</li>
					<li>Recipe</li>
					<li>Community</li>
					<li>About Us</li>
				</ul>
			</div>
			<div className='col-span-1'>
				<p className='text-xl font-bold mb-3'>Categories</p>
				<ul className='space-y-1 font-medium'>
					<li>Breakfast</li>
					<li>Lunch</li>
					<li>Dinner</li>
					<li>Desert</li>
					<li>Drink</li>
				</ul>
			</div> 
			<div className='col-span-1'>
				<p className='text-xl font-bold mb-3'>Social</p>
				<ul className='space-y-1 font-medium'>
					<li>Instagram</li>
					<li>Twitter</li>
					<li>YouTube</li>
					<li>FaceBook</li>
				</ul>
			</div>
			<div>
				<div>
					<div className='flex'>
						<p className='font-medium text-2xl'>Sign up for our Newsletter</p>
						<img src={FriedEggs} />
					</div>
					<div className='mt-10 flex justify-between border-b-1 pb-3 border-gray-400'>
						<input className='border-0 outline-0' placeholder='Your Email Address' type="text" />
						<button className='bg-[#F79F1A] rounded-xl px-5 py-2 text-white'>Submit</button>
					</div>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer