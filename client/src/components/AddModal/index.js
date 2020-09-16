import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';
import CurrencyInput from 'react-currency-input';
import UserRating from '../UserRating';
import Upload from '../Upload';

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkDisplay: "none",
            shopInputDisplay: "block",
            shopDisabledDisplay: "none",
            selectedShop: {
                name: "",
                id: "",
                logo: "",
            },
            shops: this.props.shops,
            shopResults: [],
            rating: 5,
            name: "",
            category: "Hot Coffee",
            size: "8",
            price: "0.00",
            image: "",
            review: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.shopSearch = this.shopSearch.bind(this);
        this.updateStars = this.updateStars.bind(this);
        this.logoUpload = this.logoUpload.bind(this);
    }

    componentDidMount() {
        this.props.updateShops();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    shopSearch(event) {
        const target = event.target;
        const query = target.value.trim().toLowerCase();
        this.setState({ shopResults: [] });
        const shops = this.props.shops;
        const results = [];
        if (query) {
            for (let i = 0; i < shops.length; i++) {
                const shop = shops[i];
                if (shop.name.toLowerCase().includes(query)) {
                    results.push({
                        name: shop.name,
                        id: shop._id,
                        logo: shop.logo
                    });
                };
            };
            let num
            let refined = []
            if (results.length > 7) {
                num = 7;
            } else {
                num = results.length;
            }
            for (let i = 0; i < num; i++) {
                const result = results[i];
                refined.push(result);
            }
            this.setState({ shopResults: refined })
        }
    }

    selectShop(name, id, logo) {
        console.log(name, id, logo);
        this.setState({
            shopResults: [],
            selectedShop: {
                name: name,
                id: id,
                logo: logo
            },
            shopInputDisplay: "none",
            shopDisabledDisplay: "block",
            drinkDisplay: "block"
        })
    }

    logoUpload(url) {
        this.setState({
            image: url
        })
    }

    updateStars(val) {
        this.setState({ rating: val });
    }

    handleCurrencyChange(event, maskedvalue, floatvalue) {
        this.setState({ price: maskedvalue });
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
                                    <input type="text" class="form-control" id="shopNameInput" onChange={this.shopSearch} style={{ display: this.state.shopInputDisplay }}></input>
                                    <input type="text" class="form-control" id="shopNameInputDisabled" style={{ display: this.state.shopDisabledDisplay }} placeholder={this.state.selectedShop.name} disabled></input>
                                    <ul class="list-group" id="matchingShops">
                                        {this.state.shopResults.map(result => (
                                            <li class="list-group-item result" onClick={() => this.selectShop(result.name, result.id, result.logo)}>
                                                {result.name}
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ display: this.state.shopInputDisplay }}>Can't find the shop you're at? Add it <a href="javascript:void(0)" data-toggle="modal" data-target="#shopModal">here</a>.</p>
                                    <div style={{ display: this.state.drinkDisplay }}>
                                        <h6 class="modal-title py-2">What are you drinking?</h6>
                                        <label for="categoryInput">Category:</label>
                                        <select class="form-control pb-2" id="categoryInput" name="category" onChange={this.handleInputChange}>
                                            <option value="hot coffee">Hot Coffees</option>
                                            <option value="iced coffee">Iced Coffees</option>
                                            <option value="blended">Blended Drinks</option>
                                            <option value="hot tea">Hot Teas</option>
                                            <option value="iced tea">Iced Teas</option>
                                            <option value="hot drink">Hot Drinks</option>
                                            <option value="cold drink">Cold Drinks</option>
                                        </select>
                                        <label for="drinkNameInput">Drink Name:</label>
                                        <input class="form-control pb-2" type="text" id="drinkNameInput" name="name" onChange={this.handleInputChange}></input>
                                        <label for="sizeInput">Size:</label>
                                        <select class="form-control pb-2" id="sizeInput" name="size" onChange={this.handleInputChange}>
                                            <option value="8">8oz.</option>
                                            <option value="12">12oz.</option>
                                            <option value="16">16oz.</option>
                                            <option value="20">20oz.</option>
                                        </select>
                                        <p for="priceInput" class="pt-2 mr-2">Price:</p>
                                        <div>
                                            <CurrencyInput value={this.state.price} onChangeEvent={this.handleCurrencyChange} />
                                        </div>
                                        <p for="uploadBtn" class="pt-2" >Photo:</p>
                                        <Upload
                                            logoUpload={this.logoUpload}
                                        />
                                        <small class="mt-1"><p>Did you snap a cool pic of your drink?</p></small>
                                        <p class="mt-2" >Rating:</p>
                                        <UserRating
                                            updateStars={this.updateStars}
                                        />
                                        <p for="reviewInput" class="pt-2">Review: </p>
                                        <textarea placeholder="Any comments to add?" rows="5" cols="60" id="reviewInput" style={{ resize: "none" }} name="review" onChange={this.handleInputChange}>
                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn modal-button"
                                data-dismiss="modal"
                                onClick={() => {
                                    const drink = {
                                        name: this.state.name,
                                        price: this.state.price,
                                        category: this.state.category,
                                        size: this.state.size,
                                        rating: this.state.rating,
                                        image: this.state.image,
                                        review: this.state.review,
                                        shop: this.state.selectedShop.id,
                                        logo: this.state.selectedShop.logo
                                    }
                                    // console.log(drink);
                                    localStorage.setItem('drink', JSON.stringify(drink))
                                    API.addDrink(drink);
                                }}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default AddModal;