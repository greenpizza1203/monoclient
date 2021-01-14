import {ITile} from "monocommon";
import React, {Component} from "react";
import * as styles from "../../css/board/tile.module.scss"

export abstract class DefaultTile extends Component<{ tile: ITile }> {

    render() {
        return (
            <div className={styles.tile}>
                {this.getTitle()}
                {this.props.children}
            </div>
        )
    }

    getTitle() {
        return <span>{this.props.tile.split_name}</span>
    }
}
