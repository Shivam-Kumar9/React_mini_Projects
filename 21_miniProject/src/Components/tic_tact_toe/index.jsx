import { useEffect, useState } from "react";
import "./style.css";
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTactToe() {
  const [playground, setPlayground] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  function handlePlay(currentBox) {
    let cpySquare = [...playground];
    if (getWinner(cpySquare) || cpySquare[currentBox] !== "") return;
    cpySquare[currentBox] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setPlayground(cpySquare);
  }
  console.log(playground);

  function getWinner(played) {
    const winningPosition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPosition.length; i++) {
      let [a, b, c] = winningPosition[i];

      if (played[a] && played[a] === played[b] && played[a] === played[c]) {
        return played[a];
      }
    }
    return null;
  }

  useEffect(() => {
    let result = getWinner(playground);
    if (!result && playground.every((box) => box !== ""))
      setStatus("The game is DRAW!, Please restart the game ");
    else if (result) setStatus(`Winner is ${result}! Please restart the game.`);
    else setStatus(`This is ${isXturn ? "X" : "O"} turn`);
  }, [isXturn, playground]);

  return (
    <div className="wrapper_tic_box">
      <div className="tic_tac_container">

        {playground.map((ele, i) => (
          <Square key={i} onClick={() => handlePlay(i)} value={ele} />
        ))}
      
      </div>
      <h1>{status}</h1>

      <button 
        onClick={() => {
          setIsXturn(true);
          setPlayground(Array(9).fill(""));
        }}
      >
        Restart
      </button>
    </div>
  );
}


  {/* <Square onClick={() => handlePlay(0)} value={playground[0]} />
          <Square onClick={() => handlePlay(1)} value={playground[1]} />
          <Square onClick={() => handlePlay(2)} value={playground[2]} />

          <Square onClick={() => handlePlay(3)} value={playground[3]} />
          <Square onClick={() => handlePlay(4)} value={playground[4]} />
          <Square onClick={() => handlePlay(5)} value={playground[5]} />

          <Square onClick={() => handlePlay(6)} value={playground[6]} />
          <Square onClick={() => handlePlay(7)} value={playground[7]} />
          <Square onClick={() => handlePlay(8)} value={playground[8]} /> */}

        {/* <div className="row">
        </div>
        <div className="row">
        </div>
        <div className="row">
        </div> */}