import axios from "axios"

export const getPopulation = async (location: String) => {
    const userName = process.env.REACT_APP_API_USERNAME

    // TODO look up endpoint for https
    // TODO experiment with fuzzy value (0-1)

    // featureCode=PPLA gives cities, featureCode=PPLC gives capital cities
    try {
        const res = await axios.get(`http://api.geonames.org/searchJSON?q=${location}&orderby=population&featureCode=PPLA&featureCode=PPLC&maxRows=5&username=${userName}`)
        return res.data
    } catch {
        throw new Error("Api call failed") // find appr. error to throw
    }
}
