import React from 'react'
import {GeoInfo} from "../types/types"

interface Values {
    cities: Array<GeoInfo>,
    updateCities: Function
}

// ! have to check for null on every use
export const CityContext = React.createContext<Values>(null!);

interface Props {
  children: React.ReactNode
}

const CityProvider : React.FC<Props> = ({ children }) => {
  const [cities, setCities] = React.useState<GeoInfo[]>([]);

  const updateCities = (cityInfo: GeoInfo[] ) => {
      setCities(cityInfo)
  }

  return (
      <CityContext.Provider value={{cities: cities, updateCities: updateCities}}>
          {children}
      </CityContext.Provider>
  )

}
export default CityProvider;