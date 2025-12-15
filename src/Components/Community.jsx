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
    <section id="community" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold text-lg uppercase tracking-wide mb-2">
            Community
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Cooks Are Saying
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of food lovers sharing their culinary masterpieces
            and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Member
            profliePic={LadyRudy}
            profileAlt="Lady Rudy"
            RecipeTitle="Spaghetti Bolognesse"
            username="Lady Rudy"
            userIdea="I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine."
            RecipeImage={SpaghettiBolognesse}
          />
          <Member
            profliePic={EmilyRose}
            profileAlt="Emily Rose"
            RecipeTitle="Roasted Chicken"
            username="Emily Rose"
            userIdea="I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that."
            RecipeImage={RoastedChicken}
          />
          <Member
            profliePic={SusanH}
            profileAlt="Susan H"
            RecipeTitle="Vegetable Pot Pie"
            username="Susan H"
            userIdea="I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe exceeded my expectations."
            RecipeImage={VegetablePot}
          />
          <Member
            profliePic={LilacLaura}
            profileAlt="Lilac Laura"
            RecipeTitle="Fresh Garden Salad"
            username="Lilac Laura"
            userIdea="I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece."
            RecipeImage={FreshGarden}
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
