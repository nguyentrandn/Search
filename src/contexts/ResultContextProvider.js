import React,{createContext, useContext, useState} from "react";

const ResultsContext = createContext();
const baseUrl = ''
// 'https://google-search1.p.rapidapi.com/google-search'

export const ResultsContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // video , /search, /images
    const getResults = async (type) =>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                // 'X-RapidAPI-Key': 'e935234824msh7e36cd3687ef3cbp1c2676jsna57b8a12a462',
                // 'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
            }
        })
        const  data = await response.json();

        setResults(data)
        setIsLoading(false);

    }
    return(
        <ResultsContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultsContext.Provider>
    )
}
export const useResultContext = () => useContext(ResultsContext)