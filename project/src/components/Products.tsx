import React, { useState } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart, onProductClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Wool Coat",
      price: 299,
      originalPrice: 399,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.8,
      reviews: 124,
      category: "Outerwear",
      isSale: true
    },
    {
      id: 2,
      name: "Cashmere Sweater",
      price: 189,
      image: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.9,
      reviews: 89,
      category: "Knitwear",
      isNew: true
    },
    {
      id: 3,
      name: "Silk Blouse",
      price: 129,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Tops"
    },
    {
      id: 4,
      name: "Designer Jeans",
      price: 149,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.6,
      reviews: 203,
      category: "Denim"
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: 449,
      originalPrice: 599,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.9,
      reviews: 67,
      category: "Outerwear",
      isSale: true
    },
    {
      id: 6,
      name: "Summer Dress",
      price: 99,
      image: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.5,
      reviews: 189,
      category: "Dresses",
      isNew: true
    },
    {
      id: 7,
      name: "Tailored Blazer",
      price: 249,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.8,
      reviews: 95,
      category: "Formal"
    },
    {
      id: 8,
      name: "Luxury Handbag",
      price: 329,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      rating: 4.9,
      reviews: 112,
      category: "Accessories"
    }
  ];

  const filters = ['All', 'Outerwear', 'Knitwear', 'Tops', 'Denim', 'Dresses', 'Formal', 'Accessories'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully selected pieces that define contemporary fashion
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => onProductClick(product)}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                      SALE
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      wishlist.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Quick Add Button */}
                <button
                  onClick={() => onAddToCart(product)}
                  className="absolute inset-x-4 bottom-4 bg-gray-900 text-white py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-gray-800"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                <h3 
                  className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                  onClick={() => onProductClick(product)}
                >
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;