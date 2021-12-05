"use strict";
/**
 * Creates a global state for a kyb-infrastructure-react application via React context API
 * @author Onur Kayabasi
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ApplicationState = react_1.default.createContext({
    applicationParameters: undefined,
    setContext: (setter) => {
        throw new Error("It must be set in the component which is inherited from InitializerComponent!");
    },
    backendBaseUrl: undefined,
    isContextInitialized: false,
    httpClient: undefined
});
exports.default = ApplicationState;
