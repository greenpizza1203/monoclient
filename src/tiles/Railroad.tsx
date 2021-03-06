import React, {Component} from "react";
import {DefaultTile} from "./DefaultTile";
import {tile} from "../../css/board/tile.module.scss"
import { IProperty } from "monocommon";
import {Property} from "./Property";

export class Railroad extends Component<{ tile: IProperty }> {

    render() {
        return <Property tile={this.props.tile}/>
    }
}

