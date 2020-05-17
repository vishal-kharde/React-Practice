import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedInVal = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedInVal)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">MyTool</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedInVal && <li><Link className="nav-link" to="/welcome/vishal">Home</Link></li>}
                        {isUserLoggedInVal && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedInVal && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedInVal && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)
