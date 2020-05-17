import AuthenticationService from "./AuthenticationService";
import React, { Component } from 'react'


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'vishal',
            password: '',
            hasLoginfailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClick() {
        if (this.state.username === 'vishal' && this.state.password === 'vishal') {

            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({ showSuccessMessage: true, hasLoginfailed: false })
        } else {
            console.log('Authentication Failed')
            this.setState({ showSuccessMessage: false, hasLoginfailed: true })
        }
    }


    render() {
        return (
            <><h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginfailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Success</div>}

                Username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClick}>Login</button>
                </div>
            </>
        )
    }
}
export default LoginComponent