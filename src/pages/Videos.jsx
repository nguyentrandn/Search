import { useResultContext } from "../contexts/ResultContextProvider";
import React,{useEffect} from "react";

function Videos() {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const kq = results.videos;
    console.log(kq);
    return ( 
        <div className="dark:text-white p-5">
            {kq?.map(({sitelink, source, channel, videoDuration},index) => (
                <div key={index}>
                    <a href={sitelink} className="color-blue-500 hover:underline ">{channel} / {source}  </a>
                    <iframe width="500" height="300" src={sitelink} frameborder="0" allowfullscreen></iframe>
                    <span>{videoDuration}</span>
                </div>
            ))}
        </div> 
    );
}

export default Videos;
