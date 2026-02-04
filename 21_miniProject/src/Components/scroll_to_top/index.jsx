import { useRef } from "react";
import useFetch from "../custom_hook/use_fetch";

function ScrollTo_TopBottom() {
  const refDown = useRef(null);
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );
  function handleToDown(){
    refDown.current.scrollIntoView({ behavior : 'smooth' });
   }
  function  handleToTop(){
    window.scrollTo({
        top : 0, left : 0 , behavior : 'smooth'
    })
    // think this through it should be practiced 
  }

  return (
    <>
      <h1>Scroll To Top & Bottom</h1>
      <h3>This is top section</h3>

      <button onClick={handleToDown}>Scroll to bottom</button>
 
      {pending ? <h2>Pending ! please waite...</h2> : null}
      {error ? <p>{error}</p> : null}
      <ol>
        {!pending &&
          data && 
          data.products.map((list) => <li key={list.id}>{list.title}</li>)}
      </ol>
      <h3 >This is bottom section</h3>
       <div ref={refDown}></div>
      <button onClick={handleToTop}>Scroll to top</button>

    </>
  );
}

export default ScrollTo_TopBottom;
