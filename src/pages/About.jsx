import React, { useState, useEffect } from 'react';
import '../styles.css';

const About = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const words = ["Rooted in Vietnam. Crafted in Melbourne", "Where coffee meets heritage."];
    let char = '';
    let counter = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    const delay = 2000;
    let timeoutId;

    const type = () => {
      const index = counter % words.length;
      const fullWord = words[index];

      if (isDeleting) {
        typeSpeed = 50;
        char = fullWord.substring(0, char.length - 1);
      } else {
        typeSpeed = 100;
        char = fullWord.substring(0, char.length + 1);
      }

      setDisplayText(char);

      if (!isDeleting && char === fullWord) {
        typeSpeed = delay;
        isDeleting = true;
      } else if (isDeleting && char === '') {
        isDeleting = false;
        counter++;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    type();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <div className="row1">
        <div>
          <div className="origin">
            <span className="typewrite">
              <span className="write">{displayText}</span>
              <span className="blinking-cursor">|</span>
            </span>
          </div><br />
          <p className="hi2">
            A happily married couple from Vietnam shared the same love for coffee — not just its taste, but also the culture and memories it holds. Growing up surrounded by the aroma of freshly brewed <strong>phin coffee</strong>, they dreamed of bringing that warmth to <strong>Melbourne</strong>, a city that celebrates great coffee. In <strong>2025</strong>, that dream became <strong>BéƠi Coffee</strong> — a place where <strong>Vietnamese tradition meets Melbourne's coffee passion</strong>.
          </p>
          <p className="hi2">
            They started small, with a vision to share the <strong>authentic taste of Vietnamese coffee</strong> and the feeling of home it brings. Every detail — from the beans sourced in <strong>Thai Nguyen</strong> to the way each cup is brewed — reflects their love and care. <strong>BéƠi Coffee</strong> is more than just a café; it's a <strong>piece of Vietnam brought to Melbourne</strong>, made to be shared with everyone who appreciates genuine flavor and heartfelt stories.
          </p>
        </div>
        <div>
          <a href="#" className="cs">
            <img src="/pictures/7.png" style={{width: '25rem', height: '25rem'}} alt="logo" className="cs1" />
          </a>
        </div>
      </div>
      <div className="advanced">
        <div className="ad1">
          <div className="feature-item" data-number="01">
            <div className="feature-number">01</div>
            <div className="feature-content">
              <h3 className="feature-title">Freshly Roasted Coffee</h3>
              <p className="feature-description">We source and roast the finest beans daily to bring you the perfect aroma and flavor in every cup.</p>
            </div>
          </div>
          <div className="feature-item" data-number="02">
            <div className="feature-number">02</div>
            <div className="feature-content">
              <h3 className="feature-title">Skilled Baristas</h3>
              <p className="feature-description">Our team of five-star baristas crafts every drink with precision, passion, and care.</p>
            </div>
          </div>
          <div className="feature-item" data-number="03">
            <div className="feature-number">03</div>
            <div className="feature-content">
              <h3 className="feature-title">Splendid Service</h3>
              <p className="feature-description">From your first sip to your last visit, we're here to make sure every moment feels special.</p>
            </div>
          </div>
        </div>
        <img src="/pictures/8.png" alt="Coffee" style={{width: '370px', height: '450px'}} className="ad2" />
        <div className="ad3">
          <div className="feature-item" data-number="04">
            <div className="feature-number">04</div>
            <div className="feature-content">
              <h3 className="feature-title">Exclusive Events</h3>
              <p className="feature-description">Join our annual customer appreciation events and coffee workshops — a celebration of our loyal community.</p>
            </div>
          </div>
          <div className="feature-item" data-number="05">
            <div className="feature-number">05</div>
            <div className="feature-content">
              <h3 className="feature-title">Free Delivery</h3>
              <p className="feature-description">Enjoy free shipping on orders over $100 or as a birthday treat from us.</p>
            </div>
          </div>
          <div className="feature-item" data-number="06">
            <div className="feature-number">06</div>
            <div className="feature-content">
              <h3 className="feature-title">Personalized Coffee Experience</h3>
              <p className="feature-description">Want to plan your own Coffee Week? Reach out to us by email — we'll make it happen!</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact1">
        <div className="row4">
          <div className="TA9">
            <div className="location">
              <p className="city mobile-location-title">Our location</p>
              <p className="city desktop-location-title">Mt Waverley</p>
              <p className="no_locations desktop-location-title">1 location</p>
              <div className="locations_content">
                <img src="/pictures/128-comfort-town-berezen-studio_9.jpg" className="cafe_locations" alt="Mt Waverley" />
                <p className="lo">
                  1 Barlyn rd Mt Waverley 3149
                  <br /><span className="contact-label">Contact us via</span> <a href="mailto:Beoicafe@outlook.com" className="luxury-email">Beoicafe@outlook.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="TA1">
            <div className="TAimg">
              <img src="/pictures/coffee.jpg" alt="Coffee" />
            </div>
            <div className="overlay_TA">
              <fieldset>
                <h1><span style={{fontFamily: 'Ubuntu', fontSize: '2.5rem'}}>OPENING HOURS</span></h1>
                <br />
                <p><strong>Monday:</strong> 9:00 - 21:00</p>
                <p><strong>Tuesday:</strong> 9:00 - 21:00</p>
                <p><strong>Wednesday:</strong> 9:00 - 21:00</p>
                <p><strong>Thursday:</strong> 9:00 - 21:00</p>
                <p><strong>Friday:</strong> 9:00 - 21:00</p>
                <p><strong>Saturday:</strong> 9:00 - 21:00</p>
                <p><strong>Sunday:</strong> <span style={{color: 'crimson', fontWeight: 'bold'}}>CLOSED</span></p>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="social-section">
          <h2>Social:</h2>
          <div className="TA10">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <h1 className="members">Our Founders</h1>
      <div className="row2">
        <div className="hi1">
          <span className="photo">
            <img src="https://ui-avatars.com/api/?name=Person+1&size=224&background=e8dcc6&color=333&bold=true&font-size=0.8" style={{width: '10rem', height: '12rem', objectFit: 'cover', borderRadius: '8px'}} alt="Founder 1" />
          </span>
          <h3 className="header">Person 1</h3>
        </div>
        <div className="hi1">
          <span className="photo">
            <img src="https://ui-avatars.com/api/?name=Person+2&size=224&background=d4c4a8&color=333&bold=true&font-size=0.8" style={{width: '10rem', height: '12rem', objectFit: 'cover', borderRadius: '8px'}} alt="Founder 2" />
          </span>
          <h3 className="header">Person 2</h3>
        </div>
      </div>
    </>
  );
};

export default About;

