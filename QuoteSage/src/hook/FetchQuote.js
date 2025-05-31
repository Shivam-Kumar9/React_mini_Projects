import { useState ,useEffect } from "react";
import  axios from 'axios'

function useFetchQuote() {
  const [storeQuote, setStoreQuote] = useState([]);
  const [error, setError] = useState(null);
  const [loading ,setLoading] = useState(false)

  const [isLiked,setIsLiked]=useState(false) 
  const [likesCount,setLikesCount]=useState()
  console.log(likesCount)
 const URL =
  "https://api.allorigins.win/get?url=https://zenquotes.io/api/random&disableCache=true";

  const getQuote = async () => {
    try {
      setLoading(true)
      let res = await axios.get(URL);
      // console.log(res);
      if (res.status == 200) {
        let parsed = JSON.parse(res.data.contents);
        setStoreQuote(parsed);
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
  return [storeQuote, getQuote , loading ,error];
}

export default useFetchQuote;
