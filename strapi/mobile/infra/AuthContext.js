import React from 'react';
import UserController from '../controller/UserController';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = { isAuth: false }

    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(data) {
        let result = UserController.login(data.userId, data.password, data.endpoint);
        setTimeout(() => this.setState({
            isAuth: result
        }), 1000);
    }

    logout() {
        UserController.logout();
        this.setState({ isAuth: false });
    }

    isAuthenticated() {
        let result = UserController.getActiveUser();
        this.setState({ isAuth: result });
    }

    render() {

        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
