import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import Messages from './components/messages/messages';

function App(props) {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <div className='profile'>
            <Route exact path='/' render={()=><Profile post={props.post}/>}></Route>
            <Route exact path='/profile' render={()=><Profile post={props.post}/>}></Route>
            <Route exact path='/messages' render={()=><Messages dialogues={props.dialogues} messagetext={props.messagetext}/>}></Route>
        </div>
      </BrowserRouter>
    </div>
)}

export default App
// // Сделать лайки на постах, добавить новое свойство в массив с постах
// написать количество лайков, отобразить в посте //