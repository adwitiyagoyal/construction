import React from 'react'
import '../styles/Gallery.css'
import Footer from '../components/Footer';


const Gallery = () => {
    return (
        <div>
          <div className="home"></div>
          <div className="g1">
            <div className="horizontal-rule-container">
              <div className="line1"><hr className="horizontal-rule1" /></div>
              <div className="project-title">
                <p className="text1">Projects</p>
                <p className="text2">RESIDENTIAL</p>
              </div>
              <div className="line2"><hr className="horizontal-rule2" /></div>
            </div>
            <div className="container">
              <div className="box item1"></div>
              <div className="box item2"></div>
              <div className="box item3"></div>
              <div className="box item4"></div>
              <div className="box item5"></div>
            </div>
          </div>
          <div className="g2">
            <div className="horizontal-rule-container">
              <div className="line1"><hr className="horizontal-rule1" /></div>
              <div className="project-title">
                <p className="text1">Project</p>
                <p className="text2">COMMERCIAL</p>
              </div>
              <div className="line2"><hr className="horizontal-rule2" /></div>
            </div>
            <div className="container1">
              <div className="box item6"></div>
              <div className="box item7"></div>
              <div className="box item8"></div>
              <div className="box item9"></div>
              <div className="box item10"></div>
            </div>
            <div className="horizontal-rule-container-below">
              <div className="line1"><hr className="horizontal-rule1" /></div>
              <div className="project-title1">
                <p className="text1">Projects</p>
                <p className="text2">OTHERS</p>
              </div>
              <div className="line2"><hr className="horizontal-rule2" /></div>
            </div>
          </div>
          <div className="g3">
            <div className="centered-content">
              <div className="container2">
                <div className="box item11"></div>
                <div className="box item12"></div>
                <div className="box item13"></div>
                <div className="box item14"></div>
                <div className="box item15"></div>
              </div>
            </div>
          </div>
          <Footer />
          
        </div>
      );
}

export default Gallery

