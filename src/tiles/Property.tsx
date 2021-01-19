import React, {Component} from "react";
import {DefaultTile} from "./DefaultTile";
import {getRailroadRent, getRentRatio, getStreetRent, IProperty, IRailroad, IStreet, IUtility} from "monocommon";
// import * as styles from "../../css/board/street.module.scss";
import * as styles from "../../css/board/property.module.scss";
import {formatMoney} from "../utils/FormatMoney";
import {coly} from "../coly";

export class Property extends Component<{ tile: IProperty }> {

    render() {
        return (
            <DefaultTile tile={this.props.tile}>
                <Cap tile={this.props.tile}/>
                {this.props.children}
            </DefaultTile>
        )
    }
}

class Cap extends Component<{ tile: IProperty }> {
    render() {
        const style = this.getStyle()
        const fontColor = (style.fill == "white") ? 'black' : 'white'
        return <svg className={styles.cap} viewBox="0 0 70 20">
            {/*<span>{this.getCost()}</span>*/}
            <polygon points="1,19 19,1 50,1 69,19" strokeWidth={2} style={style}/>
            <text x="35" y="11" textAnchor="middle" dominantBaseline="central" fill={fontColor}
                  fontSize="14">{this.getCost()}</text>
        </svg>;
    }


    getCost(): string {
        let tile = this.props.tile;
        if (!tile.ownerId) return formatMoney(tile.cost)
        switch (tile.type) {
            case "Street":
                return formatMoney(getStreetRent(tile as IStreet, coly))
            case "Railroad":
                return formatMoney(getRailroadRent(tile as IRailroad, coly))
            case "Utility":
                return `x${getRentRatio(this.props.tile as IUtility, coly)}`
        }
    }

    getStyle() {
        const tile = this.props.tile;
        const fill = coly.players[tile.ownerId]?.color ?? 'white';
        const stroke = (fill == 'white') ? 'black' : fill
        return {fill, stroke}
    }
}
