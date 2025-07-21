import React from 'react'
import Star from "../assets/Community/star.png"
import LikeThumb from "../assets/Community/LikeThumb.png"
import Share from "../assets/Community/Share.png"

const Member = ({profliePic, profileAlt, RecipeTitle, username, userIdea, RecipeImage}) => {
  return (
	<div>
		<div>
			<div className='space-y-4'>
				<div className='flex gap-3'>
					<img className='rounded-full' src={profliePic} alt={profileAlt} />
					<div>
						<p className='font-medium text-xl'>{RecipeTitle}</p>
						<p className='opacity-50'>{username}</p>
					</div>
				</div>
				<img src={Star} alt="Star" />
				<p className='opacity-80 h-20'>{userIdea}</p>
				<img className='rounded-xl' src={RecipeImage} alt="" />
				<div className='flex gap-10 items-center'>
					<p className='flex items-center gap-5'>
					 <img className='cursor-pointer' src={LikeThumb} alt="Like Thumb" />
					 <p className='font-medium'>2</p>
					</p>
					<p className='flex items-center gap-5'>
					 <img className='cursor-pointer' src={Share} alt="Share" />
					 <p className='font-medium'>Share</p>
					</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Member