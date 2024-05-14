import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({setSearchTask,inputSearchAnim,setInputSearchAnim}) => {
    return <>
        <div className="search_container">
            <div className="search-icon-container" onClick={ () => {
                if(inputSearchAnim.includes("search-input-hidden")){
                    setInputSearchAnim("search-input-visible");
                }else{
                    setInputSearchAnim("search-input-hidden");
                }
            }}>
                <FaSearch />
            </div>
           
            <input className={inputSearchAnim} type="text" placeholder="Buscar..." onChange={(e)=>{
                const searchText = e.target.value.toLocaleLowerCase();
                console.log(searchText);
                setSearchTask(searchText);
            }}/>
        </div>
    </>
}

export default Search;