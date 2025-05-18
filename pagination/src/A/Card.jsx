 
 
export default function ProductCard({title,image,price}) {
  return (
    <div className='card'>
       <img src={image} alt={title} />
       <h3>{title}</h3>
        {/* <h3>Price :${price}</h3>  */}
    </div>
  );
}
