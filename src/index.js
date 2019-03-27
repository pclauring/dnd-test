import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import * as serviceWorker from './serviceWorker';
import {observe} from './Game';

const root = document.getElementById('root')

observe(cardPosition =>
  ReactDOM.render(<Board cardPosition={cardPosition} />, root),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
