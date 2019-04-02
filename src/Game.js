export function observeTest(receive) {
  setInterval(() => receive(Math.floor(Math.random() * 4)), 500);
}

let cardPosition = 0;
let observer = null;

function emitChange() {
  observer(cardPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  emitChange();
}

export function moveCard(index) {
  cardPosition = index;
  emitChange();
}
