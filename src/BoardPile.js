import React from 'react';
import Pile from './Pile';
import { moveCard } from './Game'
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const pileTarget = {
    drop(props) {
        moveCard(props.index)
    },
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

function BoardPile({ index, connectDropTarget, isOver, children }) {
    return connectDropTarget(
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
        <Pile >{children}</Pile>
        {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
        </div>,
    )
}

export default DropTarget(ItemTypes.CARD, pileTarget, collect)(BoardPile)