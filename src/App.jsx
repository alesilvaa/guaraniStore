import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { CartProvider } from './context/CartContext'
import { getProducts, urlFor } from './lib/sanity'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts()
        // Transformar los productos de Sanity al formato esperado por ProductCard
        const transformedProducts = data.map(product => ({
          id: product._id,
          title: product.title,
          price: product.price,
          colors: product.colors || [],
          images: product.images?.map(img => urlFor(img).width(800).url()) || [],
          description: product.description || ''
        }))
        setProducts(transformedProducts)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Error al cargar los productos')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

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

          {loading && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div className="loading-spinner" style={{
                width: '40px',
                height: '40px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid var(--color-primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto'
              }} />
              <p style={{ marginTop: '1rem', color: '#666' }}>Cargando productos...</p>
            </div>
          )}

          {error && (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: '#e74c3c',
              backgroundColor: '#fdf2f2',
              borderRadius: '8px'
            }}>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
              <p>No hay productos disponibles en este momento.</p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="product-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  )
}

export default App
