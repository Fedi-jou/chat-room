import React from "react";

function Theirmessage({ message, lastmessage }) {
  const isfirstmessagebyuser =
    !lastmessage || lastmessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isfirstmessagebyuser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isfirstmessagebyuser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isfirstmessagebyuser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default Theirmessage;
