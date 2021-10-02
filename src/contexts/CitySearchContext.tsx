import React, { useState } from 'react'
import { GeoInfo } from "../types/types"

interface Values {
    cities: Array<GeoInfo>,
    updateCities: Function
}

// ! have to check for null on every use
export const CitySearchContext = React.createContext<Values>(null!);

interface Props {
    children: React.ReactNode
}

const CitySearchProvider: React.FC<Props> = ({ children }) => {

    //const [cities, setCities] = useState<Array<GeoInfo> | null>(null)
    const [cities, setCities] = React.useState<GeoInfo[]>([]);

    const updateCities = (cityInfo: GeoInfo[]) => {
        setCities(cityInfo)
    }

    return (
        <CitySearchContext.Provider value={{ cities: cities, updateCities: updateCities }}>
            {children}
        </CitySearchContext.Provider>
    )

}
export default CitySearchProvider;