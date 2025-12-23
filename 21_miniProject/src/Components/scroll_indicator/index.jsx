import './scroll.css';
import  { useState, useEffect } from 'react';
import fake from './deta';
export default function ScrollIndicator({url}){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [howMuchScrollPercent, setHowMuchScrollPercent] = useState(0)
    async function fetchData(geturl){
        setLoading(true)
       try{
          const response = await fetch(geturl)
          const data = await response.json()
          console.log(data.products)
           if( data && data.products && data.products.length >0) setData(data.products)
       }
       catch(e){
        console.log('hi',e);
        setError(e.message);
       }
      finally { setLoading(false);}
    }

    const handleScroll =()=>{
        // console.log("scrollTop",document.documentElement.scrollTop,
        //              document.body.scrollTop,
        //         "scrollHeight",document.documentElement.scrollHeight,
        //         "custom",document.documentElement.clientHeight)
         const actualHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // clintHeight -> height of the view port  ---- scrollHeight --total scroll content on web
         const howMuchScrolled = document.documentElement.scrollTop || document.body.scrollTop
         setHowMuchScrollPercent((howMuchScrolled/actualHeight)*100)
     }

     console.log(howMuchScrollPercent);
     useEffect(()=>{fetchData(url)},[url]) 
     useEffect(()=>{
       window.addEventListener('scroll', handleScroll)
       
       return ()=>{window.removeEventListener('scroll',()=>{handleScroll()})}
     },[])
     //Q why many times run if dependency one
     //Jaise aapne ek baar (useEffect) kisi ko bell (EventListener) de di aur kaha ki "Jab bhi koi aaye, bell baja dena". Ab bhale hi aapne bell sirf ek baar di, lekin wo bajegi to har baar jab koi aayega!

    return (
        <div className="">
            <div className='top_container'>
                <h1>Custom Scroll indicator</h1>
            <div className='scroll_progress_tracking_container'>
            <div className='current_progress_bar' 
             style={{width : `${howMuchScrollPercent}%`}}></div>
            </div>
            </div>
            
            <div className="data_container">
                {data && data.length >0 ? data.map(dataItem => <p key={dataItem.id}>{dataItem.title}</p>) 
                                       : null }
                 {
                    /*  {dummy data}  */
                   fake.map((ele,i)=><p key={i}>{ele.title}</p>)
                 }
            </div>
        </div>)
}
