// limit the one value -- line 17
import { useEffect } from "react";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const OTP_Digit_Count = 5;
  const [count, setCount] = useState(0);
  const [inputArr, setInputArr] = useState(new Array(OTP_Digit_Count).fill(""));

  const refArr = useRef([]);

  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])
  // console.log(refArr.current)

  const handleOnChange = (value, i) => {
    if (isNaN(value)) {
      return;
      }
    console.log(value);
    let newVal = value.trim()
    let newArr = [...inputArr];
    newArr[i] = newVal.slice(-1);
    setInputArr(newArr);
    newVal &&  refArr.current[i+1]?.focus()
  };

  const handleOnKeyDown =(e,i)=>{
      console.log(e)
      const { code ,key,keyCode, target } = e;
      if( key == 'Backspace'){
        !target.value && refArr.current[i-1]?.focus()
      }
      
  }

  return (
    <>
      <div className="main">
        <h1>Validate OTP</h1>
        {inputArr.map((inp, i) => (
          <input
            ref={input=> refArr.current[i] = input }
            onKeyDown={(e)=>handleOnKeyDown(e,i)}
            value={inputArr[i]}
            onChange={(e) => handleOnChange(e.target.value, i)}
            className="inp"
            key={i}
            type="text"
            
          />
        ))}
      </div>
    </>
  );
}

export default App;
