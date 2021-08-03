import React from 'react'
import { Grid, Box, CardMedia, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Rating from './Rating'
const useStyles = makeStyles({
  root: {
    marginBottom: 10,
    border: '1px solid #ababab',

    borderRadius: 10,
    padding: 5,
    '& a:link': {
      textDecoration: 'none',
    },
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 'auto',
    maxHeight: '14rem',
  },
})

const ListItem = ({ id, img, name, price, rating, desc, supplier }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item md={3}>
        <Box className={classes.imgContainer}>
          <CardMedia className={classes.img} image={img} component='img' />
        </Box>
      </Grid>
      <Grid item md={7}>
        <Box display='flex' flexDirection='column'>
          <Box>{name}</Box>
          <Box>By {supplier}</Box>
          <Box>
            <Rating rate={rating} />
          </Box>
          <Box>{desc}</Box>
        </Box>
      </Grid>
      <Grid item md={2}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box>{price}</Box>
          <Button>Add to cart</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ListItem
