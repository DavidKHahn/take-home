import React, { useState } from 'react';

const Row = (cells, len) => {
  const cellRows = Array.apply(null, { length: len }).map(() =>

    <span key={cells}>
      {CheckBoardCells(cells++)}
    </span>
  );
  return cellRows;
}

const CheckBoardCells = (index) => {
  if (index % 2 === 0) {
    return React.createElement('span', {
      style: {
        width: '80px',
        height: '80px',
        display: 'inline-block',
        backgroundColor: 'white'
      }
    });
  }

  return React.createElement('span', {
    style: {
      width: '80px',
      height: '80px',
      display: 'inline-block',
      backgroundColor: 'black'
    }
  });
}

const CheckerBoard = () => {
  let [cell, setNewCell] = useState(8)

  let createRows = Array.apply(null, { length: cell }).map((row, rowId) =>
    <li key={rowId}>{Row(rowId, cell)}</li>
  );

  const changeCheckerBoard = (e) => {
    setNewCell(e.target.value);
  }

  return (
    <section className="container">
        <div className="row-number">
        <h1>React Checkerboard</h1>

          <text style={{ fontSize:'20px'}}>Upon entering, resizes the board to an NxN board (i.e. N cells by N cells): </text>

          <input
            className="input"
            value={cell}
            onChange={e => changeCheckerBoard(e)}
          />
        </div>

      <div className="row"> {createRows} </div>
    </section>
  )
}

export default CheckerBoard;