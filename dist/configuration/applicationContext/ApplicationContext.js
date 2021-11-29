"use strict";
/**
 *  ApplicationContext aspects
 * @author Onur Kayabasi
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const kyb_infrastructure_1 = require("kyb-infrastructure");
/**
 * Creates a context for the React application with some functionalities for usage of all application scope
 */
class ApplicationContext {
    constructor(parameters) {
        this.validateApplicationContextCreationParameters = (parameters) => {
            if (!parameters)
                throw new kyb_infrastructure_1.InvalidParameterError("ApplicationContextCreationParameters", parameters);
            if (kyb_infrastructure_1.StringUtilities.isValid(parameters.applicationParametersFilePath))
                throw new kyb_infrastructure_1.InvalidParameterError("params.applicationParametersFilePath", parameters.applicationParametersFilePath);
            if (!parameters.applicationParametersFilePath.endsWith(".json"))
                throw new kyb_infrastructure_1.InvalidParameterError("params.applicationParametersFilePath file extension (should be .json)", parameters.applicationParametersFilePath);
            if (!parameters.applicationContextSetter)
                throw new kyb_infrastructure_1.InvalidParameterError("params.applicationContextSetter", parameters.applicationContextSetter);
        };
        /**
         * Sets the application context, can be used by all application scope
         * @param applicationContextSetter Function which has operations to update the context
         */
        this.setApplicationContext = (applicationContextSetter) => {
            if (!applicationContextSetter)
                throw new kyb_infrastructure_1.InvalidParameterError("applicationContextSetter", applicationContextSetter);
            applicationContextSetter(this);
            this.ApplicationContextSetter(this);
        };
        this.validateApplicationContextCreationParameters(parameters);
        this.ApplicationParameters = JSON.parse(fs_1.readFileSync(parameters.applicationParametersFilePath).toString());
        this.HttpClient = new kyb_infrastructure_1.HttpClient(parameters.backendBaseUrl);
        this.ApplicationContextSetter = parameters.applicationContextSetter;
    }
    /**
     * Receives instance of currentapplication context;
     * @param parameters Parameters for creation of the context
     * @returns Application context
     */
    static getApplicationContext(parameters) {
        if (this.instance === null) {
            this.instance = new ApplicationContext(parameters);
        }
        return this.instance;
    }
}
exports.default = ApplicationContext;
ApplicationContext.instance = null;
