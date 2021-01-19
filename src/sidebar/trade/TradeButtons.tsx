import React, {Component, SyntheticEvent} from "react";
import * as styles from "../../../css/right/trade.module.scss"
import {TradeStage} from "./TradeMenu";

const stages = {
    default: ["Incoming", "Outgoing", "All"],
    single: ["Accept", "Reject", "Cancel"]
}

export class TradeButtons extends Component<{ stage: TradeStage, setStage: (TradeStage) => void }> {


    render() {
        const names = stages[this.props.stage] ?? stages.default
        return (<div className={styles.buttons}>
            {
                names.map(name => <div className={styles.button} onClick={(e) => this.onClick(e)}>{name}</div>)
            }

        </div>);
    }

    onClick = (e: SyntheticEvent) => {
        let filter = e.target;
        console.log(filter["innerText"])
        this.props.setStage(filter["innerText"])
    }


}

