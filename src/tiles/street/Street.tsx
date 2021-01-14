import React, {Component} from "react";
import {Houses, HouseUI} from "./HouseUI";
import {DefaultTile} from "../DefaultTile";
import {IStreet} from "monocommon";
import * as styles from "../../../css/board/street.module.scss"

export class Street extends Component<{ tile: IStreet }> {

    render() {
        let tile = this.props.tile;
        return (
            <DefaultTile tile={tile}>
                <Bar info={tile}/>
            </DefaultTile>
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
