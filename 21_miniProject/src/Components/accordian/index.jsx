import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const handleSingleSelect = (currentid) => {
    console.log(currentid);
    setSelected(currentid === selected ? null : currentid);
  };
  return (
    <div className="wrapper">
      <button>Enable multipe </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() => handleSingleSelect(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>NO data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
