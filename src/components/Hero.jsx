import React from 'react';
import './Hero.css';

export default function Hero() {
    const scrollToProducts = () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Bienvenido a Guarani Store 🦁</h1>
                <p>Tu tienda digital de confianza, con una amplia variedad de productos y envíos gratis a todo el país. ¡Compra fácil y seguro desde donde estés! 📦</p>
                <button onClick={scrollToProducts} className="hero-btn">Ver Ofertas</button>
            </div>
        </div>
    );
}
