import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon, ShareIcon } from "@heroicons/react/24/outline";

const Member = ({
  profliePic,
  profileAlt,
  RecipeTitle,
  username,
  userIdea,
  RecipeImage,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
          src={profliePic}
          alt={profileAlt}
        />
        <div>
          <h4 className="font-bold text-gray-900 leading-tight">
            {RecipeTitle}
          </h4>
          <p className="text-sm text-gray-500">by {username}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow italic">
        "{userIdea}"
      </p>

      {RecipeImage && (
        <div className="relative h-48 mb-4 rounded-xl overflow-hidden group">
          <img
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            src={RecipeImage}
            alt={RecipeTitle}
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium group">
          <HandThumbUpIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span>2 Likes</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium group">
          <ShareIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Member;
