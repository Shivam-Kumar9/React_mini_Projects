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

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  if (error !== null) {
    return <div>Error ocurred !{error}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow_left" />
      {image.length && image
        ? image.map((img, i) => (
            <img
              src={img.download_url}
              alt="img"
              key={i}
              className="current_image"
            />
          ))
        : null}

      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button key={index} className="current_indicator">_</button>
            ))
          : null}
      </span>
    </div>
  );
}
