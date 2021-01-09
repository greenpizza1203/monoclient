import {IPlayer, IState, ITile} from "monocommon";
import React from "react";
import {Board} from "./Board";
import {Details} from "./sidebar/Details";
import {Leaderboard} from "./sidebar/Leaderboard";
import {Dice} from "./sidebar/Dice";
import {leftSidebar} from "../css/left/left_sidebar.module.scss"
import {rightSidebar} from "../css/right/right_sidebar.module.scss"
import {info} from "./info";
import * as styles from "../css/App.module.scss"
export class App extends React.Component<{ info: IState }, { target: IPlayer | ITile }> {
    state = {target: info.tiles[29]}

    render() {
        return (
            <div className={styles.app}>
                <div className={leftSidebar}>
                    <Leaderboard info={this.props.info} onMouseOver={this.onMouseOver}/>
                    <Details target={this.state.target}/>
                </div>
                <Board info={this.props.info} mouseOver={this.onMouseOver}/>
                <div className={rightSidebar}>
                    {/*<Leaderboard info={this.props.info} onMouseOver={this.onMouseOver}/>*/}
                    {/*<Details target={this.state.target}/>*/}
                    <Dice/>
                </div>

            </div>
        )
    }

    onMouseOver = (target: IPlayer) => {
        this.setState({target})
    };
}
