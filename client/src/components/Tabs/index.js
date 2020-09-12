import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ListItems from '../List';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import stars from '../../img/stars/2.png';


class SearchTabs extends React.Component {

    render() {

        return (
            
            <Tabs defaultActiveKey="Drink" id="uncontrolled-tab-example">                
                <Tab eventKey="Drink" title="Drink"><br></br><ListItems />                    
                </Tab>        
                    
                <Tab eventKey="Shop" title="Shop">
                    
                </Tab>
                
            </Tabs>
            
        )
    }
}

export default SearchTabs;