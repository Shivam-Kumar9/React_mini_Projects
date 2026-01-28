import { useEffect, useState } from "react";


export default function useFetch(url, option ={}){

    const [data,setData] = useState(null)
    const [pending, setPending] = useState(false)
    const [error ,setError]  = useState(null)
    
    async function fetchData(link) {
        setPending(true)
        try {
            const response = await fetch(link)
            if(!response.ok) new Error('Server or URL error occured')
            const result = await response.json()
            setData(result) 

        } catch (e) {
             setError(`${e} , Some error found`)
        }
        finally{
            setPending(false)
        }

        }

    useEffect(()=>{
    fetchData(url)
    },[url])

    return  { data , pending , error} 

}