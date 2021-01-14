import * as styles from "../../../css/right/trade.module.scss"
import React, {Component} from "react";
import {TradeButtons} from "./TradeButtons";
import {TradeList} from "./TradeList";
import {ITrade} from "monocommon";


export type TradeStage = "all" | "incoming" | "outgoing" | "new" | "single";
export type TradeMenuState = {
    stage: TradeStage
    tradeTarget: ITrade | undefined
};

export class TradeMenu extends Component<void, TradeMenuState> {
    state: TradeMenuState = {
        stage: "all",
        tradeTarget: undefined
        // t: undefined
    }

    render() {
        return (
            <div className={styles.menu}>
                <TradeHeader title="All Trades"/>
                <TradeList/>
                {/*<TradeButtons stage={this.state.stage} setStage={this.setStage}/>*/}
            </div>
        )
    }

    setStage = () => {
        this.setState({stage: "all"})
    }
    setTrade = (trade: ITrade) => {
        // this.setState({stage: "single", tradeTarget})
    }
}

export class TradeHeader extends Component<{ title: string }> {
    render() {
        return <div className={styles.header}>{this.props.title}</div>
    }
}
