import {Room} from "colyseus.js";
import {IAuction, IPlayer, IState} from "monocommon";

export let roomRef: Room;
export let coly: State;
export declare class State extends IState {
    myTurn: boolean
    myId: string
    auction: Auction
}

export class Auction extends IAuction {
    curBidder: IPlayer;

}

function addStateGetters(state: IState) {
    Object.defineProperty(state, "curPlayerId", {
        get: function () {
            return this.playerIds[this.currentTurn];
        }
    })
    Object.defineProperty(state, "curPlayer", {
        get: function () {
            return this.players[(this).curPlayerId];
        }
    })
    Object.defineProperty(state, "curTile", {
        get: function () {

            return this.tiles[this.currentTile];
        }
    })
    Object.defineProperty(state, "myTurn", {
        get: function () {
            // console.log(this.curPlayerId);
            return this.curPlayerId == roomRef.sessionId;
        }
    })
    Object.defineProperty(state, "myId", {
        get: function () {
            return roomRef.sessionId;
        }
    })
    Object.defineProperty(state.auction, "curBidder", {
        get: function () {
            return state.players[this.currentBidderId];
        }
    })

}


export function setRoom(room: Room<State>) {
    addStateGetters(room.state);
    roomRef = room;
    coly = room.state;
    // roomRef.onStateChange(() => {
        // listener.emit('state')
    // })
    window["room"] = room;
    window["state"] = room.state;

}

// export function setMiddleScene(scene) {
//     window["middleScene"] = middleScene = scene;
// }
