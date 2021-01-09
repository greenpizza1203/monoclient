import React from "react";
import {DiceBox} from "monodice";
import * as styles from "../../css/right/right_sidebar.module.scss"

export class Dice extends React.Component {
    componentDidMount() {
        const diceBox = new DiceBox(document.getElementById("threeHolder") as HTMLDivElement)
        diceBox.start_throw([2, 4])
        window.onkeydown = (e) => {
            if (e.key === 'r') diceBox.start_throw([1, 6])
        }
    }

    render() {
        return <div className={styles.dice} id={"threeHolder"}/>

    }


}
