import React from "react";
import "./style.css";
import SearchBar from "../SearchBar"
import SearchTabs from "../Tabs";
import Card from 'react-bootstrap/Card'

const SearchContainer = () => {
    return (

        <div className="searching">

        <Card>
            <Card.Header>
            <SearchBar />
            <SearchTabs />
            </Card.Header>
        </Card>

        </div>

    )
}

export default SearchContainer;