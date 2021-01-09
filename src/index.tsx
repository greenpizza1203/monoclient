import "../css/main.scss";
import {Client} from "monofake"
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {setRoom} from "./info";

const node = document.createElement("div")
node.id = "root";
document.body.appendChild(node)
new Client("ws://localhost:2567").joinOrCreate().then((room) => {
    setRoom(room)
    room.onStateChange(state => ReactDOM.render(<App info={state}/>, node))
});



