import axios from "axios"

export const getPopulation = async (location: String) => { // change name to getPopulation
    const userName = process.env.REACT_APP_API_USERNAME

    // look up endpoint for https
    try {
        const res = await axios.get(`http://api.geonames.org/searchJSON?q=${location}&maxRows=5&username=${userName}`)
        return res.data
    } catch {
        throw new Error("Api call failed") // find appr. error to throw
    }
}