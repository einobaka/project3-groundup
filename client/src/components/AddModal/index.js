import React, { Component } from 'react';
import './style.css';

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkDisplay: "none"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name)

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div class="modal fade" id="addModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Leave a review</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="shopNameInput"><h6>Where are you at?</h6></label>
                                    <input type="text" class="form-control" id="shopNameInput"></input>
                                    <ul class="list-group" id="matchingShops">

                                        
                                    </ul>
                                    <p>Can't find the shop you're at? Add it <a href="" data-toggle="modal" data-target="#shopModal">here</a>.</p>
                                    <div style={{ display: this.state.drinkDisplay }}>
                                    <h6 class="modal-title py-2">What are you drinking?</h6>
                                    <label for="categoryInput">Category:</label>
                                    <input type="text" class="form-control" id="categoryInput"></input></div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default AddModal;