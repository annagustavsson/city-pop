import {getPopulation} from "../cityPopApi";
import {GeoInfo} from "../types/types"


interface Result {
    totalResultsCount: number, 
    geonames: Array<GeoInfo>
}

let result : Result;

export default () => {

    const getData = async (cityName: String) => {
        try {
            result = await getPopulation(cityName)
            return result.geonames
        }
        catch (error) {
        throw new Error("Problems communicating with the API")
    }
    }

    return [getData]
}

