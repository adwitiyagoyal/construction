import React from 'react';
import Footer from '../components/Footer';


const About = () => {
  return (
    <>
      <div class="home">
        <div class="textHome">
            <div class="first-line">
                <p>More than just real state</p>
            </div>
            <div class="second-line">
                <p>We build</p>
                <p class="new"> &nbsp;&nbsp;Dreams</p>
            </div>
            <div class="description">
                <p>With a focus on quality craftsmanship and unwavering integrity, we bring your vision to reality. Experience the difference with our team</p>
            </div>
        </div>
    </div>
    <div class="a1">

        <div class="horizontal-rule-container">
            <div class="line1"><hr class="horizontal-rule1"/></div>
            
            <div class="project-title">
                <p class="text1">Learn more</p>
                <p class="text2">ABOUT US</p>
            </div>
            <div class="line2"><hr class="horizontal-rule2"/></div>
        </div>

        <div class="container">
            <div class="box item1"></div>
            <div class="box item2"></div>
            <div class="box item3"></div>
            <div class="box item4"></div>
            <div class="box item5"></div>
        </div>

        <div class="textMain">We believe in design as a process. We research into creating a nice environment that is adaptive and contextual. We see architecture as a language that speaks of the place. Our sensible, yet critical design approach recognizes the inherent complexity in modern day building and harness this complexity to produce projects that are culturally robust, place sensitive and environmentally friendly.</div>
        
        <div class="since">Since 2017</div>
        <div class="textMain2">
            “We are Reliable, trustworthy and we uphold the highest standards of integrity in all of our designs.”
                                        Balavenkatesh S - Director
        </div> 
        <div class="bar"></div>  
    </div>

    <div class="a2">
        <div class="new-box">
            <div class="super">
                <div class="head">
                    Why choose AARGAA ?
                </div>
                <div class="content">
                    We support every project with a specialized approach tailored to its unique requirements and challenges
                </div>
                <div class="mega">
                    <div class="container2">
                        <div class="box item6"></div>
                        <div class="box item7"></div>
                        <div class="box item8"></div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
    <div class="a3">
        <div class="mainBox">
            <div class="comp">
                <div class="part1">PROJECT MANAGEMENT CONSULTANCY</div>
                <div class="part2">At every phase of the project life cycle, we maintain your requirements in mind, create a win-win scenario, and adhere to proactive principles. You can improve a construction project's efficiency by using PMC, which offers an efficient management solution</div>
                <div class="part3">SERVICES WE OFFER UNDER PMC</div>
                <div class="part4">
                    <ul>
                        <li>Project Initiation</li>
                        <li>Project Budgeting</li>
                        <li>Project Monitoring</li>
                        <li>Project Monitoring</li>
                    </ul>
                </div>
            </div>

            <div class="photo">
                <div class="inner"></div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
