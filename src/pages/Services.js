import React, { useState, useEffect } from 'react';
import '../styles/Services.css';
import img1 from '../images/services_3.jpeg';
import img2 from '../images/services_4.jpeg';
import img3 from '../images/services_5.png';
import img4 from '../images/services_6.jpeg';
import img5 from '../images/services_7.jpeg';
import img6 from '../images/services_8.png';
import img7 from '../images/services_9.jpeg';
import img8 from '../images/services_10.png';
import { FaCircle } from "react-icons/fa";
import Footer from '../components/Footer';


const Services = () => {
  // -----------------------------------image changer----------------------------------------------------
  const images = [img5, img6, img7];
  const contentNames = ['Vasthu', '3D Plans', 'Structure', 'Interior', 'Elevation', 'PMC'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentName, setCurrentName] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
      setCurrentName((prevIdx_name) => (prevIdx_name + 1) % 6);
    }, 2000); // Change the interval time as needed (here 2000 milliseconds = 2 seconds)

    return () => clearInterval(interval);
  }, []);
  // ------------------------------------button content change---------------------------------------------
  const [showA, setShowA] = useState(true);



  return (
    <>
      <div className="first-section">
        <div className="bg-img"></div>
        <h1 className="main-text">Your Complete Construction Solution
          <span className="provider"> Provider</span>
        </h1>
        <h3 className="sub-text">
          Exceptional Services Where Quality Craftsmanship and Unwavering Integrity Combine to Bring Your Vision to Life
        </h3>
      </div>

      <div className="second-section">
        <h1 className="our-services"><span className="our">Our </span> SERVICES </h1>
      </div>

      <div className="third-section">
        <div className="bg-img2"></div>
        <div className="third-content">
          At <br /><span className="aarga">AARGA <br /></span>
          <p className='third-para'>
            We assist our clients in overcoming complicated construction-related situations and accomplishing their project objectives through industry awareness, practical business knowledge, and technology experience. AARGAA construction consulting experts work personally with each client throughout the duration of the project to ensure that clients meet their project goals and budgets.
          </p>
        </div>
      </div>

      <div className="fourth-section">
        <div className='fourth-bar'></div>
        <div className="fourth-img fourth-img1"><img src={img1} alt="img1" /></div>
        <div className="fourth-img fourth-img2"><img src={img2} alt="img2" /></div>
        <div className="fourth-img fourth-img3"><img src={img3} alt="img3" /></div>
        <div className="fourth-img fourth-img4 "><img src={img4} alt="img4" /></div>
      </div>

      <div className="fifth-section">
        <div className='fifth-section-img'>
          <div className="fifth-img fifth-img1"> <img className="active" src={images[(currentImageIndex + 1) % 3]} alt="img5" /></div>
          <div className="fifth-img fifth-img2"> <img className="active" src={images[(currentImageIndex + 2) % 3]} alt="img6" /></div>
          <div className="fifth-img fifth-img3"> <img className="active" src={images[(currentImageIndex + 3) % 3]} alt="img7" /></div>
        </div>
        <div className="fifth-img-name">{contentNames[currentName]}</div>
      </div>

      <div className='sixth-bg-img'>
        <div className='sixth-section'>
          <div className='sixth-content'>
            <div className='sixth-heading'>VASTHU</div>
            <div className='sixth-para'>
              We are acknowledged by a leading vasthu expert Mr.R.Srinivasan with a service of 25 years in vasthu
            </div>
            <div className='sixth-points'>
              <ul className='points-list'>
                <li>There is No Ritual Remedies for vasthu</li>
                <li>Vasthu was not based on Religious Facts</li>
                <li>There is no interrelation with Vasthu and Astrology</li>
              </ul>
            </div>
          </div>
          <div className='sixth-img'> <img src={img8} alt="img10" /></div>
        </div>
      </div>

      <div className='seventh-section'>
        <div className='seventh-sec-1'></div>
        <div className='seventh-sec'>
          <div className='seventh-sec-2'>
            <button
              className='seventh-btn-1'
              style={{ backgroundColor: showA ? '#8E4F30' : 'transparent', border: showA ? 'none' : '1px solid white', }}
              onClick={() => setShowA(true)}>2D MODELLING</button>
            <button
              className='seventh-btn-2'
              style={{ backgroundColor: showA ? 'transparent' : '#8E4F30', border: !showA ? 'none' : '1px solid white', }}
              onClick={() => setShowA(false)}>3D MODELLING</button>
          </div>
          <div className='seventh-sec-3'>
            <div className='seventh-sec-4-hard-blur'></div>
            <div className='seventh-sec-5'>
              <h2 className='provision'>PROVISIONS ON {showA ? '2D' : '3D'} MODELLING :</h2>
              <ul className='provision-list'>
                {showA ?
                  <>
                    <li>SCHEME PLANS</li>
                    <li>VASTHU PLANS</li>
                    <li>APPROVAL PLANS</li>
                    <li>SECTIONAL DETAILING/LAYOUTS</li>
                    <li>ELECTRICAL DETAILING/LAYOUTS</li>
                    <li>PLUMBING DETAILING/LAYOUTS</li>
                    <li>TILING DETAILING/LAYOUTS</li>
                  </> :
                  <>
                    <li>ELEVATED VIEWS</li>
                    <li>SECTIONAL VIEWS</li>
                    <li>AERIAL VIEWS</li>
                    <li>WALK THROUGH</li>
                    <li>INTERIORS NIGHT VIEWS</li>
                    <li>KITCHENETTE WARDROBES & FURNISHING</li>
                  </>}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="eight-section">
        <h1 className="our-services"><span className="our">Our Diverse</span>INDUSTRY REACH </h1>
      </div>

      <div className='ninth-section bullet-list'>
        <div className='ninth-item'>
          <div><FaCircle className='bullet-point' /> Corporate / Office</div>
          <div><FaCircle className='bullet-point' /> Education</div>
          <div><FaCircle className='bullet-point' /> Shopping</div>
          <div><FaCircle className='bullet-point' /> Health</div>
          <div><FaCircle className='bullet-point' /> Residential</div>
          <div><FaCircle className='bullet-point' /> Parks & Open Space</div>
          <div><FaCircle className='bullet-point' /> Cultural Centers</div>
          <div><FaCircle className='bullet-point' /> Sports</div>
          <div><FaCircle className='bullet-point' /> Transport</div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Services;


