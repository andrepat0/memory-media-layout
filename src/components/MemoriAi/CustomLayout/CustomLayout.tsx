import { LayoutProps } from "@memori.ai/memori-react/dist/components/MemoriWidget/MemoriWidget";
import StatePanel from "./StatePanel/StatePanel";
import "./CustomLayout.css";
import CustomChat from "./Chat/CustomChat";

export const CustomLayout: React.FC<LayoutProps> = ({
  chatProps,
  StartPanel,
  startPanelProps,
  sessionId,
  hasUserActivatedSpeak,
  Chat,
  Header,
  headerProps,
}) => {
  <>
    <Header {...headerProps} />

    <div className="memori-custom-layout--controls--container">
      {(chatProps?.history && chatProps.history.length > 0) ||
      startPanelProps?.isUserLoggedIn ? (
        <StatePanel
          user={startPanelProps?.user}
          userLoggedin={startPanelProps?.isUserLoggedIn}
          userText={chatProps?.history}
        />
      ) : null}
      {sessionId && hasUserActivatedSpeak && Chat && chatProps ? (
       <CustomChat {...chatProps} />
      ) : startPanelProps ? (
        <StartPanel {...startPanelProps} />
      ) : null}
    </div>
  </>;
};
