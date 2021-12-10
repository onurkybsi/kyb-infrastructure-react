# kyb-infrastructure-react

Provides various functionalities for React application development

## Installation

Use the package manager [npm](https://www.npmjs.com/package/kyb-infrastructure-react) to install kyb-infrastructure-react.

```bash
npm i kyb-infrastructure-react
```

## Usage

To initialize _kyb-infrastructure-react_, you must inherit your root component from `InitializerComponent` and put your components to `renderInitializerComponent` as follows;

```` javascript
import { ApplicationContextBase, InitializerComponent } from "kyb-infrastructure-react";
import applicationParameters from "./applicationParameters.json";
import {
  BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';
import HelloWorldComponent from 'HelloWorldComponent';

export interface ApplicationContext extends ApplicationContextBase {
  extraValue: string;
}

// You must inherit your root component from InitializerComponent, 
// and set TContext type of it as your context type of application!
export default class App extends InitializerComponent<any, ApplicationContext> {
  constructor(props: any) {
    super(props, {
      applicationParameters: applicationParameters,
      backendBaseUrl: "https://jsonplaceholder.typicode.com",
      extraValue: "some-extra"
    });
  }

  renderInitializerComponent() {
    if (!this.state.isContextInitialized) {
      return <h2>Loading..</h2>;
    }
    return (
        <Router>
          <Routes>
            <Route path="/sayHello" element={<HelloWorldComponent />} />
            <Route path="*" element={<>
              <h1>Welcome to kyb-infrastructure demo app!</h1>
              <Link to="/sayHello" >
                <a>
                  Click for HelloWorldComponent component!
                </a>
              </Link>
            </>} />
          </Routes>
        </Router>
    );
  }
}
````

_kyb-infrastructure-react_ initializes a context for whole application scope by your context type. You can access the context all of components which is inherited from `BaseComponent` as follows;

```` javascript
import { BaseComponent } from "kyb-infrastructure-react"
import { ApplicationContext } from 'App';
import { HttpResponse, HttpMethods } from "kyb-infrastructure"

type HelloWorldComponentProps = {};
type HelloWorldComponentState = {
    content: string
};

export default class HelloWorldComponent
    extends BaseComponent<HelloWorldComponentProps, HelloWorldComponentState, ApplicationContext> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: ""
        }
    }

    async componentDidMount() {
        let response: HttpResponse | undefined = await this.getContext()
            .httpClient.SendRequest(HttpMethods.GET, "/posts");
        this.setState({
            content: JSON.stringify(response?.body)
        })
        this.setContext((context) => {
            context.extraValue = `I can change the application context from any 
            component which is inherited from BaseComponent!`
        });
    }

    render() {
        return (
            <>
                <h1>
                    Hello World ! I can send a HTTP request via HttpClient 
                    which is a module in the application context
                </h1>
                <br />
                <h2>Response from the request: </h2>
                <br />
                <div>
                    {this.state.content}
                </div>
            </>
        )
    }
}
````

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
