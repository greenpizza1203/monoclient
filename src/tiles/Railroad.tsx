import React from "react";
import {DefaultTile} from "./DefaultTile";
import {tile} from "../../css/board/tile.module.scss"

export class Railroad extends DefaultTile {

    render() {
        return (
            <div className={tile}>
                {this.getTitle()}
            </div>
        )
    }
}

