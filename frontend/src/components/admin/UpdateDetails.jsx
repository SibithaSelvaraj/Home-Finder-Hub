import React, { useEffect, useState } from 'react'
import './UpdateDetails.css'
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { storage } from "./Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const UpdateDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);

    const [type,setType] = useState()
    const [price,setPrice] = useState()
    const [location,setLocation] = useState()
    const [sqfeet,setSqfeet] = useState()
    const [bhk,setBhk] = useState()
    const [parking,setParking] = useState()
    const [img,setImg] = useState()
    const [image, setImage] = useState(null); //selected image to upload
    
    let productData ={};
    let url='';
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/api/getProduct/${id}`);
          console.log(res.data);
          productData = res.data[0];
          setType(productData.type);
          setPrice(productData.price);
          setLocation(productData.location);
          setSqfeet(productData.sqfeet);
          setBhk(productData.bhk);
          setParking(productData.parking);
          setImg(productData.img)
          console.log("Initial url",url);
        } catch (err) {
          console.log(err);
        }
      };
    
      getProduct();
    }, [id]);
    
    
    const handleUpdate = async (e) => {
      e.preventDefault();
    
      try {
        let imageUrl = url;
        // Check if image has changed
        if (image) {
          // Upload image to Firebase Storage
          const imageRef = ref(storage, `images/${image.name + uuidv4()}`);
          await uploadBytes(imageRef, image);
          url = await getDownloadURL(imageRef);
          // setImg(url)
          console.log("URL : ",url);
        }
        // console.log(url);
    
        // Prepare the updated product data
        const imgTemp = url?url:img;
        const updatedProduct = {
          "img": imgTemp, // Use the updated image URL if it's changed, otherwise use the existing URL
          "type": type,
          "price": price,
          "location": location,
          "sqfeet": sqfeet,
          "bhk": bhk,
          "parking": parking
        };
    
        // Send the updated product data to the server
        await axios.put(`http://localhost:4000/api/updateProduct/${id}`, updatedProduct);
    
        // Navigate to view page or show success message
        alert("Updated Successfully");
        navigate('/view');
      } catch (error) {
        console.log(error);
        // Handle error (show error message)

      }
    };
    return (
      <>
      <div className='body'>
          <div className="container" id="container">
            <div className="form-container sign-in">
              <form onSubmit={handleUpdate}>
                <h1>Update Details</h1>
                <input type="text" name="type" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)}/>
                <input type="text" name="price" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" name="location" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)} />
                <input type="text" name="sqfeet" placeholder="Sqfeet" value={sqfeet} onChange={(e)=>setSqfeet(e.target.value)} />
                <input type="text" name="bhk" placeholder="Bhk" value={bhk} onChange={(e)=>setBhk(e.target.value)} />
                <input type="text" name="parking" placeholder="Parking" value={parking} onChange={(e)=>setParking(e.target.value)} />
                <input type="file" name="img" id="imageInput" placeholder="image.jpeg/image.png"  onChange={(event) => {
                  setImage(event.target.files[0]);
                }} />
                <button type="submit">Update</button>
              </form>
            </div>
            <div className="toggle-container">
              <div className="toggle">
                <div className="toggle-panel toggle-right">
                  <h1>Hello, Admin!</h1>
                  <p>Click here to view the updated site features</p>
                  <button><Link to={'/view'} className="button" style={{color:'white'}}>View</Link></button>
  
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </>
    )
  }
  
  export default UpdateDetails