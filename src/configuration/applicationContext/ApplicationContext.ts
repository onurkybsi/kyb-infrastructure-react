import ApplicationContextCreationParameters from "./models/ApplicationContextCreationParameters";
import { readFileSync } from "fs"

export default class ApplicationContext {
    private ApplicationParameters: any;
    private HttpClient: any = {} /** TO-DO: Will be obtain from kyb-infrastructure package */

    constructor(parameters: ApplicationContextCreationParameters) {
        this.validateApplicationContextCreationParameters(parameters);
        this.ApplicationParameters = JSON.parse(
            readFileSync(parameters.applicationParametersFilePath).toString()
        );
    }

    private validateApplicationContextCreationParameters = (parameters: any): void => {
        if (!parameters?.applicationParametersPath)
            throw Error("Invalid parameter: parameters"); /** TO-DO: Change with InvalidParameterException from kyb-infrastructure */
        if (
            parameters.applicationParametersPath.trim().length <= 0 ||
            parameters.applicationParametersPath.endsWith(".json")
        )
            throw Error("Invalid parameter: parameters.applicationParametersPath"); /** TO-DO: Change with InvalidParameterException from kyb-infrastructure */
    }

    
}