import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from '../utils/enhanceImageApi'

function Home() {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)
 
  const UploadImgeHandler=async (file)=>{
      setUploadImage(URL.createObjectURL(file)) //we can't save file  -- we can save an object of file that behaves like image  
      console.log(URL.createObjectURL(file)) //now the img beacoms link -- this link behave like img where img is
      setLoading(true)
      // call the api to inhace the img
      try {
        // code which may produce error
        const enhancedURL = await enhancedImageAPI(file);
        setEnhancedImage(enhancedURL)
        setLoading(false);
      } catch (error) {
        // code to handle the error and show message 
        console.log(error);
        alert('Erroor while enhancing the image. Please try again later.');
      }
  }
  console.log(enhancedImage)
  return (
    <div >
      
      <ImageUpload UploadImgeHandler={UploadImgeHandler}/>
      <ImagePreview 
        loading={loading} 
        uploaded={uploadImage} 
        enhanced={enhancedImage?.image }/>
    </div>
  )
}

export default Home
