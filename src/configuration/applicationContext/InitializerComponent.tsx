import { Component, ReactNode } from 'react'
import ApplicationContextBase from './models/ApplicationContextBase';
import { HttpClient } from 'kyb-infrastructure';
import ApplicationState from '../ApplicationState';

/**
 * Base compotent that initializes all configuration in starting point
 * NOTE: You must use this component in your root component 
 * and also render your component via renderInitializer!
 * @author Onur Kayabasi
 */
export default abstract class InitializerComponent<TProps, TContext extends ApplicationContextBase> extends Component<TProps, TContext> {
    constructor(props: TProps, initialContext: TContext) {
        super(props);
        this.state = {
            ...this.buildInitialContext(initialContext)
        }
    }

    private buildInitialContext = (initialContext: TContext): TContext => {
        return {
            setContext: (setter: (currentContext: TContext) => void): void => {
                setter(this.state);
                this.setState(this.state);
            },
            applicationParameters: initialContext.applicationParameters,
            backendBaseUrl: initialContext.backendBaseUrl,
            isContextInitialized: true,
            httpClient: initialContext.backendBaseUrl ? new HttpClient(initialContext.backendBaseUrl) : null,
            ...initialContext
        } as TContext | any;
    }

    /**
     * Child client must use this method instead of render method in initializer component!
     */
    protected abstract renderInitializerComponent(): ReactNode;

    override render(): ReactNode {
        if (!this.state.isContextInitialized)
            return null;
        return <ApplicationState.Provider value={this.state}>
            {this.renderInitializerComponent()}
        </ApplicationState.Provider>
    }
}
