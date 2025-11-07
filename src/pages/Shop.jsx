import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { shopItemsData } from '../data/products';
import '../styles.css';

const Shop = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('Default');
  const { increment, decrement, getItemCount } = useCart();

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleFilterChange = (filterType) => {
    setSelectedFilters(prev => {
      if (prev.includes(filterType)) {
        return prev.filter(f => f !== filterType);
      } else {
        return [...prev, filterType];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectedFilters([]);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedFilters.length === 0
      ? shopItemsData 
      : shopItemsData.filter(item => selectedFilters.includes(item.type));

    if (sortOrder === 'LowToHigh') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'HighToLow') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedFilters, sortOrder]);

  return (
    <div className="shop-container">
      <div className="products_sidebar">
        <div className="category">
          Categories
          <hr />
          <ul className="category_list">
            <li>
              <div 
                className={`list ${selectedFilters.length === 0 ? 'active' : ''}`}
                onClick={handleSelectAll}
              >
                <small>&#62; &#160;</small>Show All
              </div>
            </li>
            <li className="category-header">
              <div 
                className="list" 
                onClick={() => toggleCategory('coffee')}
              >
                <span><small>&#62; &#160;</small>Coffee</span>
                <i className={`fa-solid ${expandedCategories.coffee ? 'fa-chevron-down' : 'fa-chevron-right'} category-arrow`}></i>
              </div>
              {expandedCategories.coffee && (
                <ul className="subcategory_list">
                  <li className="subcategory_item">
                    <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes('green')}
                        onChange={() => handleFilterChange('green')}
                      />
                      <span>Green Coffee</span>
                    </label>
                  </li>
                  <li className="subcategory_item">
                    <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes('italian')}
                        onChange={() => handleFilterChange('italian')}
                      />
                      <span>Italian Coffee</span>
                    </label>
                  </li>
                  <li className="subcategory_item">
                    <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes('roasted')}
                        onChange={() => handleFilterChange('roasted')}
                      />
                      <span>Roasted Coffee</span>
                    </label>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div 
                className={`list ${selectedFilters.includes('signature') ? 'active' : ''}`}
                onClick={() => handleFilterChange('signature')}
              >
                <small>&#62; &#160;</small>Signature Drinks
              </div>
            </li>
            <li className="category-header">
              <div 
                className="list" 
                onClick={() => toggleCategory('food')}
              >
                <span><small>&#62; &#160;</small>Food</span>
                <i className={`fa-solid ${expandedCategories.food ? 'fa-chevron-down' : 'fa-chevron-right'} category-arrow`}></i>
              </div>
              {expandedCategories.food && (
                <ul className="subcategory_list">
                  <li className="subcategory_item">
                    <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes('brunch')}
                        onChange={() => handleFilterChange('brunch')}
                      />
                      <span>Brunch / Breakfast items</span>
                    </label>
                  </li>
                  <li className="subcategory_item">
                    <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes('pastries')}
                        onChange={() => handleFilterChange('pastries')}
                      />
                      <span>Vietnamese-inspired pastries</span>
                    </label>
                  </li>
                  <li className="subcategory_item">
                    <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes('cakes')}
                        onChange={() => handleFilterChange('cakes')}
                      />
                      <span>Cakes & sweets</span>
                    </label>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="shop-main-content">
        <div className="filter_condition">
          <select 
            name="" 
            id="select" 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="Default">Default</option>
            <option value="LowToHigh">Sort by price: low to high</option>
            <option value="HighToLow">Sort by price: high to low</option>
          </select>
        </div>
        <div className="all_products" id="shop">
        {filteredAndSortedProducts.map((product) => {
          const itemCount = getItemCount(product.id);
          return (
            <div key={product.id} id={`product_id_${product.id}`} className={`products ${product.type}`}>
              <img src={product.img} style={{cursor: 'pointer'}} className="product_pic" alt={product.name} />
              <p className="product_text">{product.name}</p>
              <p className="product_price" data-price={product.price}>${product.price}.00</p>
              <div className="quantity_change">
                <i 
                  onClick={() => decrement(product.id)} 
                  className="fa-solid fa-minus"
                  style={{cursor: 'pointer'}}
                ></i>
                <div className="quantity">{itemCount}</div>
                <i 
                  onClick={() => increment(product.id)} 
                  className="fa-solid fa-plus"
                  style={{cursor: 'pointer'}}
                ></i>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Shop;

