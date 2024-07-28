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
  return (
    <>
      <Header {...headerProps}  showLogin={true}  />

      <div className="memori-custom-layout--controls--container">
        {(chatProps?.history && chatProps.history.length > 0) ||
        startPanelProps?.isUserLoggedIn ? (
          <StatePanel
            user={startPanelProps?.user}
            userLoggedin={startPanelProps?.isUserLoggedIn}
            chatProps={chatProps}
          />
        ) : null}
        {sessionId && hasUserActivatedSpeak && Chat && chatProps ? (
         <CustomChat {...chatProps} />
        ) : startPanelProps ? (
          <StartPanel {...startPanelProps} />
        ) : null}
      </div>
    </>
  );
};

