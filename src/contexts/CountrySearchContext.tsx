import React from 'react'
import { GeoInfo } from "../types/types"

interface Values {
    countrySearchCities: Array<GeoInfo>,
    countrySearchupdateCities: Function
}

export const CountrySearchContext = React.createContext<Values>(null!);

interface Props {
    children: React.ReactNode
}

const CountrySearchProvider: React.FC<Props> = ({ children }) => {

    //const [cities, setCities] = useState<Array<GeoInfo> | null>(null)
    const [cities, setCities] = React.useState<GeoInfo[]>([]);

    const updateCities = (cityInfo: GeoInfo[]) => {
        setCities(cityInfo)
    }

    return (
        <CountrySearchContext.Provider value={{ countrySearchCities: cities, countrySearchupdateCities: updateCities }}>
            {children}
        </CountrySearchContext.Provider>
    )

}
export default CountrySearchProvider;