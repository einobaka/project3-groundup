import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FilteredResultForDrink from '../SearchResultForDrink';
import FilteredResultForShop from '../SearchResultForShop';

class SearchTabs extends React.Component {

    render() {

        return (

            <Tabs defaultActiveKey="Drink" id="uncontrolled-tab-example">
                <Tab eventKey="Drink" title="Drink"><br></br>
                    <FilteredResultForDrink />
                </Tab>

                <Tab eventKey="Shop" title="Shop"><br></br>
                    <FilteredResultForShop />
                </Tab>
            </Tabs>

        )
    }
}

export default SearchTabs;