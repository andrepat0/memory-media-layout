import "./StatePanel.css";
import React, { useState } from "react";
import {
  StartPanelProps,
  ChatProps,
} from "@memori.ai/memori-react/dist/components/MemoriWidget/MemoriWidget";
import Drawer from "@memori.ai/memori-react/dist/components/ui/Drawer";
import Chat from "@memori.ai/memori-react/dist/components/Chat/Chat"

export default function StatePanel({
  user,
  userLoggedin,
  chatProps
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
      <p className="memori-panel-logged-user--content">
        {userLoggedin ? user : ""}
      </p>
      <div className="memori-panel-user-text--container">
        <p className="memori-panel-user-text--title">Testo Inviato:</p>
        <p className="memori-panel-user-text--content">
          {lastUserText && lastUserText.length > 0
            ? lastUserText[lastUserText.length - 1]?.text
            : "Nessun testo inviato"}
        </p>
      </div>
      <div className="memori-panel-user-text--container">
        <button
          onClick={() => setShowChat(!showChat)}
          className="memori-panel-user-text--button"
        >
          Mostra Chat
        </button>
      </div>
      <Drawer onClose={() => setShowChat(false)} open={showChat}>
        <div className="memori-panel-chat--container">
          <Chat {...chatProps}  />
        </div>
      </Drawer>
    </div>
  );
}
