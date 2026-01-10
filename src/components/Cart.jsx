import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const WHATSAPP_NUMBER = '595986942192';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, total, isCartOpen, closeCart } = useCart();

    const handleCheckout = () => {
        if (cart.length === 0) return;

        let message = "Hola! 👋 Vengo de la web Guarani Store.\nMe gustaría realizar el siguiente pedido:\n\n";
        cart.forEach(item => {
            const colorInfo = item.selectedColor ? ` (${item.selectedColor})` : '';
            message += `📦 *${item.title}* ${colorInfo}\n   └ Cantidad: ${item.quantity} x Gs. ${(item.price).toLocaleString('es-PY')}\n\n`;
        });
        message += `💰 *TOTAL FINAL: Gs. ${total.toLocaleString('es-PY')}*\n\n`;
        message += "Quedo atento para coordinar el pago y envío. Gracias! 🚀";

        const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}>
            <div className="cart-drawer" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Mi Compra</h2>
                    <button className="close-btn" onClick={closeCart}>&times;</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío.</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.uniqueId} className="cart-item">
                                {item.images && item.images[0] && (
                                    <div className="cart-item-image">
                                        <img src={item.images[0]} alt={item.title} />
                                    </div>
                                )}
                                <div className="item-info">
                                    <h4>{item.title}</h4>
                                    {item.selectedColor && <span className="item-variant">Color: {item.selectedColor}</span>}
                                    <span className="item-price">Gs. {item.price.toLocaleString('es-PY')}</span>
                                </div>
                                <div className="item-controls">
                                    <button className="qty-btn" onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)}>−</button>
                                    <span className="qty-val">{item.quantity}</span>
                                    <button className="qty-btn" onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="total-row">
                        <span>Total:</span>
                        <span>Gs. {total.toLocaleString('es-PY')}</span>
                    </div>
                    <button className="btn-primary checkout-btn" onClick={handleCheckout} disabled={cart.length === 0}>
                        Continuar al WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}
