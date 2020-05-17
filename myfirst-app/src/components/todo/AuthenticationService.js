
class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log("registerSuccessfulLogin")
        sessionStorage.setItem('authenticatedUser', username)
        sessionStorage.setItem('authenticatedUserPassowrd', password)

    }
    logout(username, password) {
        console.log("logout")
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('authenticatedUserPassowrd')

    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log("isUserLoggedIn")

        if (user === null)
            return false
        else
            return true
    }
}

export default new AuthenticationService()