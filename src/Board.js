import React from 'react';
import Card from './Card';
import BoardPile from './BoardPile';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// function handlePileClick(index) {
//     console.log(index);
//     moveCard(index);
// }

// function renderPile(boardIndex, index) {
//     const isCardHere = boardIndex === index;
//     const card = isCardHere ? <Card /> : null;
  
//     return (
//     <div key={boardIndex} style={{ width: '25%', height: '100px' }}
//     onClick={() => handlePileClick(boardIndex)} >
//     <Pile >{card}</Pile>
//     </div>)
//   }
function renderPile(index, cardPosition) {
  return (
    <div key={index} style={{ width: '25%', height: '100px' }}>
    <BoardPile index={index}>
    {renderCard(index, cardPosition)}
    </BoardPile> 
    </div>
  )
}

function renderCard(boardIndex, cardIndex){
  if(boardIndex === cardIndex){
    return <Card />
  }
}

function Board({ cardPosition }) {
    const boardPiles = [];
    for (let i = 0; i < 4; i++) {
        boardPiles.push(renderPile(i, cardPosition))
    }
  return (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {boardPiles}
    </div>
  )
}

export default DragDropContext(HTML5Backend)(Board)