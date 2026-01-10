import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
    const { itemCount, openCart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo-container">
                    <img src="/images/Logo/IMG_1728.JPG" alt="Guarani Store" className="logo-img" />
                </div>

                <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#" className="active">Inicio</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li>
                            <a
                                href="https://wa.me/595986942192?text=Hola%20Guarani%20Store%2C%20tengo%20una%20consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="cart-icon-btn" onClick={openCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
                </button>
            </div>
        </header>
    );
}
