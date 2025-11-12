import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      currentSlide === image.length - 1 ? 0 : (prev += 1)
    );
  };
  const handlePrev = () => {
    setCurrentSlide((prev) =>
      currentSlide <= 0 ? image.length - 1 : (prev -= 1)
    );
  };
  console.log(currentSlide);
  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  if (error !== null) {
    return <div>Error ocurred !{error}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow_left"
      />
      {image.length && image
        ? image.map((img, i) => (
            <img
              src={img.download_url}
              alt="img"
              key={i}
              className={ i === currentSlide ? "current_image" : "current_image  hide_current_image" }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow_right"
      />
      <span className="circle_indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button key={index} 
              onClick={()=>setCurrentSlide(index)}
              className={ index === currentSlide ? 'current_indicator' : 'current_indicator  inactive_indicator' }>
                
              </button>
            ))
          : null}
      </span>
    </div>
  );
}
