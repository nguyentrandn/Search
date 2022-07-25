import { useResultContext } from "../../contexts/ResultContextProvider";
import React, { useEffect, useState, useRef } from "react";
import "./style.scss"

function Search() {
  const [ click , setClick ]= useState(1)
  const { results, isLoading, getResults, searchTerm, setSearchTerm } = useResultContext();

  useEffect(() => {
    getResults(`?q=${searchTerm}&num=40`);
  }, [click]);

  const  handleKeyPress = (e) => 
   {   
      if(e.charCode == 13){
        setClick(click + 1)
      }
  }
  
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchTerm(value)
    console.log(searchTerm);
  };
  console.log(searchTerm);

  const ref = useRef()

  function handleClick() {
    ref.current.classList.add("disable")
    
    setTimeout(() => {
      ref.current.classList.remove("disable")
    },5000)
    setClick(click + 1)
  }
  
  return (
    <div className="flex mx-20 p-2 rounded-lg  dark:border-none ">
      <input onChange={handleSearch} onKeyPress={handleKeyPress} className="input" placeholder="Search here"/>
      <button onClick={handleClick} ref={ref} id="btn" className="mx-2  dark:color-white button">Search</button>
    </div>
  );
}

export default Search;
