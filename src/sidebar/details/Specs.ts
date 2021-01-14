import {IPlayer, IProperty, IRailroad, IStreet, ITile, IUtility} from "monocommon";
import {formatMoney} from "../../utils/FormatMoney";


export function getPlayerSpecs({money, cards}: IPlayer) {
    return {
        Type: "Player",
        Money: formatMoney(money),
        "Jail free cards": cards
    }
}


export function getTileSpecs(tile: ITile) {
    let details = {};
    if (tile.type == 'Street' || tile.type == 'Railroad' || tile.type == 'Utility') {
        details = getPropertyDetails(tile as IProperty)
    }

    return {
        Type: tile.type,
        ...details
    };
}

export function getPropertyDetails(prop: IProperty) {
    return {
        Cost: formatMoney(prop.cost),
        ...getRentStats(prop)
    }

}


export function getRentStats(prop: IProperty): { [key: string]: string } {
    if (prop.type == 'Street') {
        return getDetailedStreetRent(prop as IStreet)
    } else if (prop.type == 'Railroad') {
        return getDetailedRailroadRent(prop as IRailroad)
    } else {
        return getDetailedUtilityRent(prop as IUtility)
    }
}

export function getDetailedRailroadRent(prop: IRailroad) {
    let rentStrings = {
        Rent: formatMoney(prop.rent[0])
    }
    for (let i = 1; i < prop.rent.length; i++) {
        rentStrings[`with ${i + 1} railroads:`] = formatMoney(prop.rent[i])
    }
    return rentStrings
}

export function getDetailedStreetRent(prop: IStreet) {

    const rent = prop.rent.map(rent => formatMoney(rent))
    let rentStrings = {
        'Rent': rent[0],
        "with color group": formatMoney(prop.rent[0] * 2)
    }

    for (let i = 1; i < prop.rent.length - 1; i++) {
        rentStrings[`with ${i} house(s)`] = rent[i]
    }
    rentStrings['with hotel'] = rent[rent.length - 1]

    // rentStrings.push(`with hotel: ${rent[rent.length - 1]}`)
    return rentStrings
}


export function getDetailedUtilityRent(prop: IUtility) {
    return {
        'Rent': '',
        'One Utility': `${prop.rent_ratio[0]} × dice`,
        'Both Utilities': `${prop.rent_ratio[1]} × dice`,
    }


}
