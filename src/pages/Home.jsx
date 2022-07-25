import { useResultContext } from "../contexts/ResultContextProvider";
import React,{useEffect} from "react";

function Home() {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const kq = results.organic;
    return ( 
        <div className="flex flex-direction-column flex-wrap justify-between space-y-6 sm:px-56">
            {kq?.map(({url, title, domain},index) => (
                <div key={index} className="md:w-2/5 w-full">
                    <a href={url}>
                        <p className="text-sm dark:text-white">
                            {domain}
                        </p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                            {title}
                        </p>
                    </a>
                </div>
            ))}
        </div> 
    );
}

export default Home;
