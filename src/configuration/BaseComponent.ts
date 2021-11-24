import { Component } from "react";
import ApplicationState from "./ApplicationState";

export default class BaseComponent extends Component {
    constructor(props: any) {
        super(props);
    }
    static contextType = ApplicationState;
}