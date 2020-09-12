import React from 'react';
import Nav from 'react-bootstrap/Nav';
import stars from '../../img/stars/2.png';


class Tabs extends React.Component {
   
    render() {
        
        return (
            <Nav fill variant="tabs">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" value="state">Drink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Nearest Coffee</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Tabs;