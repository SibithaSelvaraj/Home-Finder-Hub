import React from 'react'
import './Foot.css'
const Foot = () => {
  return (
    <div>
      {/* footer about page */}
      <div className="footer" id="about">
          <div className="address">
            <h2 className="address-heading">Get In Touch</h2>
            <div className="address-detail">
              <p>KEC, Perundurai</p>
              <p>+91 9878912312</p>
              <p>kec@gmail.com</p>
            </div>
          </div>
          <div className="photo-gallery">
            <h2 className='photo-heading'>Photo Gallery</h2>
              <div className="photo">
                <div className="photo-3">
                  <div className="col">
                    <img src="/property-1.jpg" ></img>
                  </div>
                  <div className="col">
                    <img src="/property-2.jpg" ></img>
                  </div>
                  <div className="col">
                    <img  src="/property-3.jpg" ></img>
                  </div>
                </div>
                <div className="photo-6">
                  <div className="col">
                    <img src="/property-4.jpg"></img>
                  </div>
                  <div className="col">
                    <img src="/property-5.jpg" ></img>
                  </div>
                  <div className="col">
                    <img src="/property-6.jpg" ></img>
                  </div>
                </div>
              </div>
          </div>
          <div className="quick-link">
            <h2 className='qlink-heading'>Quick link</h2>
            <div className="qlink-detail">
              <li><a href="#home">Home</a></li>
              <li><a href="#property-list">Properties</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a></li>
              <li><a href="https://policies.google.com/terms?hl=en-US">Terms and condition</a></li>
            </div>
          </div>
        </div>
        <div className="cpy">
          <div className="cpy-right">
            <p>©copyrights, All Rights Reserved. Designed By Karthikrajan & Sibitha</p>
          </div>
        </div>

    </div>
  )
}

export default Foot