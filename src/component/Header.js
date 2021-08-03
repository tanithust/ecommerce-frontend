import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    background: 'orange',
    margin: 0,
  },
})

const Header = () => {
  const classes = useStyles()
  return <div className={classes.root}>Header</div>
}

export default Header
