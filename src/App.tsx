import {IPlayer, IState, ITile} from "monocommon";
import React, {Component} from "react";
import {Board} from "./board/Board";
import {Details} from "./sidebar/Details";
import {Leaderboard} from "./sidebar/Leaderboard";
import {Dice} from "./sidebar/Dice";
import {info} from "./info";
import * as styles from "../css/App.module.scss"
import {TradeMenu} from "./sidebar/trade/TradeMenu";

export class App extends Component<{ info: IState }, { target: IPlayer | ITile }> {
    state = {
        //todo:remove this
        target: info.tiles.find(tile=>tile.type=="Utility")
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.sidebar}>
                    <Leaderboard info={this.props.info} onMouseOver={this.onMouseOver}/>
                    <Details target={this.state.target}/>
                </div>
                <Board info={this.props.info} mouseOver={this.onMouseOver}/>
                <div className={styles.sidebar}>
                    <Dice/>
                    {/*<TradeMenu/>*/}
                </div>

            </div>
        )
    }

    onMouseOver = (target: IPlayer) => {
        this.setState({target})
    };
}
