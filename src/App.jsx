import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import './App.css'

const PRODUCTS = [
  {
    id: 1,
    title: 'Sombrilla Parasol Para El Auto',
    price: 189000,
    colors: ['Negro'],
    images: [
      '/images/Producto_1/WhatsApp Image 2026-01-10 at 00.58.54.jpeg',
      '/images/Producto_1/WhatsApp Image 2026-01-10 at 00.59.06.jpeg',
      '/images/Producto_1/WhatsApp Image 2026-01-10 at 00.59.24.jpeg'
    ]
  },
  {
    id: 2,
    title: 'Bolso Mochila Deportiva T60',
    price: 119000,
    colors: ['Rosa', 'Negro', 'Verde', 'Lila'],
    images: [
      '/images/Producto_2/WhatsApp Image 2026-01-10 at 01.06.04.jpeg',
      '/images/Producto_2/WhatsApp Image 2026-01-10 at 01.10.00.jpeg',
      '/images/Producto_2/WhatsApp Image 2026-01-10 at 01.12.28.jpeg'
    ]
  },
  {
    id: 3,
    title: 'Juego De 4 Sujetadores De Sabanas',
    price: 99000,
    colors: ['Gris'],
    images: [
      '/images/Producto_3/1767895390WhatsApp Image 2026-01-08 at 14.23.57 (2).jpeg',
      '/images/Producto_3/1767895390WhatsApp Image 2026-01-08 at 14.23.58 (1).jpeg',
      '/images/Producto_3/1767895390WhatsApp Image 2026-01-08 at 14.23.58.jpeg',
      '/images/Producto_3/1767895390WhatsApp Image 2026-01-08 at 14.23.59 (1).jpeg'
    ]
  },
  {
    id: 4,
    title: 'Mini Aspiradora Portatil Aspirador',
    price: 149000,
    colors: ['Negro'],
    images: [
      '/images/Producto_4/176115496261-GP3gATTL._UF894,1000_QL80_.jpg',
      '/images/Producto_4/17611549629899_tims2-d3-as-228-x-p.png',
      '/images/Producto_4/17611549637b86acd0-b008-460f-8f54-7d0f1bebbfbc.jpg'
    ]
  },
];

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Hero />
        <Cart />
        <main className="container" id="products" style={{ padding: '3rem 1rem' }}>
          <h2 style={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: '800',
            fontSize: '2rem',
            color: 'var(--color-primary-dark)'
          }}>
            Nuestros Productos
          </h2>
          <div className="product-grid">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
