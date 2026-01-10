import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, selectedColor) => {
        setCart((prev) => {
            const uniqueId = `${product.id}-${selectedColor}`;
            const existing = prev.find((item) => item.uniqueId === uniqueId);
            if (existing) {
                return prev.map((item) =>
                    item.uniqueId === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, selectedColor, uniqueId, quantity: 1 }];
        });
    };

    const removeFromCart = (uniqueId) => {
        setCart((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
    };

    const updateQuantity = (uniqueId, quantity) => {
        if (quantity < 1) return removeFromCart(uniqueId);
        setCart((prev) =>
            prev.map((item) => (item.uniqueId === uniqueId ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => setCart([]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                total,
                itemCount,
                isCartOpen,
                openCart,
                closeCart,
                toggleCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
