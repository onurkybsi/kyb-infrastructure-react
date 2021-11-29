import ApplicationContext from "../ApplicationContext";

/**
 * Represents parameters objects for creation of ApplicationContext
 */
export default interface ApplicationContextCreationParameters {
    applicationParametersFilePath: string;
    backendBaseUrl: string;
    applicationContextSetter: (context: ApplicationContext) => void;
}