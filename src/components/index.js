import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import Footer from "./layouts/Footer";
import Loading from "./layouts/Loading";
import Navbar from "./layouts/Navbar";

import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";

function Layout({children}) {

    const theme = useContext(ThemeContext)

    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation(); //images / videos/ ....

    return ( 
        <div className="">
            <Navbar darkTheme={theme.darkTheme} setDarkTheme={theme.setDarkTheme}/>
            <div className="w-full p-5">
                
                {isLoading ? <Loading/> :  children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;