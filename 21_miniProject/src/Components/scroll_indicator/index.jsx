import './scroll.css'
import React, { useState, useEffect } from 'react';

export default function ScrollIndicator({url}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
     
    async function fetchData(geturl){
        setLoading(true) 
       try{
          const response = await fetch(geturl)
          const data = await response.json()
          console.log(data.products);
           if( data && data.products && data.products.length >0) setData(data.products)
       } catch (e) {
        console.log(e);
        setError(e.message)
       }
      finally { setLoading(false)}
    }
     useEffect(()=>fetchData(url),[url])    
    
    return (
        <div className="">
            <h1>Custom Scroll indicator</h1>
            <div className="data_container" >
                {data && data.length >0 ? data.map(dataItem => <p>{dataItem.title}</p> 
                                       ): null }
            </div>
        </div>
    )
}