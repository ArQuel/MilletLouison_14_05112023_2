import React, {useState} from "react";
import {Modal} from "../lib/Modal";
import {render} from "@testing-library/react";

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
