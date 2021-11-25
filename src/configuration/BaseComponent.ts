/**
 * BaseComponent aspects
 * @author Onur Kayabasi
 */

import { Component } from "react";
import ApplicationState from "./ApplicationState";

/**
 * Represents React component which has some utilities
 */
export default class BaseComponent extends Component {
    constructor(props: any) {
        super(props);
    }
    static contextType = ApplicationState;
}