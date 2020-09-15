import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';
import Upload from '../Upload'

class ShopModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.logoUpload = this.logoUpload.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    logoUpload(url) {
        this.setState({
            image: url
        })
    }

    addShop() {
        if (this.state.name) {
            const shop = {
                name: this.state.name,
                logo: this.state.image,
                drinks: []
            }
            API.addShop(shop).then(this.props.updateShops())
        }
    }

    render() {
        return (
            <div class="modal fade" id="shopModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Add A Shop</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="shopNameInput">Shop Name:</label>
                                    <input class="form-control mb-2" type="text" id="shopNameInput" name="name" onChange={this.handleInputChange}></input>
                                    <label for="uploadBtn">Logo:</label>
                                    <Upload 
                                    logoUpload={this.logoUpload}
                                    />
                                    <small class="mt-1"><p>If you have the shop logo, we'd love for you to upload it!</p></small>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn modal-button"
                                data-dismiss="modal"
                                onClick={() => this.addShop()}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default ShopModal;