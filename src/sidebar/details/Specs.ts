import {IPlayer, IProperty, IRailroad, IStreet, ITile, IUtility} from "monocommon";
import {formatMoney} from "../../utils/FormatMoney";
import {info} from "../../info";


export function getPlayerSpecs({money, cards}: IPlayer) {
    return ["type: Player",
        `money: ${formatMoney(money)}`,
        `jail free cards: ${cards}`,
    ]

}

export function getTileSpecs(tile: ITile) {
    let details = [];
    if (tile.type == 'Street' || tile.type == 'Railroad' || tile.type == 'Utility') {
        details = getPropertyDetails(tile as IProperty)
    }
    details.unshift(
        `Type: ${tile.type}`
    )
    return details;
}

export function getPropertyDetails(prop: IProperty) {
    let stats = getRentStats(prop);

    stats.unshift(
        `Cost: ${formatMoney(prop.cost)}`,
    );
    if (prop.ownerId) {
        stats.unshift(
            `Owner: ${info.players[prop.ownerId].username}`
        )
    }
    return stats

}


export function getRentStats(prop: IProperty): string[] {
    if (prop.type == 'Street') {
        return getDetailedStreetRent(prop as IStreet)
    } else if (prop.type == 'Railroad') {
        return getDetailedRailroadRent(prop as IRailroad)
    } else {
        return getDetailedUtilityRent(prop as IUtility)
    }
}

export function getDetailedRailroadRent(prop: IRailroad) {
    let rentStrings = [
        `Rent: ${formatMoney(prop.rent[0])}`
    ]
    for (let i = 1; i < prop.rent.length; i++) {
        rentStrings.push(`with ${i + 1} railroads: ${formatMoney(prop.rent[i])}`)
    }
    // console.log("dr")
    return rentStrings
}

export function getDetailedStreetRent(prop: IStreet) {

    const rent = prop.rent.map(rent => formatMoney(rent))
    let rentStrings = [
        `Rent: ${rent[0]}`,
        `with color group: ${formatMoney(prop.rent[0] * 2)}`
    ]

    for (let i = 1; i < prop.rent.length - 1; i++) {
        rentStrings.push(`with ${i} house(s): ${rent[i]}`)
    }
    rentStrings.push(`with hotel: ${rent[rent.length - 1]}`)
    return rentStrings
}


export function getDetailedUtilityRent(prop: IUtility) {
    // debugger
    return [
        'Rent',
        `One Utility: ${prop.rent_ratio[0]} x dice`,
        `Both Utilities: ${prop.rent_ratio[1]} x dice`
    ]

}
