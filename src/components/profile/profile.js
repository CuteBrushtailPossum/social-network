import React from 'react'
import avatar from '../../img/avatar.png'
import Posts from './posts/posts'
import Messages from '../messages/messages'
function Profile(){
    return(
        <div className='profile'> 
            <div className='me'>
                <div className='pfp'>
                    <img src={avatar}alt='Avatar'/>
                    <a className='messagebtn' href=''>Send message</a>
                </div>
                <div className='profileinfo'>
                    <h2 className='username'>Kyle Broflovski</h2>
                    <p className='status'>Lorem ipsum</p>
                    <p><span>Birthday:</span> 12/10/2000</p>
                    <p><span>City:</span> London</p>
                    <p><span>Education:</span> Oxford</p>
                </div>
            </div>
            <Posts></Posts>
            <Messages></Messages>
        </div>
)}
export default Profile