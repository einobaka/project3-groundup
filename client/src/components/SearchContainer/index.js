import React from "react";
import "./style.css";
import SearchBar from "../SearchBar"
import SearchTabs from "../Tabs";
import Card from 'react-bootstrap/Card'
import Search from '../SearchResult';


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