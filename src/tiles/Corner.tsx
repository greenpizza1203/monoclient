import {ICorner} from "monocommon";
import React, {Component} from "react";
import pass_go from "../../assets/images/corners/pass_go.svg"
import go_to_jail from "../../assets/images/corners/go_to_jail.svg"
import in_jail from "../../assets/images/corners/in_jail.svg"
import free_parking from "../../assets/images/corners/free_parking.svg"
import {freeParking, goToJail, inJail, passGo} from "../../css/board/svg.module.scss"

// @ts-ignore
const corners = {
    pass_go,
    in_jail,
    go_to_jail,
    free_parking,
}
const styleNames = {
    pass_go: passGo,
    in_jail: inJail,
    go_to_jail: goToJail,
    free_parking: freeParking,
}


export abstract class Corner extends Component<{ tile: ICorner }> {
    render() {
        let filename = this.props.tile.split_name;
        let Corner = corners[filename];
        let className = styleNames[filename]
        // console.log(className)
        return <Corner className={className}/>
    }


}

