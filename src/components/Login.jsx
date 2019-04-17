import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { login } from '../redux/actions';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }
    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => this.props.history.push('/workouts/{}'))
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    render() {
        return (
            <form className='login-form' onSubmit={this.login}>

                <label for='username'>E-Mail</label>
                <input
                    type='text'
                    name='email'
                    placeholder='e-mail'
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                />
                <label for='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                {this.props.error ? <p className='error'>{this.props.error}</p> : null}
                <button>
                    {this.props.loggingIn ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Login'}
                </button>
            </form>
        );
    }
}
const mapStateToProps = state => {
    return ({
        user: state.user,
        error: state.error,
        loggingIn: state.loggingIn
    })
};

export default connect(
    mapStateToProps,
    { login }
)(Login);
