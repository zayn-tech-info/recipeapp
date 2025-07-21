import React from "react";
import Member from "./Member";
import EmilyRose from "../assets/Community/Emily Rose.png";
import LadyRudy from "../assets/Community/Lady Rudy.png";
import LilacLaura from "../assets/Community/Lilac Laura.png";
import SusanH from "../assets/Community/Susan H.png";
import FreshGarden from "../assets/Community/Fresh Garden Salad.png";
import RoastedChicken from "../assets/Community/Roasted Chicken.png";
import SpaghettiBolognesse from "../assets/Community/Spaghetti Bolognesse.png";
import VegetablePot from "../assets/Community/Vegetable Pot Pie.png";

const Community = () => {
  return (
    <div className="mx-auto my-20 max-w-7xl px-2 sm:px-6 lg:px-8 mt-15">
      <div className="flex justify-center my-25 mx-auto">
        <p className="text-5xl font-medium">Figma Our Community</p>
      </div>
      <div className="grid grid-cols-2 gap-25">
        <Member
          profliePic={LadyRudy}
          profileAlt="Lady Rudy"
          RecipeTitle="Spaghetti Bolognesse"
          username="Lady Rudy"
          userIdea="I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home."
          RecipeImage={SpaghettiBolognesse}
        />
        <Member
          profliePic={EmilyRose}
          profileAlt="Emily Rose"
          RecipeTitle="Roasted Chicken"
          username="Emily Rose"
          userIdea="I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow"
          RecipeImage={RoastedChicken}
        />
        <Member
          profliePic={SusanH}
          profileAlt="Susan H"
          RecipeTitle="Vegetable Pot Pie"
          username="susan H"
          userIdea="I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations."
          RecipeImage={VegetablePot}
        />
        <Member
          profliePic={LilacLaura}
          profileAlt="Lilac Laura"
          RecipeTitle="Fresh Garden Salad"
          username="Lilac Laura"
          userIdea="I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level."
          RecipeImage={FreshGarden}
        />
      </div>
    </div>
  );
};

export default Community;
