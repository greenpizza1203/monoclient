import {ITile} from "monocommon";
import React, {Component} from "react";
import {Street} from "./street/Street";
import {Tax} from "./Tax";
import {DefaultTile} from "./DefaultTile";
import {Corner} from "./Corner";
import * as styles from "../../css/board/tile.module.scss"
import {Railroad} from "./Railroad";

const componentMap = {
    Street, Tax, Corner,Railroad
}

export class Tile extends Component<{ info: ITile, mouseOver: (ITile) => void }> {
    render() {
        const info = this.props.info;
        const {column, row, location} = getTilePosition(info.position)
        const parity = info.position % 2 ? 'odd' : 'even';
        const TileType = componentMap[info.type] ?? DefaultTile;
        return (
            <div className={`${styles[location]} ${styles[parity]}`}
                 style={{gridColumn: column, gridRow: row}}
                 onMouseOver={() => this.props.mouseOver(this.props.info)}>
                <TileType tile={info}/>
            </div>
        );
    }
}

export function getTilePosition(i) {
    if (i < 10) {
        return {row: 11, column: 11 - i, location: "bottom"}
    } else if (i < 20) {
        return {row: 21 - i, column: 1, location: "left"}

    } else if (i < 30) {
        return {row: 1, column: i - 19, location: "top"}

    } else if (i < 40) {
        return {row: i - 29, column: 11, location: "right"}

    }
    return {column: 1, row: 1}
}
