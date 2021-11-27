// import React, { useState } from "react";
// import { calculateWinner } from "../helper";
// import Board from "./Board";

// const Game = () => {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [stepNumber, setStepNumber] = useState(0);
//   const [xIsNext, setXisNext] = useState(true);
//   const winner = calculateWinner(history[stepNumber]);
//   const xO = xIsNext ? "X" : "O";

//   const handleClick = (i) => {
//     const historyPoint = history.slice(0, stepNumber + 1);
//     const current = historyPoint[stepNumber];
//     const squares = [...current];
//     // return if won or occupied
//     if (winner || squares[i]) return;
//     // select square
//     squares[i] = xO;
//     setHistory([...historyPoint, squares]);
//     setStepNumber(historyPoint.length);
//     setXisNext(!xIsNext);
//   };

//   const jumpTo = (step) => {
//     setStepNumber(step);
//     setXisNext(step % 2 === 0);
//   };

//   const renderMoves = () => {
//     history.map((_step, move) => {

//       if(move>0 && move<=5){
//       const destination = move ? `Go to move #${move}` : "Go to Start";
//       return (
//         <li key={move}>
//           <button onClick={() => jumpTo(move)}>{destination}</button>
//         </li>
//       );

//       }
//     });
//     if(winner){
//       alert(`Congratulations.. ! ${winner} won the Game !`);window.location.reload();
//     }
//   }
    
//   // window.addEventListener("beforeunload", (ev) => 
//   // {  
//   //     ev.preventDefault();
//   //     return ev.returnValue = 'Are you sure you want to close?';
//   // });

//   return (
//     <>
//      <h1>        Tic Tac Toe          </h1>
//       <Board squares={history[stepNumber]} onClick={handleClick} />
//       <div className="info-wrapper">
//         <div>
//           <h3>History</h3>
//           {renderMoves()}
//         </div>
//         <h3></h3>
        
//         <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        
//             {/* alert(`Ta da ! ${winner} won the Game !`) */}
//             <div><button onClick={() => window.location.reload()}>Clear Game</button></div>       
          
          
          
//       </div>
//     </>
//   );

  
// };

// export default Game;



import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {

      if(move>0 && move<=5){
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );

      }

      if(winner){
        alert(`Congratulations.. ! ${winner} won the Game !`);window.location.reload();
      }

    });

    

  return (
    <>
    <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"   }}>
     <h1>Tic Tac Toe</h1>
     </div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? () => { alert(`Congratulations.. ! ${winner} won the Game !`);window.location.reload()} : null}</h3>
        
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        
            {/* alert(`Ta da ! ${winner} won the Game !`) */}
            <div><button onClick={() => window.location.reload()}>Clear Game</button></div>       
          
          
      </div>
    </>
  );

  
};

export default Game;



// Tushar Done