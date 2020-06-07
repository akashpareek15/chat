import React from 'react';

import './Message.css';
import moment from 'moment';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  const trimmedTime = moment(time).format("hh:mm:ss")
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <span className="sentText pr-10">{trimmedName}</span>
          <span className="sentText pr-10">{trimmedTime}</span>
          <div className="messageBox backgroundLight">
            <span className="messageText colorDark">{ReactEmoji.emojify(text)}</span>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <span className="sentText pr-10">{trimmedTime}</span>
          <div className="messageBox backgroundLight">

            <span className="messageText colorDark">{ReactEmoji.emojify(text)}</span>
          </div>
          <span className="sentText pl-10 ">{user}</span>
        </div>
      )
  );
}

export default Message;