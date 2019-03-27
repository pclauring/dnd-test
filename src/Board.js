import React from 'react';
import Pile from './Pile';
import Card from './Card';
import {moveCard} from './Game';

function handlePileClick(index) {
    console.log(index);
    moveCard(index);
}

function renderPile(boardIndex, index) {
    const isCardHere = boardIndex === index;
    const card = isCardHere ? <Card /> : null;
  
    return (
    <div key={boardIndex} style={{ width: '25%', height: '100px' }}
    onClick={() => handlePileClick(boardIndex)} >
    <Pile >{card}</Pile>
    </div>)
  }

export default function Board({ cardPosition }) {
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