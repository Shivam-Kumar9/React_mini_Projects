import useFetch from "./index"



export default function Test_custom_hook(){
   
    const { data, error , pending} = useFetch('https://dummyjson.com/products',{})

    return<>
       <h1> Testing Custom </h1>
       {pending ? <h2>Pending ! please waite...</h2> : null }
        {error ? <p>{error}</p> : null}
      { !pending && data && data.map(list =>(<div>{list}</div>))}
    </>
}