import React, {Component, RefObject} from "react";
import {DiceBox} from "monodice";
import * as styles from "../../css/right/dice.module.scss"

export class Dice extends Component {
    ref: RefObject<HTMLDivElement>

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        const diceBox = new DiceBox(this.ref.current)
        diceBox.start_throw([2, 4])
        window.onkeydown = (e) => {
            if (e.key === 'r') diceBox.start_throw([1, 6])
        }
    }

    render() {
        return <>
            <div ref={this.ref} className={styles.dice} id={"threeHolder"}>

            </div>
            <button onClick={this.onClick} className={styles.roll}>Roll Dice</button>
        </>
    }

    onClick = () => {
        console.log("roll dice");
    }


}
