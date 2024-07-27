import "./StatePanel.css";
import React, { useState } from "react";
import {
  StartPanelProps,
  ChatProps,
} from "@memori.ai/memori-react/dist/components/MemoriWidget/MemoriWidget";

export default function StatePanel({
  user,
  userLoggedin,
  userText,
}: {
  user: StartPanelProps["user"];
  userLoggedin: StartPanelProps["isUserLoggedIn"];
  userText: ChatProps["history"];
}) {
  const lastUserText = userText?.filter(
    (el: ChatProps["history"]) => el.fromUser
  );

  return (
    <div className="memori-panel--container">
      <p className="memori-panel-logged-user--content">{userLoggedin ? user : ""}</p>
      <div className="memori-panel-user-text--container">
        <p className="memori-panel-user-text--title">Testo Inviato:</p>
        <p className="memori-panel-user-text--content">
          {lastUserText && lastUserText.length > 0
            ? lastUserText[lastUserText.length - 1]?.text
            : "Nessun testo inviato"}
        </p>
      </div>
    </div>
  );
}
