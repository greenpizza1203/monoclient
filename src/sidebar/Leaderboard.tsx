import {IPlayer, IState} from "monocommon";
import React from "react";
import {formatMoney} from "../utils/FormatMoney";
import * as styles from '../../css/left/leaderboard.module.scss';

export class Leaderboard extends React.Component<{ info: IState, onMouseOver: (target: IPlayer) => void }> {
    render() {
        let info = this.props.info;
        return (
            <div className={styles.leaderboard}>
                {info.playerIds.map((id, index) =>
                    <LeaderboardRow player={info.players[id]} parity={index % 2 == 0} key={id}
                                    onMouseOver={this.props.onMouseOver}/>
                )}
            </div>
        )
    }
}

export class LeaderboardRow extends React.Component<{ player: IPlayer, parity: boolean, onMouseOver: (IPlayer) => void }> {
    render() {
        let player = this.props.player;
        let mouseOver = () => this.props.onMouseOver(player);
        const parity = this.props.parity ? styles.even : styles.odd
        let color = player.color;
        return (
            <>
                <div className={styles.leaderboardColor} style={{background: color}}
                     onMouseEnter={mouseOver}/>
                <div className={`${styles.leaderboardName} ${parity}`} style={{color}}
                     onMouseEnter={mouseOver}>{player.username} </div>
                <div className={`${styles.leaderboardMoney} ${parity}`}
                     onMouseEnter={mouseOver}>{formatMoney(player.money)} </div>
                <div className={parity}/>
            </>
        )
    }
}
