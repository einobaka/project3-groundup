import React from "react";
import "./style.css";
import SearchBar from "../SearchBar"
import Tabs from "../Tabs";
import Card from 'react-bootstrap/Card'


const SearchContainer = () => {
    return (
        <div className="searching">
        <Card>
            <Card.Header>
        
            <SearchBar />
            <Tabs />
            </Card.Header>
        </Card>
        </div>
        
        
    )
}

export default SearchContainer;