import React from "react";
import Message from "./message";
import {NavLink} from 'react-router-dom'
import Messageuser from "./messageuser";
import './messages.css'
function Messages(props) {
    return(
        <div className="messages">
            <div className="contacts">
                <div className="users">
                  {props.dialogues.map((e)=><Messageuser id={e.id} username={e.username}/>)}
                </div>
                <div className="line"></div>
                <div className="chat">
                    <div>
                        {props.messagetext.map((e)=><Message id={e.id} messagebox={e.text}/>)}
                    </div>
                    <textarea className="messagebox"></textarea>
                    <button className="sendbutton">Send</button>
                </div>
            </div>
        </div>
)}
export default Messages