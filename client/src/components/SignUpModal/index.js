import React, { Component } from 'react';
import './style.css';

class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            passwordConfirm: "",
            fieldsDisplay: "none",
            passwordDisplay: "none"
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

    submitSignUp() {
        this.setState({ fieldsDisplay: "none" });
        this.setState({ passwordDisplay: "none" });
        if (this.state.name &&
            this.state.email &&
            this.state.username &&
            this.state.password &&
            this.state.passwordConfirm
        ) {
            if (this.state.password === this.state.passwordConfirm) {
                this.props.signUpSubmit({
                    name: this.state.name,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    passwordConfirm: this.state.passwordConfirm
                }).then(data => {
                    // store the user in localStorage
                    localStorage.setItem('Cesar', "Cesar")
                    console.log(data)
                })

            } else {
                this.setState({ passwordDisplay: "block" })
            }
        } else {
            this.setState({ fieldsDisplay: "block" })
        }


    }

    render() {
        return (
            <div class="modal fade" id="signUpModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Sign Up</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <small id="requiredFields" class="form-text text-danger" style={{ display: this.state.fieldsDisplay }}>Fill out all required* fields</small>
                                    <label for="nameInput">Name*</label>
                                    <input type="text" class="form-control" id="nameInput" name="name" onChange={this.handleInputChange}></input>
                                    <label for="emailInput">Email*</label>
                                    <input type="email" class="form-control" id="emailInput" name="email" onChange={this.handleInputChange} ></input>
                                    <label for="usernameInput">Username*</label>
                                    <input type="text" class="form-control" id="usernameInput" name="username" onChange={this.handleInputChange}></input>
                                    <small id="passwordNoMatch" class="form-text text-danger" style={{ display: this.state.passwordDisplay }}>Passwords do not match!</small>
                                    <label for="passwordInput">Password*</label>
                                    <input type="password" class="form-control" id="passwordInput" name="password" onChange={this.handleInputChange}></input>
                                    <label for="passwordConfirmInput">Confirm Password*</label>
                                    <input type="password" class="form-control" id="passwordConfirmInput" name="passwordConfirm" onChange={this.handleInputChange}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn modal-button"
                                onClick={
                                    () => this.submitSignUp()}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default SignUpModal;