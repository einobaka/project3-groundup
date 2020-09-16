import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

const user = localStorage.getItem('user');
const drinks = JSON.parse(localStorage.getItem('drink'))
const date = "2 days"

class HistoryCard extends React.Component {

    render() {
        return (
            <Card className="text-center history">
                <Card.Header>{user}'s History</Card.Header>
                <Card.Body>
                    <Card.Title>Recent Reviews<button class="btn" data-toggle="modal" data-target="#addModal"><i class="fas fa-plus"></i></button></Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{date}</Card.Footer>
            </Card>
        )
    }
}
export default HistoryCard;