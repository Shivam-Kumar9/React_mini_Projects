import { useState, useEffect } from "react";
import "../load_more_data/load.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );

      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts(prevData => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="load_more_data_container">
      <div className="product_container">
        {products && products.length
        ? products.map((item) => (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.title} />
              <p> {item.title}</p>
            </div>
          ))
        : null}
      </div>

      <div className="btn_container">
        <button 
        onClick={()=>setCount(count+1)}
        className="load_more_button"
        >Load More</button>
      </div>
    </div>
  );
}
