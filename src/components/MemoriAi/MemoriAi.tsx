import Memori from "@memori.ai/memori-react";
import { CustomLayout } from "./CustomLayout/CustomLayout";
import "@memori.ai/memori-react/dist/styles.css";

export default function MemoriAi() {
  return (
    <Memori
      memoriName="L'Ombra della Selva Proibita"
      ownerUserName="patini929"
      memoriID="0f712592-ed6a-4d1a-8720-161752af136e"
      ownerUserID="1941d326-6986-4fa1-872b-458d09fb654c"
      tenantID="www.aisuru.com"
      apiURL="https://backend.memori.ai"
      baseURL="https://www.aisuru.com"
      showShare
      customLayout={CustomLayout}
      multilingual
    />
  );
}
