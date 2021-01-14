import React, {Component, SyntheticEvent} from "react";
import * as styles from "../../../css/right/trade.module.scss"
import {TradeStage} from "./TradeMenu";

export class TradeButtons extends Component<{stage:TradeStage, setState:(TradeStage)=>void}> {


    render() {
        return (<div className={styles.buttons}>
            <div className={styles.button} onClick={this.onClick}>Incoming</div>
            <div className={styles.button} onClick={this.onClick}>Outgoing</div>
            <div className={styles.button} onClick={this.onClick}>All</div>
        </div>);
    }

    onClick = (e:SyntheticEvent) => {
        let filter = e.target;
        console.log(filter["innerText"])
        this.props.setState(filter["innerText"])
    }


}

