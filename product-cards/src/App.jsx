import ProductCard from './ProductCard'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    description: 'Advanced fitness tracker with heart rate monitor and GPS',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'USB-C Cable',
    price: 15.99,
    description: 'Durable 6ft USB-C charging cable with fast data transfer',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Portable Speaker',
    price: 129.99,
    description: 'Waterproof Bluetooth speaker with 360° sound and 12-hour playtime',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133da26d?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Phone Case',
    price: 24.99,
    description: 'Protective phone case with premium materials and drop protection',
    image: 'https://images.unsplash.com/photo-1601784551211-176cc9e6afa0?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    name: 'Screen Protector',
    price: 12.99,
    description: 'Tempered glass screen protector with anti-fingerprint coating',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
  },
]

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Product Cards</h1>
        <p>Check out our latest products</p>
      </header>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}
