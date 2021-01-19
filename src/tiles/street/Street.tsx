import React, {Component} from "react";
import {Houses, HouseUI} from "./HouseUI";
import {DefaultTile} from "../DefaultTile";
import {IStreet} from "monocommon";
import * as styles from "../../../css/board/street.module.scss"
import {Property} from "../Property";

export class Street extends Component<{ tile: IStreet }> {

    render() {
        let tile = this.props.tile;
        return (
            <Property tile={tile}>
                <Bar info={tile}/>
            </Property>
        )
    }
}

export class Bar extends Component<{ info: IStreet }> {
    render() {

        const info = this.props.info;
        return (
            <div className={styles.bar} style={{background: info.color}}>
                <Houses level={info.level}/>
                <HouseUI info={info}/>
            </div>
        );
    }
}
