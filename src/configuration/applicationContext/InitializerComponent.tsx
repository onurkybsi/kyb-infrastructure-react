import { Component, ReactNode } from 'react'
import ApplicationContextBase from './models/ApplicationContextBase';
import { HttpClient } from 'kyb-infrastructure';

/**
 * Base compotent that initializes all configuration in starting point
 * NOTE: You must use this component in your root component 
 * and also render your component via renderInitializer!
 * @author Onur Kayabasi
 */
export default abstract class InitializerComponent<TProps, TContext extends ApplicationContextBase> extends Component<TProps, TContext> {
    private isInitialized: boolean = false;

    constructor(props: TProps, initialContext: TContext) {
        super(props);
        this.init(initialContext);
    }

    private init = (initialContext: TContext) => {
        let representiveLatency: number = 10;
        setTimeout(() => {
            this.setState((prevState: Readonly<TContext>) => {
                this.isInitialized = true;

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
            });
        }, representiveLatency);
    }

    protected abstract renderInitializer: () => ReactNode;

    public render: () => ReactNode = (): ReactNode => {
        if (!this.isInitialized)
            return null;
        return this.renderInitializer();
    }
}
