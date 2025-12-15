import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white pt-16 pb-8"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
  
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍔</span>
              <span className="text-2xl font-bold tracking-tight text-white">
                Recipeida
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Discover, try, and share delicious recipes from around the world.
              Join our community of food lovers.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Subscribe to our newsletter
              </h3>
              <form className="mt-2 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Menu
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {["Home", "Recipes", "Community", "About Us"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Categories
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Social
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {["Instagram", "Twitter", "YouTube", "Facebook"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 Recipeida, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
