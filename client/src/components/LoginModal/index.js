import React, { Component } from 'react';
import './style.css';


class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            incorrectDisplay: "none",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    login() {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginSubmit(data);
        localStorage.setItem('user', data.username)
        console.log(data.username)
    }

    render() {
        return (
            <div class="modal fade" id="loginModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                    <small id="incorrectText" class="form-text text-danger" style={{ display: this.state.incorrectDisplay }}>Incorrect username or password</small>
                                    <label for="username">Username</label>
                                    <input type="text" class="form-control" id="username" name="username" onChange={this.handleInputChange}></input>
                                    <label for="passwordInput">Password</label>
                                    <input type="password" class="form-control" id="passwordInput" name="password" onChange={this.handleInputChange}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn modal-button"
                                data-dismiss="modal"
                                onClick={
                                    () => this.login()}
                            >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default LoginModal;