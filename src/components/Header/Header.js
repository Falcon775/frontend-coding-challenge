import React from 'react'

//Material UI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles()
    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        TodoApp
            </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
