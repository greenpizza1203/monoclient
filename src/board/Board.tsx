import {IState} from "monocommon";
import React, {Component} from "react";
import {Tile} from "../tiles/Tile";
import * as styles from "../../css/board/board.module.scss"

export class Board extends Component<{ info: IState, mouseOver: (ITile) => void }> {

    render() {
        const tiles = this.props.info.tiles

        return (
            <div className={styles.board}>
                {
                    tiles.map((tile) => {
                        return <Tile key={tile.position} info={tile} mouseOver={this.props.mouseOver}/>;
                    })
                }
            </div>
        );
    }


}
