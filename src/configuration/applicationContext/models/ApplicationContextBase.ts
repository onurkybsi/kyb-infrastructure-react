import { HttpClient } from "kyb-infrastructure";

/**
 * Represents a base model for kyb-infrastructure-react applications context models
 * @author Onur Kayabasi
 */
export default interface ApplicationContextBase {
    isContextInitialized?: boolean;
    setContext?: (setter: <TContext extends ApplicationContextBase>(currentContext: TContext) => void) => void;
    applicationParameters?: object;
    backendBaseUrl?: string;
    httpClient?: HttpClient
}