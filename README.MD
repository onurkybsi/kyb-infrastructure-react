# kyb-infrastructure-react

Provides various functionalities for React application development

## Installation

Use the package manager [npm](https://www.npmjs.com/package/kyb-infrastructure-react) to install kyb-infrastructure-react.

```bash
npm i kyb-infrastructure-react
```

## Usage

```javascript
// You can initiliaze your application as follows

import React, { Component } from 'react'
import { ApplicationState, ApplicationContext } from "../../kyb-infrastructure-react/src/index";

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  configureApp = () => {
    console.log("Application configuring...");

    let applicationContextSetter: (context: ApplicationContext) => void = (appContext: ApplicationContext) => {
      this.setState({ ...appContext }, () =>
        console.log("Application configured again!", appContext)
      );
    };
    let context: ApplicationContext = ApplicationContext.getApplicationContext({
      applicationParametersFilePath: "../applicationParameters.json",
      backendBaseUrl: "http://localhost",
      applicationContextSetter: applicationContextSetter
    });

    this.setState({ ...context }, () =>
      console.log("Application configured!", context)
    );
  };

  async componentDidMount() {
    this.configureApp();
  }

  render() {
    return (
      <ApplicationState.Provider value={this.state}>
        <h1>Hello World !</h1>
      </ApplicationState.Provider>
    )
  }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
