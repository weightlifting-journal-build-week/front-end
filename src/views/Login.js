import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Loader from 'react-loader-spinner';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Login extends Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: 'master@jedicouncil.com',
                password: ''
            }
        }
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => this.props.history.push('/workouts/{}'))
    }

    tempLogin = event => {
        event.preventDefault();
        this.props.history.push('/');
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
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <button onClick={() => console.log(this.state)}>Current State</button>
                    <Avatar className={classes.avatar}>
                        <FitnessCenterIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                </Typography>
                    <form className={classes.form} onSubmit={this.tempLogin}>
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                        >
                            <InputLabel htmlFor="email">
                                Email Address
                            </InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={this.state.credentials.email}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl
                            margin="normal"
                            required fullWidth
                        >
                            <InputLabel htmlFor="password">
                                Password
                            </InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            {this.props.loggingIn ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Login'}
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
