/**
 * Creates a global state for a kyb-infrastructure-react application via React context API
 * @author Onur Kayabasi
 */

import React from "react";
import ApplicationContextBase from "./applicationContext/models/ApplicationContextBase";

const ApplicationState: React.Context<ApplicationContextBase> = React.createContext<ApplicationContextBase>({
    applicationParameters: undefined,
    setContext: (setter: (currentContext: ApplicationContextBase) => void): void => {
        throw new Error("It must be set in the component which is inherited from InitializerComponent!");
    },
    backendBaseUrl: undefined,
    isContextInitialized: false,
    httpClient: undefined
});

export default ApplicationState;