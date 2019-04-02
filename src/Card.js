import React from "react";
import { ItemTypes } from "./Constants";
import { DragSource } from "react-dnd";

const cardSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Card({ connectDragSource, isDragging }) {
  return connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 50,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      ♘
    </div>
  );
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
