import React from 'react'
import AppleDl from "../assets/App Store Blue.png"
import GoogleDl from "../assets/Google Play Blue.png"
import iPhone15 from "../assets/iPhone 15 Pro.png"

const Download = () => {
  return (
	<div className='mx-auto my-20 max-w-7xl px-2 sm:px-6 lg:px-8 mt-15'>
		<div>
			<div>
				<div className='bg-[#046E1B] rounded-2xl my-15 grid grid-cols-2 p-10'>
					<div className='col-span- space-y-20'>
						<p className='text-4xl font-medium text-white'>Embrace the joy of cooking with get it on your iPhone or Android Your kitchen adventure begins now!</p>
						<div className='flex gap-10'>
							 <img className='cursor-pointer' src={AppleDl} />
							 <img className='cursor-pointer' src={GoogleDl}  />
						</div>
					</div>
					<div className='flex justify-end'>
						<img className='w-' src={iPhone15} alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Download