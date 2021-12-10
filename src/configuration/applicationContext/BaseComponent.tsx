import { Component } from "react";
import ApplicationContextBase from "./models/ApplicationContextBase";
import ApplicationState from "../ApplicationState";

/**
 * Represents base component for kyb-infrastructure-react components
 * @author Onur Kayabasi
 */
export default class BaseComponent<TProps, TState, TApplicationContext extends ApplicationContextBase> extends Component<TProps, TState> {
    constructor(props: any) {
        super(props);
    }
    static override contextType: React.Context<ApplicationContextBase> = ApplicationState;

    /**
     * Receives current application context
     * @returns Current context
     */
    protected getContext = (): TApplicationContext => {
        return this.context as TApplicationContext;
    }

    /**
     * Set current application context by given function
     * @param setter Function that sets the current context
     */
    protected setContext = (setter: (currentContext: TApplicationContext) => void): void => {
        this.context?.setContext(setter);
    }
}