import "./StatePanel.css";
import React, { useState } from "react";
import {
  StartPanelProps,
  ChatProps,
} from "@memori.ai/memori-react/dist/components/MemoriWidget/MemoriWidget";
import Drawer from "@memori.ai/memori-react/dist/components/ui/Drawer";
import Chat from "@memori.ai/memori-react/dist/components/Chat/Chat";

export default function StatePanel({
  user,
  userLoggedin,
  chatProps,
}: {
  user: StartPanelProps["user"];
  userLoggedin: StartPanelProps["isUserLoggedIn"];
  chatProps: ChatProps;
}) {
  const [showChat, setShowChat] = useState(false);

  const lastUserText = chatProps.history?.filter(
    (el: ChatProps["history"]) => el.fromUser
  );

  return (
    <div className="memori-panel--container">
      <div className="memori-panel-logged-user--container">
        {user?.avatarURL ? <img src={user?.avatarURL} className="memori-panel-logged-user--avatar" />
        : <div className="memori-panel-unlogged-user--avatar" >
          <img style={{width: 35, margin: "auto"}} src="./user-icon.svg" alt="Utente non loggato" />
          </div>}
        <p className="memori-panel-logged-user--text">
          {userLoggedin ? user?.userName : "Utente non loggato"}
        </p>
      </div> 
      <div className="memori-panel-user-text--container">
        <p className="memori-panel-user-text--title">Testo Inviato:</p>
        <p className="memori-panel-user-text--text">
          {lastUserText && lastUserText.length > 0
            ? lastUserText[lastUserText.length - 1]?.text
            : "Nessun testo inviato"}
        </p>
      </div>
      <button
        onClick={() => setShowChat(!showChat)}
        className="memori-panel-user-text--button"
      >
        Mostra Chat
      </button>
      <Drawer onClose={() => setShowChat(false)} open={showChat}>
        <div className="memori-panel-chat--container">
          <Chat
            showInputs={false}
            memori={chatProps.memori}
            sessionID={chatProps.sessionID}
            history={chatProps.history}
          />
        </div>
      </Drawer>
    </div>
  );
}
