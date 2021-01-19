import {IPlayer, IState, ITile} from "monocommon";
import React, {Component} from "react";
import {Board} from "./board/Board";
import {Details} from "./sidebar/Details";
import {Leaderboard} from "./sidebar/Leaderboard";
import {Dice} from "./sidebar/Dice";
import {coly} from "./coly";
import * as styles from "../css/App.module.scss"
import {TradeSection} from "./sidebar/trade/TradeSection";

export class App extends Component<{ info: IState }, { target: IPlayer | ITile }> {
    state = {
        //todo:remove this
        target: coly.tiles.find(tile => tile.type == "Utility")
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
                    <TradeSection trade={coly.activeTrades[1]} playerA={true} mouseOver={this.onMouseOver}/>
                </div>

            </div>
        )
    }

    onMouseOver = (target: ITile | IPlayer) => {
        this.setState({target})
    };
}
