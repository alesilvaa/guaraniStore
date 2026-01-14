import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product, selectedColor);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset after 2s
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="product-card">
            <div className="image-container">
                {/* Badge for new items - Logic could be dynamic based on date */}
                <span className="badge-new">NUEVO</span>

                <img
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    className="product-image"
                />
                {product.images.length > 1 && (
                    <>
                        <button className="nav-btn prev" onClick={prevImage}>‹</button>
                        <button className="nav-btn next" onClick={nextImage}>›</button>
                        <div className="dots">
                            {product.images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Gs. {product.price.toLocaleString('es-PY')}</p>

                {product.colors && (
                    <div className="color-selector">
                        <span className="label">Color: <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{selectedColor}</span></span>
                        <div className="colors">
                            {product.colors.map(color => {
                                const colorMap = {
                                    'negro': '#000000',
                                    'rosa': '#ff8fa3',
                                    'verde': '#80b918',
                                    'lila': '#cc5de8',
                                    'gris': '#808080',
                                    'blanco': '#ffffff',
                                    'azul': '#00509d',
                                    'rojo': '#e74c3c'
                                };
                                const normalizedColor = color.trim().toLowerCase();
                                const bg = colorMap[normalizedColor] || '#ccc';

                                return (
                                    <button
                                        key={color}
                                        className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: bg }}
                                        title={color}
                                        aria-label={color}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}

                <button
                    onClick={handleAdd}
                    className={`btn-primary add-btn ${isAdded ? 'added' : ''}`}
                    disabled={isAdded}
                >
                    <span>{isAdded ? '¡Agregado! 🛍️' : 'Agregar al Carrito'}</span>
                </button>
            </div>
        </div>
    );
}
