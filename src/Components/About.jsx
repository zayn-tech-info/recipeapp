 import Bread from "../assets/Bread.png";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("/src/assets/About-bg.png")' }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 transform transition-transform duration-500 hover:-translate-y-2">
              <p className="text-xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600 font-medium">
                Quick Food Recipes That are Easy To Do!
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-primary font-semibold text-lg uppercase tracking-wide mb-2">
              About Us
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              The Heart and Soul of Our Culinary Community
            </h3>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Our recipes are crafted with passion and precision, reflecting our
              commitment to providing you with memorable and delightful dining
              experiences. Whether you're a beginner or a pro, we have something
              for everyone.
            </p>

            <div className="relative p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <img
                src={Bread}
                alt="Bread"
                className="w-16 h-16 object-contain absolute -top-8 -right-4 drop-shadow-lg"
              />
              <p className="text-gray-700 italic font-medium">
                "Cooking is about creating something delicious for someone
                else."
              </p>
            </div>

            <button className="mt-8 bg-primary hover:bg-primary-hover text-white text-lg font-semibold px-8 py-3 rounded-full transition-all shadow-lg shadow-orange-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
