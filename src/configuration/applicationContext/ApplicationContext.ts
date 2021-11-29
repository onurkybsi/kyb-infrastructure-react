/**
 *  ApplicationContext aspects
 * @author Onur Kayabasi
 */

import ApplicationContextCreationParameters from "./models/ApplicationContextCreationParameters";
import { readFileSync } from "fs";
import { HttpClient, StringUtilities, InvalidParameterError } from "kyb-infrastructure";

/**
 * Creates a context for the React application with some functionalities for usage of all application scope
 */
export default class ApplicationContext {
    private static instance: ApplicationContext = null;

    private ApplicationParameters: any;
    private HttpClient: HttpClient;
    private ApplicationContextSetter: (context: ApplicationContext) => void;

    private constructor(parameters: ApplicationContextCreationParameters) {
        this.validateApplicationContextCreationParameters(parameters);
        this.ApplicationParameters = JSON.parse(
            readFileSync(parameters.applicationParametersFilePath).toString()
        );
        this.HttpClient = new HttpClient(parameters.backendBaseUrl);
        this.ApplicationContextSetter = parameters.applicationContextSetter;
    }

    /**
     * Receives instance of currentapplication context;
     * @param parameters Parameters for creation of the context
     * @returns Application context
     */
    public static getApplicationContext(parameters: ApplicationContextCreationParameters) {
        if (this.instance === null) {
            this.instance = new ApplicationContext(parameters);
        }
        return this.instance;
    }

    private validateApplicationContextCreationParameters = (parameters: ApplicationContextCreationParameters): void => {
        if (!parameters)
            throw new InvalidParameterError("ApplicationContextCreationParameters", parameters);
        if (StringUtilities.isValid(parameters.applicationParametersFilePath))
            throw new InvalidParameterError("params.applicationParametersFilePath", parameters.applicationParametersFilePath);
        if (!parameters.applicationParametersFilePath.endsWith(".json"))
            throw new InvalidParameterError("params.applicationParametersFilePath file extension (should be .json)", parameters.applicationParametersFilePath);
        if (!parameters.applicationContextSetter)
            throw new InvalidParameterError("params.applicationContextSetter", parameters.applicationContextSetter);
    }

    /**
     * Sets the application context, can be used by all application scope
     * @param applicationContextSetter Function which has operations to update the context 
     */
    public setApplicationContext = (applicationContextSetter: (applicationContext: ApplicationContext) => void): void => {
        if (!applicationContextSetter)
            throw new InvalidParameterError("applicationContextSetter", applicationContextSetter);
        applicationContextSetter(this);
        this.ApplicationContextSetter(this);
    }
}