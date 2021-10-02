import React, { useState } from 'react'
import { GeoInfo } from "../types/types"

interface Values {
    cities: Array<GeoInfo>,
    updateCities: Function
}

// ! have to check for null on every use
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
        <CountrySearchContext.Provider value={{ cities: cities, updateCities: updateCities }}>
            {children}
        </CountrySearchContext.Provider>
    )

}
export default CountrySearchProvider;