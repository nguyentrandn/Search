import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ darkTheme, setDarkTheme }) {


  return (
    <div className="p-5 h-20 bg-gray-200 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 sticky top-0 dark:bg-slate-900">
      <div className="flex  justify-between items-center space-x-5 w-screen ">
        <div  className="flex  justify-between">
          <Link to="/">
            <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-white-900">
              Google 
            </p>
          </Link>
          <Search/>
        </div>
        <div className="flex">
          <Link to="/search"><p className="dark:text-white mx-3">All</p> </Link>
          <p className="dark:text-white">|</p>
          <Link to="/videos"><p className="dark:text-white mx-3">Videos</p> </Link>
        </div>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light 🔆" : "Dark 🌙"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
