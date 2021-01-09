import {ITile} from "monocommon";
import React from "react";
import * as styles from "../../css/board/tile.module.scss"

export abstract class DefaultTile extends React.Component<{ info: ITile }> {

    render() {
        return (
            <div className={styles.tile}>
                {this.getTitle()}
            </div>
        )
    }

    getTitle() {
        return <span>{this.props.info.split_name}</span>
    }
}
