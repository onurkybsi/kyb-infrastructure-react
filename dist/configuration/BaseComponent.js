"use strict";
/**
 * BaseComponent aspects
 * @author Onur Kayabasi
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ApplicationState_1 = require("./ApplicationState");
/**
 * Represents React component which has some utilities
 */
class BaseComponent extends react_1.Component {
    constructor(props) {
        super(props);
    }
}
exports.default = BaseComponent;
BaseComponent.contextType = ApplicationState_1.default;
