import React from 'react'
import { Box, Button, ButtonGroup } from '@material-ui/core'
import { Apps, List } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    border: '1px solid #ababab',
  },

  buttonActive: {
    background: 'rgb(114, 80, 235)',
    padding: 5,
    color: 'white',
    border: '1px solid rgb(114, 80, 235)',
    '&:hover': {
      background: 'rgb(114, 80, 235)',
    },
  },
  buttonInactive: {
    border: '1px solid #ababab',
    padding: 5,
    color: 'rgb(114, 80, 235)',
  },
})

const SwitchView = ({ view, setView }) => {
  const classes = useStyles()
  return (
    <Box display='flex' flexDirection='row' alignItems='center'>
      <Box pr={1}>View : </Box>
      <ButtonGroup>
        <Button
          className={
            view === 'grid' ? classes.buttonActive : classes.buttonInactive
          }
          onClick={() => setView('grid')}
        >
          <Apps />
        </Button>
        <Button
          className={
            view === 'list' ? classes.buttonActive : classes.buttonInactive
          }
          onClick={() => setView('list')}
        >
          <List />
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default SwitchView
