import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const App = () => {
  const [session, setSession] = useState(null);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 89.99, category: 'audio', image: 'https://placehold.co/300x200?text=Headphones' },
    { id: 2, name: 'Smartwatch Pro', price: 199.99, category: 'wearables', image: 'https://placehold.co/300x200?text=Smartwatch' },
    { id: 3, name: '4K Ultra HD TV', price: 699.99, category: 'tv', image: 'https://placehold.co/300x200?text=TV' },
    { id: 4, name: 'Gaming Laptop', price: 1299.99, category: 'computers', image: 'https://placehold.co/300x200?text=Laptop' },
    { id: 5, name: 'Bluetooth Speaker', price: 59.99, category: 'audio', image: 'https://placehold.co/300x200?text=Speaker' },
    { id: 6, name: 'Tablet X', price: 349.99, category: 'computers', image: 'https://placehold.co/300x200?text=Tablet' },
    { id: 7, name: 'Noise-Canceling Earbuds', price: 129.99, category: 'audio', image: 'https://placehold.co/300x200?text=Earbuds' },
    { id: 8, name: 'Smart Fitness Band', price: 79.99, category: 'wearables', image: 'https://placehold.co/300x200?text=Band' },
  ];

  const categories = ['all', 'audio', 'wearables', 'tv', 'computers'];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === 'all' || product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!session) {
    return (
      <div className="container mx-auto p-4" style={{ maxWidth: '500px' }}>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'github']} // Optional: Add social providers
          redirectTo={window.location.origin} // Redirect to home page after login
        />
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">ElectroShop</h1>
            <div className="flex space-x-6 items-center">
              <p className="text-sm">Logged in as: {session.user.email}</p>
              <button
                onClick={() => supabase.auth.signOut()}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64"
              />
              <button className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.572 0 1.056.42 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-indigo-700 text-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex overflow-x-auto space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`capitalize px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-indigo-700 font-semibold'
                    : 'hover:bg-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Discover the Latest in Tech
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
              High-quality electronics at unbeatable prices. Upgrade your tech game today.
            </p>
            <button className="bg-white text-indigo-700 hover:bg-indigo-100 font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </section>

        {/* Products Grid */}
        <main className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ElectroShop</h3>
                <p className="text-gray-400">
                  Your one-stop destination for the latest electronics and gadgets.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About Us</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Audio</li>
                  <li>Wearables</li>
                  <li>TV & Home</li>
                  <li>Computers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-4">
                  Subscribe to get special offers and updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-full focus:outline-none w-full text-gray-800"
                  />
                  <button className="bg-indigo-600 text-white px-4 rounded-r-full hover:bg-indigo-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-700" />
            <div className="text-center text-gray-500">
              &copy; {new Date().getFullYear()} ElectroShop. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    );
  }
};

export default App;
