import {ITile, ITrade} from "monocommon";
import React, {Component} from "react";
import card from "../../../assets/images/trade/card.svg"

import * as styles from "../../../css/right/trade.module.scss"
import {formatMoney} from "../../utils/FormatMoney";
import {TradeIcon} from "./TradeIcon";


export class TradeSection extends Component<{ trade: ITrade, playerA: boolean, mouseOver: (target: ITile) => void }> {
    render() {
        const trade = this.props.trade;
        const money = (this.props.playerA) ? Math.min(trade.money, 0) : Math.abs(Math.max(trade.money, 0));
        const cards = (this.props.playerA) ? Math.min(trade.cards, 0) : Math.abs(Math.max(trade.cards, 0));
        const properties = (this.props.playerA) ? trade.aProps : trade.bProps;
        const propImages = properties.map(propIndex =>
            <TradeIcon key={propIndex} index={propIndex} mouseOver={this.props.mouseOver}/>
        )
        return (
            <div className={styles.section}>
                <div className={styles.grid}>{propImages}</div>
                {cards && <div>{card}x{cards}</div>}
                <div>{formatMoney(money)}</div>
            </div>
        );
    }

}


