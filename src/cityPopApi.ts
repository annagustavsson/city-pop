import axios from "axios"

export const getCityPopulation = async (cityName: String) => {
    const userName = process.env.REACT_APP_API_USERNAME

    // look up endpoint for https
    try {
        const res = await axios.get(`http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${userName}`)
        return res.data
    } catch {
        throw new Error("Api call failed") // find appr. error to throw
    }
}