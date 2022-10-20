import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let post=[
  {id:1,text:'Hello people'},
  {id:2,text:'Sup'},
  {id:3,text:'uwiquoiwq'},
]
let dialogues=[
  {id:1,username:'Joe'},
  {id:2,username:'Bob'},
  {id:3,username:'Anna'}
]
let messagetext=[
  {id:1,text:'Hello'},
  {id:2,text:'Wanna go to the park'},
  {id:3,text:'Sure'}
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogues={dialogues} post={post} messagetext={messagetext}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
