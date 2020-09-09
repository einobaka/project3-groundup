import React from 'react';

function Tabs() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                   
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    
                </Tab>
            </Tabs>
        )
}

export default Tabs;