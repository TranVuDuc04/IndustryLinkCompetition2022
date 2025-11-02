import React from 'react';
import { useCart } from '../context/CartContext';
import { shopItemsData } from '../data/products';
import '../styles.css';

const Cart = () => {
  const { basket, increment, decrement, removeItem, clearCart } = useCart();

  const getTotalAmount = () => {
    return basket.reduce((total, basketItem) => {
      const product = shopItemsData.find(p => p.id === basketItem.id);
      return total + (basketItem.item * (product?.price || 0));
    }, 0);
  };

  if (basket.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '4rem 2rem', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#69513c'}}>Your cart is empty</h2>
        <p style={{fontSize: '1.2rem', color: '#666'}}>There's nothing in your cart yet.</p>
      </div>
    );
  }

  return (
    <>
      <table className="table_head">
        <tr id="table_headers">
          <th className="remove_header"><i className="trash-can"></i></th>
          <th className="product_header">Product</th>
          <th className="price_header">Price</th>
          <th className="quantity_header">Quantity</th>
          <th className="total_header">Total</th>
        </tr>
      </table>
      <table id="total_table">
        <tbody>
          {basket.map((basketItem) => {
            const product = shopItemsData.find(p => p.id === basketItem.id);
            if (!product) return null;

            return (
              <tr key={basketItem.id} id="shopping_items">
                <td className="item_remove">
                  <i 
                    onClick={() => removeItem(basketItem.id)} 
                    className="fa-solid fa-circle-xmark"
                    style={{cursor: 'pointer'}}
                  ></i>
                  <img className="item_pic" src={product.img} alt={product.name} />
                </td>
                <td className="item_title">{product.name}</td>
                <td className="item_price">${product.price}.00</td>
                <td className="item_quantity">
                  <div className="quantity_change">
                    <i 
                      onClick={() => decrement(basketItem.id)} 
                      className="fa-solid fa-minus"
                      style={{cursor: 'pointer'}}
                    ></i>
                    <div className="quantity">{basketItem.item}</div>
                    <i 
                      onClick={() => increment(basketItem.id)} 
                      className="fa-solid fa-plus"
                      style={{cursor: 'pointer'}}
                    ></i>
                  </div>
                </td>
                <td className="item_total">${basketItem.item * product.price}.00</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="total_items" className="total_items">
        <p className="basket_total">Basket Total &#160; &#160; &#160; &#160; ${getTotalAmount()}.00</p>
        <i 
          onClick={clearCart} 
          className="fa-solid fa-trash-can"
          style={{cursor: 'pointer'}}
        ></i>
      </div>
    </>
  );
};

export default Cart;

