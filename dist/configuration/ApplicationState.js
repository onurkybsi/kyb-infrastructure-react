"use strict";
/**
 * Creates a global state for React application via React context
 * @author Onur Kayabasi
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Global application state
 */
const ApplicationState = react_1.default.createContext(undefined);
exports.default = ApplicationState;
