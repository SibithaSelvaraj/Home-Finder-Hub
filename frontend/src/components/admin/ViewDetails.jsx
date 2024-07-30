import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewDetails.css'
import { useNavigate, Link } from 'react-router-dom';
const ViewDetails = () => {
    const navigate = useNavigate()

    const [product,setProduct] = useState([])
    const getProduct=()=>{
        axios.get("http://localhost:4000/api/getProduct?location=")
        .then((d)=>{
            console.log(d.data)
            setProduct(d.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getProduct()
    },[])

    
    const deleteDetails =(id)=>{
        axios.delete(`http://localhost:4000/api/${id}`)
        .then(()=>{
            getProduct();
            alert("Deleted Successfully");

        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <>
   
    <div className='body'>
    <div className="header">
        <button><Link to={`/add`} className='button'>Add</Link></button><button><Link to={`/`} className='button'>Home page</Link></button>
   </div>
    <div className="header_fixed">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Sq Feet</th>
                    <th>Bhk</th>
                    <th>Parking</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                product.map((item)=>(
                <tr>
                    <td><img src={item.img} /></td>
                    <td>{item.type}</td>
                    <td>{item.price}</td>
                    <td>{item.location}</td>
                    <td>{item.sqfeet}</td>
                    <td>{item.bhk}</td>
                    <td>{item.parking}</td>
                    <td>
                    <Link to={`/update/${item._id}`} className='button'>Update</Link>

                    <button onClick={()=>deleteDetails(item._id)}>Delete</button></td>
                </tr>
                ))
            }
            
            </tbody>
        </table>
    </div>
</div>
        


    </>
  )
}

export default ViewDetails
