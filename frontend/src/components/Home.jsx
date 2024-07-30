import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeStyle.css';
import Foot from './Foot';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Contact } from './Contact.jsx';
// import { CgLogIn } from "react-icons/cg";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [search,setSearch] = useState('')


const searchValue = (city)=>{
  axios.get(`http://localhost:4000/api/getProduct?location=${search}`)
  .then((response) => {
    setProduct(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}
  
  useEffect(() => {
    searchValue();
  }, [search]);


  const sortByPrice = () => {
    const sortedProduct = [...product].sort((a, b) => a.price - b.price);
    setProduct(sortedProduct);
  };
  
  const sortBySqfeet = () => {
    const sortedProduct = [...product].sort((a, b) => a.sqfeet - b.sqfeet);
    setProduct(sortedProduct);
  };
  
  const sortByBhk = () => {
    const sortedProduct = [...product].sort((a, b) => a.bhk - b.bhk);
    setProduct(sortedProduct);
  };
  
  const handleSortChange = (e) => { 
    if (e.target.value === "price") {
      sortByPrice();
    }
    else if (e.target.value === "sqfeet") {
      sortBySqfeet();
    }
    else if (e.target.value === "bhk") {
      sortByBhk();
    }
  };

  const handleSearch = (e)=> {
    setSearch(e.target.value)
  
  }

  console.log(search);

  return (
    <>
      {/* nav bar   */}
      <div className="full">
        <ul className="topnav">
          <li><Link className="active" to="home" smooth={true} offset={-80}>Home</Link></li>
          <li><Link to="property-list" smooth={true} offset={-80}>Properties</Link></li>
          <li><Link to="contact" smooth={true} offset={-80}>Contact</Link></li>
          <li><Link to="about" smooth={true} offset={-80}>About</Link></li>
            <input type='text' className='search-input' placeholder='search location here....' value={search} onChange={handleSearch}></input>
            <select name="sort" id="sort" className='sort'onChange={(e) => handleSortChange(e)}>
              <option  defaultValue>Sort by:</option>
              <option value="price" onClick={sortByPrice}>Price</option>
              <option value="sqfeet" onClick={sortBySqfeet}>Sq feet</option>
              <option value="bhk" onClick={sortByBhk}>Bhk</option>
            </select>
            {/* <li><Link to={`/user-register`} className="login-icon" smooth={true} offset={-80}><CgLogIn /></Link></li> */}
            
        </ul>

        {/* home page */}
        <div className='banner-img' id='home'>
          <div className='left'>
            <h1 style={{ color: "#0E2E50" }}>Find <span style={{ color: "#00B98E" }}>A Perfect </span>Home To Live With Your Family</h1>
          </div>
          <div className="right">
            <img src="carousel-1.jpg" alt="carousel"></img>
          </div>
        </div>

        {/* property listing page */}
        <div className='property-list' id='property-list'>
          <div className='prop-heading'>
            <h1>Property Listing</h1>
          </div>
         
          <p className='prop-desc'>Our platform offers an intuitive search function, allowing you to effortlessly narrow down your options
             based on your preferences, whether it's location, price, or amenities. <br/>&nbsp;&nbsp;&nbsp;&nbsp; With our advanced sorting features,
              you can easily organize listings by various criteria,
             ensuring that you find exactly what you're looking for without any hassle.</p>


          {/* {
            product.filter((item)=>{
              if(search == ''){
                return item;
              }
            })
          } */}
          <div className="prop-detail">
            {product.map((item, index) => (
              <div key={index} className="responsive">
                <div className="prop-list">
                  <div className="prop-img">
                    <a target="_blank" href={item.img}>
                      <img src={item.img} alt="network issue" width="600" height="400"></img>
                    </a>
                  </div>
                  <div className="prop-details">
                    <p className="type">{item.type}</p>
                    <p className='price'>Rs.{item.price}</p>
                    <p className='location'>{item.location}</p>
                    <p className='prop-details-3'>
                      <span className='sqfeet'>{item.sqfeet}sqft </span>
                      <span className='bhk'>{item.bhk}bhk</span>
                      <span className='parking'>{item.parking}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> {/* Closing div for .full */}

      {/* Contact page */}
      <div className="contact" id="contact">
        <Contact />
      </div>

      <Foot />
    </>
  );
}

export default Home;
