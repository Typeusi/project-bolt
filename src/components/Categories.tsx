import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Men's Collection",
      description: "Sophisticated menswear for the modern gentleman",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      items: "250+ Items"
    },
    {
      name: "Women's Collection",
      description: "Elegant designs for the contemporary woman",
      image: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      items: "340+ Items"
    },
    {
      name: "Accessories",
      description: "Perfect finishing touches for any outfit",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      items: "120+ Items"
    },
    {
      name: "Premium Collection",
      description: "Luxury pieces for special occasions",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      items: "80+ Items"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {category.name}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-300 delay-150 mb-2">
                  {category.description}
                </p>
                <span className="text-xs opacity-0 group-hover:opacity-75 transition-opacity duration-300 delay-200">
                  {category.items}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                  {category.items}
                </p>
              </div>

              <button className="absolute inset-0 w-full h-full bg-transparent hover:bg-black/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-inset"></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;