import React, {Component} from "react";
import {DefaultTile} from "./DefaultTile";
import {ITax} from "monocommon";
import {formatMoney} from "../utils/FormatMoney";

export class Tax extends Component<{ tile: ITax }> {
    render() {
        const tile = this.props.tile;
        return (
            <DefaultTile tile={tile}>
                {formatMoney(tile.fine)}
            </DefaultTile>
        )
    }


}
