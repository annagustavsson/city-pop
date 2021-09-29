import React from 'react'

interface Values {
    searchTerm: String,
    updateSearch: Function
}

// ! have to check for null on every use
export const SearchTermContext = React.createContext<Values>(null!);

interface Props {
    children: React.ReactNode
}

const SearchTermProvider: React.FC<Props> = ({ children }) => {
    const [searchTerm, setSearchTerm] = React.useState<String>("");

    const updateSearch = (searchString: String) => {
        setSearchTerm(searchString)
    }

    return (
        <SearchTermContext.Provider value={{ searchTerm: searchTerm, updateSearch: updateSearch }}>
            {children}
        </SearchTermContext.Provider>
    )

}
export default SearchTermProvider;
