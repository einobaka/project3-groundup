import React from "react";
import "./style.css";
import SearchTabs from "../Tabs";
import Card from 'react-bootstrap/Card'

const SearchContainer = (props) => {
    return (

        <div className="searching">

            <Card>
                <Card.Header>
                    <SearchTabs 
                    shops={props.shops}
                    />
                </Card.Header>
            </Card>
        </div>

    )
}

export default SearchContainer;