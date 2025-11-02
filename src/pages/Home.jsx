import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="about_homepage">
        <img src="/pictures/about.jpg" className="about_homepage_pic" alt="About BéƠi" />
        <div className="about_homepage_text">
          " In 2025, in need of outstanding coffee, BéƠi coffee was created with the goal of preserving Vietnam's cafe legacy. "
        </div>
        <div className="about_author">- Founders -</div>
        <Link to="/about"><button type="button" className="about_button">READ MORE</button></Link>
      </div>
      <p className="locations_homepage_text">Our Journey</p>
      <div className="location_homepage">
        <div className="locations">
          <img src="/pictures/hanoi-digital-nomads-1024x768.jpg" style={{cursor: 'pointer'}} className="location_pic" alt="Hanoi" />
          <p className="location_in4">THAI NGUYEN'S FARM</p>
        </div>
        <div className="locations">
          <img src="/pictures/golden_bridge.jpg" style={{cursor: 'pointer'}} className="location_pic" alt="Danang" />
          <p className="location_in4">THROUGH THE SKIES</p>
        </div>
        <div className="locations">
          <img src="/pictures/tp-hcm-ruc-ro-ve-dem-anh-hoang-trieu-4-15775262530931728274679.jpg" style={{cursor: 'pointer'}} className="location_pic" alt="Saigon" />
          <p className="location_in4">MELBOURNE'S HEART</p>
        </div>
      </div>
      <p className="locations_homepage_text">Our feedback</p>
      <div className="feedback">
        <div className="slider">
          <div className="slides">
            <input 
              type="radio" 
              name="radio-btn" 
              id="radio1" 
              checked={currentSlide === 1}
              onChange={() => setCurrentSlide(1)}
            />
            <input 
              type="radio" 
              name="radio-btn" 
              id="radio2" 
              checked={currentSlide === 2}
              onChange={() => setCurrentSlide(2)}
            />
            <input 
              type="radio" 
              name="radio-btn" 
              id="radio3" 
              checked={currentSlide === 3}
              onChange={() => setCurrentSlide(3)}
            />

            <div className={`slide ${currentSlide === 1 ? 'first' : ''}`}>
              <img src="/pictures/feedback1.jpg" alt="" className="feedback_pic" />
            </div>
            <div className={`slide ${currentSlide === 2 ? 'first' : ''}`}>
              <img src="/pictures/feedback2.jpg" alt="" className="feedback_pic" />
            </div>
            <div className={`slide ${currentSlide === 3 ? 'first' : ''}`}>
              <img src="/pictures/feedback3.jpg" alt="" className="feedback_pic" />
            </div>
            <div className="navigation_auto">
              <div className={`auto_btn${currentSlide === 1 ? '1' : ''}`}></div>
              <div className={`auto_btn${currentSlide === 2 ? '2' : ''}`}></div>
              <div className={`auto_btn${currentSlide === 3 ? '3' : ''}`}></div>
            </div>
          </div>
          <div className="navigation_manual">
            <label htmlFor="radio1" className="manual_btn" onClick={() => setCurrentSlide(1)}></label>
            <label htmlFor="radio2" className="manual_btn" onClick={() => setCurrentSlide(2)}></label>
            <label htmlFor="radio3" className="manual_btn" onClick={() => setCurrentSlide(3)}></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

