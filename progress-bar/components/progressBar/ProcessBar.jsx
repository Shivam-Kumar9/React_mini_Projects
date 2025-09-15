import { useEffect, useState } from "react";
import "./Bar.css";

const ProgressBar = ({ progress }) => {
  const [animtedProgress , setAnimtedProgress] = useState(0)
  
  useEffect(()=>{
    setTimeout(() => 
     setAnimtedProgress(progress)       
    , 100);
  },[progress])
       
   return (
    <div className="outer">
      <div
        style={{
          // width: `${animtedProgress}%`,
          transform : `translateX(${animtedProgress-100}%)`,
          color: animtedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax='100'
        aria-valuemin='0'
        className="inner"
      >
        {progress}%
      </div>
    </div>
  );
};

const bar = [0, 2, 5, 10, 30, 50, 70, 90, 100];

function FinalProgressBar() {
//   const [count, setCount] = useState(0);

  return (
    <>
      <h1>Progress Bar</h1>
      {bar.map((value,i) => (
        <ProgressBar key={i} progress={value} />
      ))}
    </>
  );
}

export default FinalProgressBar;
