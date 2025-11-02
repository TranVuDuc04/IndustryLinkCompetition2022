import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem('data');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
  }, [basket]);

  const increment = (id) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((x) => x.id === id);
      if (existingItem) {
        return prevBasket.map((x) =>
          x.id === id ? { ...x, item: x.item + 1 } : x
        );
      } else {
        return [...prevBasket, { id, item: 1 }];
      }
    });
  };

  const decrement = (id) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((x) => x.id === id);
      if (!existingItem || existingItem.item === 0) return prevBasket;

      const updated = prevBasket.map((x) =>
        x.id === id ? { ...x, item: x.item - 1 } : x
      );

      return updated.filter((x) => x.item > 0);
    });
  };

  const removeItem = (id) => {
    setBasket((prevBasket) => prevBasket.filter((x) => x.id !== id));
  };

  const clearCart = () => {
    setBasket([]);
  };

  const getItemCount = (id) => {
    const item = basket.find((x) => x.id === id);
    return item ? item.item : 0;
  };

  const getTotalItems = () => {
    return basket.reduce((total, x) => total + x.item, 0);
  };

  const value = {
    basket,
    increment,
    decrement,
    removeItem,
    clearCart,
    getItemCount,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

