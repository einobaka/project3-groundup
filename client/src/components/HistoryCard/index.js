import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';


class HistoryCard extends React.Component {
    render() {
        return (
            <Card className="text-center history">
                <Card.Header>Scoot's History</Card.Header>
                <Card.Body>
                    <Card.Title>Recent Reviews</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        )
    }
}
export default HistoryCard;