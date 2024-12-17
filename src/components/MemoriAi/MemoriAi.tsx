import Memori from "@memori.ai/memori-react";
import { CustomLayout } from "./CustomLayout/CustomLayout";
import "@memori.ai/memori-react/dist/styles.css";
import "./MemoriAi.css";

export default function MemoriAi() {
  return (
    <Memori
      memoriName="The Land of Memori"
      ownerUserName="andrea.patini3"
      tenantID="aisuru-staging.aclambda.online"
      apiURL="https://backend-staging.memori.ai"
      engineURL="https://engine-staging-tmp.memori.ai"
      baseURL="https://aisuru-staging.aclambda.online"
      uiLang="en"
      lang="it"
      spokenLang="en"
      multilingual={false}
      integrationID="3bbd1999-c289-45aa-a562-3184d1fdfa70"
      layout="FULLPAGE"
      showShare
      customLayout={CustomLayout}
      multilingual
    />
  );
}
