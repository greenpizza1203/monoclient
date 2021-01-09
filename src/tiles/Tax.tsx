import React from "react";
import {DefaultTile} from "./DefaultTile";
import {ITax} from "monocommon";
import {formatMoney} from "../utils/FormatMoney";

export class Tax extends DefaultTile {

    getTile(info: ITax) {
        return (
            <div className="tile">
                {this.getTitle()}
                {formatMoney(info.fine)}
            </div>
        )
    }

}
