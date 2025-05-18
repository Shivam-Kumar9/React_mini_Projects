import { useEffect, useState } from 'react'
import './a.css'
import Pagination from './pag';
import ProductCard from './Card';
const URL ="https://dummyjson.com/products?limit=200"

function MainA() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  
  function fetchingData(){
   fetch(URL)
             .then(res=> res.json())
             .then(info =>{setData(info.products);   console.log(info)}  )
             .catch(error=> console.log(error))
 };useEffect(() => { fetchingData() }, []);

const  Page_Limit= 10;
const  totalProduct = data.length;
const NoOfPages = Math.ceil(totalProduct/Page_Limit);
const  start = currentPage * Page_Limit;
const  end  = start + Page_Limit;

const  handlePageChange = (n)=>{
   setCurrentPage(n)
}
const goToPrevPage =()=>{
    setCurrentPage(prev=> prev - 1)
}
const goToNextPage =()=>{
    setCurrentPage(prev=> prev + 1)
}
  return (
    <><h3>{JSON.stringify(NoOfPages)}</h3>
  
        <Pagination currentPage={currentPage} NoOfPages={NoOfPages} setCurrentPage={setCurrentPage} />
    {
        !data.length 
           ? <h1>No Products</h1> 
           : <div className='Container'>
            {data.slice(start,end).map(item =>{
            const {id,title, description,price,thumbnail } = item
            return <ProductCard key={id} title={title} price={price} image={thumbnail}/>
           })}
           </div>   
      }</>
  )
}

export default MainA
