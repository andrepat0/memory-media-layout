import React from "react";
import {
  ChatProps
} from "@memori.ai/memori-react/dist/components/MemoriWidget/MemoriWidget";
import "./CustomChat.css";
import ChatInputs from "@memori.ai/memori-react/dist/components/ChatInputs/ChatInputs";

export default function CustomChat({
  history,
  sendMessage,
  memori,
  sessionID,
  showTypingText,
  startListening
}: ChatProps) {
  const [message, setMessage] = React.useState("");

  const handleSendMessage = (message: string) => {
    sendMessage(message);
    setMessage("");
  };

  const lastChatMessage = history?.filter(
    (el: ChatProps["history"]) => !el.fromUser
  );

  const handleVoiceRecognition = () => {
    startListening();
  }

  return (
    <div className="memori-chat--container">
      {lastChatMessage && lastChatMessage.length > 0 ? (
        <div
          className="memori-chat--header"
        >
          {lastChatMessage[lastChatMessage.length - 1]?.media.length > 0 ? (
            <img
              src={
                lastChatMessage[lastChatMessage.length - 1]?.media[0]?.url +
                "/" +
                sessionID
              }
              alt={
                lastChatMessage[lastChatMessage.length - 1]?.media[0]?.title +
                "/" +
                sessionID
              }
              style={{
                width: "100%",
                height: "80%",
                maxHeight: 400,
                borderRadius: "30px",
              }}
            />
          ) : (
            <div
              style={{
                position: "relative",
                width: "100%"
              }}
            >
              <img
                src={memori?.avatarURL}
                className="memori-chat--header--avatar"
              />
              <img
                src={memori?.coverURL}
               className="memori-chat--header--cover"
              />
            </div>
          )}
          <p
           className="memori-chat--header--text"
          >
            {showTypingText ? "..." : lastChatMessage[lastChatMessage.length - 1]?.text}
          </p>
        </div>
      ) : (
        <img src={memori?.avatarURL} />
      )}
      <ChatInputs
        dialogState={memori?.dialogState}
        userMessage={message}
        onChangeUserMessage={setMessage}
        sendMessage={handleSendMessage}
        listening={memori?.listening}
        startListening={handleVoiceRecognition}
        stopListening={() => {}}
        stopAudio={() => {}}
        onTextareaFocus={() => {}}
        onTextareaBlur={() => {}}
        onTextareaPressEnter={() => {}}
        setSendOnEnter={() => {}}
        setAttachmentsMenuOpen={() => {}}
        showMicrophone={false}
      />
      
    </div>
  );
}
