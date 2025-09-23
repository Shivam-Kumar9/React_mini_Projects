import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleSelect, setMultipleSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (currentid) => {
    // console.log(currentid);
    setSelected(currentid === selected ? null : currentid);
  };

  const handleMultiSelect = (id) => {
    const copyMultiple = [...multiple];
    const isIndexOf = copyMultiple.indexOf(id);

    console.log(isIndexOf, typeof id, id);
    if (isIndexOf === -1) copyMultiple.push(id);
    else copyMultiple.splice(isIndexOf, 1);
    console.log(copyMultiple);
    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setMultipleSelected(!multipleSelect)}>
        Enable multipe {multipleSelect ? "🟢" : "🔴"}{" "}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() =>
                  multipleSelect
                    ? handleMultiSelect(dataItem.id)
                    : handleSingleSelect(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                multipleSelect
                ? multiple.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  ) 
                : (selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>))

              }

              {/* {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}  
                this is good but this create bugg when we select multiple and then switch to single
               */} 
              
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
