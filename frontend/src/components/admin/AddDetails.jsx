import './AddDetails.css'
import React, { useEffect, useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const AddDetails = () => {

  
  const [formData, setFormData] = useState({
    type: '',
    price: '',
    location: '',
    sqfeet: '',
    bhk: '',
    parking: '',
    img: null // Assuming you want to handle file input separately
  });
  
  const [image, setImage] = useState(null); //selected image to upload
  const [imageurl, setImageUrl] = useState([]); //uploaded imgs url

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (image == null) return;
    
    const imageRef = ref(storage, `images/${image.name + uuidv4()}`);
    
    try {
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      
      setImageUrl([...imageurl, url]);
      axios.post('http://localhost:4000/api/addProduct',{  "img":url,
      "type":formData.type,
      "price":formData.price,
      "location":formData.location,
      "sqfeet":formData.sqfeet,
      "bhk":formData.bhk,
      "parking":formData.parking})
      .then(()=>{
        alert("Uploaded Successfully");
      })
      .catch((err)=>{
        console.log(err);
      })

      console.log(`${formData.type}`);
      console.log(`${formData.price}`);
      console.log(`${formData.location}`);
      console.log(`${formData.sqfeet}`);
      console.log(`${formData.bhk}`);
      console.log(`${formData.parking}`);
      console.log(`${url}`);
    } catch (error) {
      alert("Error uploading image: ", error);
    }

    setFormData({
      type: '',
      price: '',
      location: '',
      sqfeet: '',
      bhk: '',
      parking: '',
      img: null
    });
    setImage("");
    document.getElementById("imageInput").value = "";
  

     
  }
  return (
    <>
      <div className='body'>
        <div className="container" id="container">
          <div className="form-container sign-in">
            <form>
              <h1>Add Details</h1>
              <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
              <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
              <input type="text" name="sqfeet" placeholder="Sqfeet" value={formData.sqfeet} onChange={handleChange} />
              <input type="text" name="bhk" placeholder="Bhk" value={formData.bhk} onChange={handleChange} />
              <input type="text" name="parking" placeholder="Parking" value={formData.parking} onChange={handleChange} />
              <input type="file" name="img" id="imageInput" placeholder="image.jpeg/image.png"  onChange={(event) => {
                setImage(event.target.files[0]);
              }} />
              {/* <h3>Owner details</h3>
              <input type="text" name="name" placeholder="Enter house owner name"/>
              <input type="tel" name="phonenumber" placeholder="Enter house owner phno"/>
              <input type="text" name="address" placeholder="Enter house address"/> */}

              <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-right">
                <h1>Hello, Admin!</h1>
                <p>Click here to add and update all of site features</p>
                <button><Link to={'/view'} className="button" style={{color:'white'}}>View</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDetails;
