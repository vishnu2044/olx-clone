import React, { useContext, useEffect, useState} from 'react';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

import './View.css';
import { postContext } from '../../store/PostContext';
import Header from '../Header/Header';
function View() {
  const [userDetails, setUserDetails] = useState()
  const {postDetails} = useContext(postContext)
  const navigate = useNavigate()

  useEffect(()=>{
    console.log(postDetails)
    const { userId } = postDetails
    console.log("usidd", userId)
    const q = query(collection(getFirestore(), "users"), where("id","==", userId));
    const querysnapshot = getDocs(q)
    console.log(querysnapshot)
  }, [postDetails])

  return (
    <div>
      <Header />
      <div className="viewParentDiv">

      <div className="imageShowDiv">
        <img
          src={postDetails.url ? postDetails.url : ""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
        <button onClick={()=>{
          navigate('/')
        }} className="uploadBtn">Back to home</button>
      </div>
      </div>

    </div>

  );
}
export default View;
