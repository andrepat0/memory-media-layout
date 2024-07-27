import React from "react";
import {
  ChatProps,
  LayoutProps,
} from "@memori.ai/memori-react/dist/components/MemoriWidget/MemoriWidget";

export default function CustomChat({
  history,
  sendMessage,
  memori,
  sessionID,
  showTypingText
}: ChatProps) {
  const [message, setMessage] = React.useState("");

  const handleSendMessage = (message: string) => {
    // handle the enter key
    sendMessage(message);
  };

  const lastChatMessage = history?.filter(
    (el: ChatProps["history"]) => !el.fromUser
  );

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    }}>
      {lastChatMessage && lastChatMessage.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            maxWidth: "90%",
          }}
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
              }}
            >
              <img
                src={memori?.avatarURL}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  position: "absolute",
                  top: "70%",
                  left: 2,
                }}
              />
              <img
                src={memori?.coverURL}
                style={{
                  width: "100%",
                  height: "80%",
                  maxHeight: 400,
                  borderRadius: "30px",
                }}
              />
            </div>
          )}
          <p
            style={{
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {showTypingText ? "..." : lastChatMessage[lastChatMessage.length - 1]?.text}
          </p>
        </div>
      ) : (
        <img src={memori?.avatarURL} />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          maxWidth: "90%",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage(message);
              //reset the input
              setMessage("");
            }
          }}
          style={{
            width: "80%",
            height: 40,
            borderRadius: 20,
            border: "1px solid #000",
            padding: 10,
            marginRight: 10,
          }}
        />
        <button
          style={{
            width: 100,
            height: 40,
            borderRadius: 20,
            border: "1px solid #000",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => handleSendMessage(message)}
        >
          Send
        </button>
      </div>
    </div>
  );
}
