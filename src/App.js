import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <div className='profile'>
            <Route path='/profile' component={Profile}></Route>
        </div>
      </BrowserRouter>
    </div>
)}

export default App