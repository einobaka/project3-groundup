import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ListItems from '../DrinkList';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SearchResult from '../SearchResult';
import stars from '../../img/stars/2.png';


class SearchTabs extends React.Component {

    render() {

        return (

            <Tabs defaultActiveKey="Drink" id="uncontrolled-tab-example">
                <Tab eventKey="Drink" title="Drink"><br></br>
                    <SearchResult />
                </Tab>

                <Tab eventKey="Shop" title="Shop"><br></br>
                    <SearchResult />
                </Tab>

            </Tabs>

        )
    }
}

export default SearchTabs;