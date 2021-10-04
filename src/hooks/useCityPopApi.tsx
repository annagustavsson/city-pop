import { getPopulation } from "../cityPopApi";
import { GeoInfo } from "../types/types"


interface Result {
    totalResultsCount: number, // no results totalResultsCount = 0
    geonames: Array<GeoInfo>
}

let result: Result;

export default () => {

    const getData = async (cityName: string) => {
        try {
            result = await getPopulation(cityName)
            if (result.totalResultsCount == 0) {
                return [`No results found for ${cityName}`]
            }
            return result.geonames

        }
        catch (error) {
            throw new Error("Problems communicating with the API")
        }
    }

    return [getData]
}

