import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
// import Drink from '../../../../routes/api/drink';
import "./style.css";

// This file exports both the List and ListItem components

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }
class ListItems extends React.Component {
  state

  render() {

    return (
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item class="item">Pumpkin Cream Cold</ListGroup.Item>
          <ListGroup.Item class="item">Nirto Cold Brew with Cinnamon Almondmilk</ListGroup.Item>
          <ListGroup.Item class="item">Nitro Cold Brew with Cinnamon Oatmilk Foam</ListGroup.Item>
          <ListGroup.Item class="item">Iced Cinnamon Dolce Latte</ListGroup.Item>
          <ListGroup.Item class="item">Pumpkin Cream Cold</ListGroup.Item>
          <ListGroup.Item class="item">Nirto Cold Brew with Cinnamon Almondmilk</ListGroup.Item>
          <ListGroup.Item class="item">Nitro Cold Brew with Cinnamon Oatmilk Foam</ListGroup.Item>
          <ListGroup.Item class="item">Iced Cinnamon Dolce Latte</ListGroup.Item>

        </ListGroup>
      </Card>
    )
  }

}
export default ListItems;
