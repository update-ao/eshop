<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ElectroShop</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com "></script>

  <!-- React & ReactDOM -->
  <script crossorigin src="https://unpkg.com/react @17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom @17/umd/react-dom.development.js"></script>

  <!-- Babel for JSX support -->
  <script src="https://unpkg.com/ @babel/standalone/babel.min.js"></script>

  <style>
    /* Optional: Improve mobile scrolling */
    html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Root div where React app will mount -->
  <div id="root"></div>

  <!-- React App Script -->
  <script type="text/babel">

    const { useState } = React;

    const App = () => {
      const [cart, setCart] = useState([]);
      const [activeCategory, setActiveCategory] = useState('all');
      const [searchTerm, setSearchTerm] = useState('');

      const products = [
        { id: 1, name: 'Wireless Headphones', price: 89.99, category: 'audio', image: 'https://placehold.co/300x200?text=Headphones ' },
        { id: 2, name: 'Smartwatch Pro', price: 199.99, category: 'wearables', image: 'https://placehold.co/300x200?text=Smartwatch ' },
        { id: 3, name: '4K Ultra HD TV', price: 699.99, category: 'tv', image: 'https://placehold.co/300x200?text=TV ' },
        { id: 4, name: 'Gaming Laptop', price: 1299.99, category: 'computers', image: 'https://placehold.co/300x200?text=Laptop ' },
        { id: 5, name: 'Bluetooth Speaker', price: 59.99, category: 'audio', image: 'https://placehold.co/300x200?text=Speaker ' },
        { id: 6, name: 'Tablet X', price: 349.99, category: 'computers', image: 'https://placehold.co/300x200?text=Tablet ' },
        { id: 7, name: 'Noise-Canceling Earbuds', price: 129.99, category: 'audio', image: 'https://placehold.co/300x200?text=Earbuds ' },
        { id: 8, name: 'Smart Fitness Band', price: 79.99, category: 'wearables', image: 'https://placehold.co/300x200?text=Band ' },
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

      return (
        React.createElement('div', { className: 'min-h-screen bg-gray-50 text-gray-800' },
          // Header
          React.createElement('header', { className: 'bg-white shadow-md sticky top-0 z-50' },
            React.createElement('div', { className: 'container mx-auto px-4 py-4 flex justify-between items-center' },
              React.createElement('h1', { className: 'text-2xl font-bold text-indigo-600' }, 'ElectroShop'),
              React.createElement('div', { className: 'flex space-x-6 items-center' },
                React.createElement('input', {
                  type: 'text',
                  placeholder: 'Search products...',
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: 'px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64'
                }),
                React.createElement('button', { className: 'relative' },
                  React.createElement('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    strokeWidth: 1.5,
                    stroke: 'currentColor',
                    className: 'w-6 h-6'
                  },
                    React.createElement('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      d: 'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.572 0 1.056.42 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    })
                  ),
                  cart.length > 0 && React.createElement('span', {
                    className: 'absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'
                  }, cart.length)
                )
              )
            )
          ),

          // Navigation
          React.createElement('nav', { className: 'bg-indigo-700 text-white shadow-md' },
            React.createElement('div', { className: 'container mx-auto px-4 py-3 flex overflow-x-auto space-x-4' },
              categories.map(category =>
                React.createElement('button', {
                  key: category,
                  onClick: () => setActiveCategory(category),
                  className: `capitalize px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-white text-indigo-700 font-semibold'
                      : 'hover:bg-indigo-600'
                  }`
                }, category)
              )
            )
          ),

          // Hero Section
          React.createElement('section', { className: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16' },
            React.createElement('div', { className: 'container mx-auto px-4 text-center' },
              React.createElement('h2', { className: 'text-4xl md:text-5xl font-extrabold mb-4' }, 'Discover the Latest in Tech'),
              React.createElement('p', { className: 'text-lg md:text-xl max-w-2xl mx-auto mb-6' },
                'High-quality electronics at unbeatable prices. Upgrade your tech game today.'
              ),
              React.createElement('button', {
                className: 'bg-white text-indigo-700 hover:bg-indigo-100 font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105'
              }, 'Shop Now')
            )
          ),

          // Products Grid
          React.createElement('main', { className: 'container mx-auto px-4 py-12' },
            React.createElement('h2', { className: 'text-3xl font-bold mb-8 text-center' }, 'Featured Products'),
            React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' },
              filteredProducts.length > 0 ?
                filteredProducts.map(product =>
                  React.createElement('div', {
                    key: product.id,
                    className: 'bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-2'
                  },
                    React.createElement('img', {
                      src: product.image,
                      alt: product.name,
                      className: 'w-full h-48 object-cover'
                    }),
                    React.createElement('div', { className: 'p-4' },
                      React.createElement('h3', { className: 'font-semibold text-lg mb-2' }, product.name),
                      React.createElement('p', { className: 'text-indigo-600 font-bold' }, `$${product.price.toFixed(2)}`),
                      React.createElement('button', {
                        onClick: () => addToCart(product),
                        className: 'mt-4 w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition-colors'
                      }, 'Add to Cart')
                    )
                  )
                ) :
                React.createElement('p', {
                  className: 'col-span-full text-center text-gray-500 text-lg'
                }, 'No products found matching your criteria.')
            )
          ),

          // Footer
          React.createElement('footer', { className: 'bg-gray-800 text-white py-12' },
            React.createElement('div', { className: 'container mx-auto px-4' },
              React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-8' },
                React.createElement('div', null,
                  React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'ElectroShop'),
                  React.createElement('p', { className: 'text-gray-400' },
                    'Your one-stop destination for the latest electronics and gadgets.'
                  )
                ),
                React.createElement('div', null,
                  React.createElement('h4', { className: 'text-lg font-semibold mb-4' }, 'Quick Links'),
                  React.createElement('ul', { className: 'space-y-2 text-gray-400' },
                    React.createElement('li', null, 'Home'),
                    React.createElement('li', null, 'Shop'),
                    React.createElement('li', null, 'About Us'),
                    React.createElement('li', null, 'Contact')
                  )
                ),
                React.createElement('div', null,
                  React.createElement('h4', { className: 'text-lg font-semibold mb-4' }, 'Categories'),
                  React.createElement('ul', { className: 'space-y-2 text-gray-400' },
                    React.createElement('li', null, 'Audio'),
                    React.createElement('li', null, 'Wearables'),
                    React.createElement('li', null, 'TV & Home'),
                    React.createElement('li', null, 'Computers')
                  )
                ),
                React.createElement('div', null,
                  React.createElement('h4', { className: 'text-lg font-semibold mb-4' }, 'Newsletter'),
                  React.createElement('p', { className: 'text-gray-400 mb-4' },
                    'Subscribe to get special offers and updates.'
                  ),
                  React.createElement('div', { className: 'flex' },
                    React.createElement('input', {
                      type: 'email',
                      placeholder: 'Your email',
                      className: 'px-4 py-2 rounded-l-full focus:outline-none w-full'
                    }),
                    React.createElement('button', {
                      className: 'bg-indigo-600 text-white px-4 rounded-r-full hover:bg-indigo-700 transition-colors'
                    }, 'Subscribe')
                  )
                )
              ),
              React.createElement('hr', { className: 'my-8 border-gray-700' }),
              React.createElement('div', { className: 'text-center text-gray-500' },
                `\u00A9 ${new Date().getFullYear()} ElectroShop. All rights reserved.`
              )
            )
          )
        )
      );
    };

    ReactDOM.render(React.createElement(App), document.getElementById('root'));

  </script>

</body>
</html>