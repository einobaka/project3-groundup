import React from "react";
import "./style.css";
import SearchBar from "../SearchBar"
import SearchTabs from "../Tabs";
import Card from 'react-bootstrap/Card'
import Search from '../../pages/SearchResult';


const SearchContainer = () => {
    return (

        <div className="searching">

        <Card>
            <Card.Header>
        
            <SearchBar />
            <SearchTabs />
            <Search />
            </Card.Header>
        </Card>

        </div>



    )
}

export default SearchContainer;