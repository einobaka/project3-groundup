import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

const user = localStorage.getItem('user');
// const drinks = JSON.parse(localStorage.getItem('drink'))
const logout = () => {
    window.location.href = '/';
}

class HistoryCard extends React.Component {

    render() {
        return (
            <Card className="text-center history">
                <Card.Header>Psst... Hey there {user}!</Card.Header>
                <Card.Body>
                    <Card.Title>Brew a coffee review:<button class="btn" data-toggle="modal" data-target="#addModal"><i class="fas fa-plus"></i></button></Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button onClick={logout} id="logout-btn" class="btn button">LogOut</button></Card.Footer>
            </Card>
        )
    }
}
export default HistoryCard;