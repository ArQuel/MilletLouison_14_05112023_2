# Project 9/9 - Part 2/2 - Front End Developer Path

## Create and publish an npm module.

A library of React components created using `create-react-app`.

### Installation from NPM

`npm install louison-react-modal`

### Use case example

```
import React from "react";
import { Modal }  from "louison-react-modal";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const message = "Write you own message here";

    return (
        <div className="App">
            <button onClick={toggle}>Click to open modal</button>
            <Modal isOpen={isOpen} hide={toggle} content={message}/>
        </div>
    );
}

render(<App />, document.getElementById("root"));
```

### Edit CSS

If you want to update the modal's CSS, you just have to overwrite the following variables on your own project:

```
body {
    --rm-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    --rm-backdrop-background: rgba(0, 0, 0, 0.3);
    --rm-styled-modal-background: white;
    --rm-styled-modal-border-radius: 0.5rem;
    --rm-styled-modal-border-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    --rm-close-button-color: black;
    --rm-content-padding: 4rem;
    --rm-content-font-size: 1.6rem;
}
```
