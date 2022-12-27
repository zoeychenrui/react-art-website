import React from 'react'
import { useParams } from "react-router-dom"
import storage from "./sliders/Config";
import { useState, useEffect } from "react";


export default function Class() {
  const { id } = useParams()

  const [allImages, setImages] = useState([]);

  const getFromFirebase = () => {
    let storageRef = storage.ref().child(id);
    storageRef.listAll().then(function (res) {
        res.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
              setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(allImages);

useEffect(() => {
    getFromFirebase();
   
}, []);

  return (
    <div id="photos">
    {allImages.map((image) => {
       return (
          <div key={image} className="image">
             <img src={image} alt="" />
          </div>
        );
      })}
  </div>
  
  )
}