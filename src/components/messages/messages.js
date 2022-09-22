import React from "react";
import Message from "./message";
function Messages() {
    return(
        <div className="messages">
            <div className="contacts">
                <ul>
                    <li>John</li>
                    <li>Bob</li>
                    <li>Lisa</li>
                </ul>
                <div className="line"></div>
                <div className="chat">
                    <ul>
                        <li><Message messagebox='Hello'/></li>
                        <li>Let's go to park</li>
                        <li>Sure</li>
                    </ul>
                    <textarea className="messagebox"></textarea>
                    <button className="sendbutton">Send</button>
                </div>
            </div>
        </div>
)}
export default Messages