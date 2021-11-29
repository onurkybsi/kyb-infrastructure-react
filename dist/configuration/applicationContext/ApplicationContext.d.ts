/**
 *  ApplicationContext aspects
 * @author Onur Kayabasi
 */
import ApplicationContextCreationParameters from "./models/ApplicationContextCreationParameters";
/**
 * Creates a context for the React application with some functionalities for usage of all application scope
 */
export default class ApplicationContext {
    private static instance;
    private ApplicationParameters;
    private HttpClient;
    private ApplicationContextSetter;
    private constructor();
    /**
     * Receives instance of currentapplication context;
     * @param parameters Parameters for creation of the context
     * @returns Application context
     */
    static getApplicationContext(parameters: ApplicationContextCreationParameters): ApplicationContext;
    private validateApplicationContextCreationParameters;
    /**
     * Sets the application context, can be used by all application scope
     * @param applicationContextSetter Function which has operations to update the context
     */
    setApplicationContext: (applicationContextSetter: (applicationContext: ApplicationContext) => void) => void;
}
