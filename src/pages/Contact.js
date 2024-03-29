import React, { useState } from 'react';
import '../styles/Contact.css';
import img1 from '../images/contact_1.jpeg';
import { MdWifiCalling3 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from '../components/Footer';

const Contact = () => {
  // ----------------------------------------form logic-------------------------------------------

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryOrRegion: '',
    reasonToContact: '',
    moreDetails: ''
  });

  // setSelectedOption(e.target.value);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send the data to a server
    console.log(formData);
  };
  //  ----------------------------------------options select-------------------------------------------



  return (
    <>
      <div className="contact-first-section">
        <div className="contact-bg-img"></div>
        <h1 className="contact-main-text">Find your Dream Buildings<br />
          <span className="provider"> With Us</span>
        </h1>
        <a className='contact-sub-text contact-us-btn'>
          Contact Us
        </a>
      </div>

      <div className='contact-second-sec'>
        <div className="second-section">
          <h1 className="our-services"><span className="our reach-out">Reach out to </span> CONTACT US </h1>
        </div>
        <div className='contact-second-content'>
          <div className='contact-second-para'>
            <h2>Connect Now</h2>
            <p>We're here for you! Reach out anytime for support, questions, or feedback, and we'll ensure your needs are met with care and efficiency</p>
          </div>
          <div className='contact-second-img'><img src={img1} /></div>
        </div>
        <div className='circle green'></div>
        <div className='circle blue'></div>
        <div className='circle purple'></div>
      </div>

      <div className='contact-third-section'>
        <div className="second-section">
          <h1 className="our-services"><span className="our reach-out">Get in</span> TOUCH</h1>
        </div>
        <div className='contact-third-content'>
          <div className='contact-number'>
            <div className='contact-number1 number-icon'><MdWifiCalling3 className='contact-icon' /> </div>
            <div className='contact-number1'>+91 9943318199</div>
            <div className='contact-number2'>+91 9943571819</div>
          </div>
          <div className='contact-address'>
            <div className='contact-address1 address-icon'><FaLocationDot className='contact-icon' /></div>
            <div className='contact-address1'>109/1, Rasi Nagar, Collector Office Post, Karur - 639007</div>
            <div className='contact-address1'>HA-3, 9th Cross Street, RM Colony,
              Dindigul - 1
            </div>
          </div>
          <div className='contact-email'>
            <div className='contact-email1 email-icon'><MdEmail className='contact-icon' /></div>
            <div className='contact-email1'>aargaaconstruction@gmail.com</div>
          </div>
        </div>
        <div className='circle green contact-circle green1'></div>
        <div className='circle blue contact-circle blue1'></div>
        <div className='circle purple contact-circle purple1'></div>


      </div>

      <div className='contact-fourth-section'>
        <div className="second-section">
          <h1 className="our-services"><span className="our reach-out">Customer</span> SUPPORT</h1>
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </label>
          <br />
          <label>
            Country or Region:
            <input type="text" name="countryOrRegion" value={formData.countryOrRegion} onChange={handleChange} />
          </label>
          <br />
          <label>
            Reason to Contact:
            <select name='reasonToContact' value={formData.reasonToContact} onChange={handleChange}>
              <option value="Vasthu">Vasthu</option>
              <option value='Plans'>Plans</option>
              <option value='Structure'>Structure</option>
              <option value='Elevation'>Elevation</option>
              <option value='Interiors'>Interiors</option>
              <option value='PMC'>PMC</option>
            </select>
          </label>
          <br />
          <label>
            More Details:
            <textarea name="moreDetails" value={formData.moreDetails} onChange={handleChange} />
          </label>
          <br />
          <button type="submit" className='contact-submit-btn'>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
