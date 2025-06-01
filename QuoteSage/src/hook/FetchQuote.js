import { useState ,useEffect } from "react";
import  axios from 'axios'

function useFetchQuote() {
  const [storeQuote, setStoreQuote] = useState([]);
  const [error, setError] = useState(null);
  const [loading ,setLoading] = useState(false)

  const [likesCount,setLikesCount]=useState(()=>Math.floor(Math.random() * 100)*13)
  const [isLiked,setIsLiked]=useState(false);
     
 const targetUrl = 'https://zenquotes.io/api/random';
 const encodedTargetUrl = encodeURIComponent(targetUrl); 

 const URL = `https://api.allorigins.win/get?url=${encodedTargetUrl}&disableCache=true`;

  
 const handleLike = ()=>{
    setIsLiked(prev=>!prev)
    isLiked?setLikesCount(prev=>prev-1)
        :setLikesCount(prev=>prev+1)
 }

  const getQuote = async () => {
    try {
      setLoading(true)
      let res = await  axios.get(URL);
      console.log(res);
      if (res.status == 200) {
        let parsed = JSON.parse(res.data.contents);
        setStoreQuote(parsed);
        console.log(parsed);
       } else {
        throw new Error('No quest data received')
      }
    } catch (error) {
      // console.log(`we found this error:--`, error);
      setError('Failed to fetch quote. Please try again.')
    }
    finally{
      setLoading(false)
    }
  };
//  console.log(error)
  return [handleLike,isLiked,likesCount, storeQuote, getQuote , loading ,error];
}

export default useFetchQuote;
