import React from 'react';
import {
    Link
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        textDecoration: 'none',
        display: 'flex',
        "& li": {
            textDecoration: 'none',
        }
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div>
             <nav  >
                <ul className={classes.nav}>
                    <li>
                    <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard
