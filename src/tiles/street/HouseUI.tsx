import React, {Component} from "react";
import {IStreet} from "monocommon"
import {array} from "../../utils";
import hotel from '../../../assets/images/street/hotel.svg';
import house from '../../../assets/images/street/house.svg';
import upgrade from '../../../assets/images/street/upgrade.svg';
import downgrade from '../../../assets/images/street/downgrade.svg';
import * as styles from "../../../css/board/street.module.scss"

export class HouseUI extends Component<{ info: IStreet }> {
    render() {
        const info = this.props.info;

        return (
            <div className={styles.ui}>
                <HouseUIButton action="downgrade" info={info}/>
                <div className={styles.level}>
                    {info.level}
                </div>
                <HouseUIButton action="upgrade" info={info}/>
            </div>
        )

    }
}

export class Houses extends Component<{ level: number }> {
    render() {
        const images: string[] = (this.props.level == 5) ? ['hotel'] : array(this.props.level, 'house')
        const map = {house, hotel}
        return (
            <div className={styles.houses}>
                {images.map((image, index) => {
                    const Tag = map[image]
                    const className = image === 'house' ? styles.house : styles.hotel;
                    return <Tag className={className} key={index}/>;
                })}
            </div>

        )

    }
}

class HouseUIButton extends Component<{ action, info: IStreet }> {
    render() {
        const Image = (this.props.action == "upgrade") ? upgrade : downgrade
        return (
            <Image/>
        )
    }
    onClick = () => {
        console.log(this.props)
    };
}
