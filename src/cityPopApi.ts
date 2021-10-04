import axios from "axios"

export const getPopulation = async (location: String) => {
    const userName = process.env.REACT_APP_API_USERNAME
    // featureCode=PPLA gives cities, featureCode=PPLC gives capital cities
    try {
        const res = await axios.get(`https://secure.geonames.org/searchJSON?q=${location}&orderby=population&featureCode=PPLA&featureCode=PPLC&maxRows=5&username=${userName}`)
        return res.data
    } catch {
        throw new Error("Api call failed")
    }
}
