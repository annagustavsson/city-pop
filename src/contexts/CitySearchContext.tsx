import React, { useState } from 'react'
import { GeoInfo } from "../types/types"

interface Values {
    citySearchCities: Array<GeoInfo>,
    citySearchupdateCities: Function,
}

export const CitySearchContext = React.createContext<Values>(null!);

interface Props {
    children: React.ReactNode
}

const CitySearchProvider: React.FC<Props> = ({ children }) => {

    const [cities, setCities] = useState<GeoInfo[]>([]);

    const updateCities = (cityInfo: GeoInfo[]) => {
        setCities(cityInfo)
    }

    return (
        <CitySearchContext.Provider value={{ citySearchCities: cities, citySearchupdateCities: updateCities }}>
            {children}
        </CitySearchContext.Provider>
    )

}
export default CitySearchProvider;