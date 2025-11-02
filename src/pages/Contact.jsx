import React from 'react';
import '../styles.css';

const Contact = () => {
  return (
    <div id="contact1">
      <div className="catering-menu-section">
        <h2 className="catering-title">CATERING MENU</h2>
        <div className="catering-grid">
          <div className="catering-box">
            <div className="catering-image-placeholder">
              <img src="/pictures/catering1.jpg" alt="Coffee Box 1" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="catering-placeholder-text">Image Placeholder</div>
            </div>
            <h3 className="catering-box-title">BOX 1: COFFEE VARIETY BOX</h3>
            <p className="catering-description">Caters: 10-15 People<br />45 x Assorted Coffee Cups (Espresso, Latte, Cappuccino) with premium coffee beans.</p>
            <p className="catering-price">$150 (additional charge for premium flavours)</p>
          </div>
          
          <div className="catering-box">
            <div className="catering-image-placeholder">
              <img src="/pictures/catering2.jpg" alt="Coffee Box 2" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="catering-placeholder-text">Image Placeholder</div>
            </div>
            <h3 className="catering-box-title">BOX 2: PASTRIES & COFFEE BOX</h3>
            <p className="catering-description">Caters: 12-18 People<br />28 x Premium Pastries served with specialty coffee selection.</p>
            <p className="catering-price">$160 (additional charge for premium flavours)</p>
          </div>
          
          <div className="catering-box">
            <div className="catering-image-placeholder">
              <img src="/pictures/catering3.jpg" alt="Coffee Box 3" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="catering-placeholder-text">Image Placeholder</div>
            </div>
            <h3 className="catering-box-title">BOX 3: SIGNATURE DRINKS BOX</h3>
            <p className="catering-description">Caters: 8-12 People<br />30 x Signature Coffee Drinks available in a variety of flavours.</p>
            <p className="catering-price">$170 (additional charge for premium flavours)</p>
          </div>
          
          <div className="catering-box">
            <div className="catering-image-placeholder">
              <img src="/pictures/catering4.jpg" alt="Coffee Box 4" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="catering-placeholder-text">Image Placeholder</div>
            </div>
            <h3 className="catering-box-title">BOX 4: BREAKFAST BOX</h3>
            <p className="catering-description">Caters: 10-15 People<br />20 x Mini Breakfast Items: A mix of Vietnamese-inspired pastries, cakes, and premium coffee.</p>
            <p className="catering-price">$140</p>
          </div>
          
          <div className="catering-box">
            <div className="catering-image-placeholder">
              <img src="/pictures/catering5.jpg" alt="Coffee Box 5" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="catering-placeholder-text">Image Placeholder</div>
            </div>
            <h3 className="catering-box-title">BOX 5: COFFEE & PASTRIES COMBO</h3>
            <p className="catering-description">Caters: 8-12 People<br />15 x Mixed Coffee Drinks<br />20 x Assorted Pastries</p>
            <p className="catering-price">$155</p>
          </div>
          
          <div className="catering-box">
            <div className="catering-image-placeholder">
              <img src="/pictures/catering6.jpg" alt="Coffee Box 6" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="catering-placeholder-text">Image Placeholder</div>
            </div>
            <h3 className="catering-box-title">BOX 6: PREMIUM COFFEE SET</h3>
            <p className="catering-description">Caters: 6-10 People<br />10 x Premium Coffee Selection<br />15 x Signature Pastries</p>
            <p className="catering-price">$165</p>
          </div>
        </div>
      </div>
      <div className="row4">
        <div className="TA2">
          <fieldset>
            <h1>Contact<span style={{color: '#967259'}}> Us</span><i className="fa-solid fa-address-book"></i></h1>
            <p style={{textAlign: 'center', color: '#666', fontSize: '1rem', marginTop: '1rem', marginBottom: '1.5rem', fontStyle: 'italic'}}>
              Our team will reach out to you shortly
            </p>
            <form id="order-form">
              <div className="TA4">
                <input type="text" className="TA5" placeholder=" " />
                <label htmlFor="name" className="TA6">Name</label>
              </div>
              <div className="TA4">
                <input type="email" className="TA7" placeholder=" " />
                <label htmlFor="email" className="TA8">Email</label>
              </div>
              <textarea name="message" className="your_message" placeholder="Your message"></textarea>
              <button type="submit" className="TA3">Submit</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;

