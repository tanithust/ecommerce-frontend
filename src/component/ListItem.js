import React from 'react'
import { Grid, Box, CardMedia, Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Rating from './Rating'
const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    border: '1px solid whitesmoke',
    background: 'white',
    borderRadius: 10,
    padding: 5,
    '& a:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      cursor: 'pointer',
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
  rightBox: {
    alignSelf: 'center',
    color: 'rgb(114, 80, 235)',
  },
  centerBox: {
    borderRight: '1px solid whitesmoke',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(134, 134, 134)',
    '&:hover': {
      color: 'rgb(114, 80, 235)',
    },
  },
  desc: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  },
  price: {
    fontSize: 20,
    margin: 10,
  },
  btn: {
    textTransform: 'none',
    background: 'rgb(114, 80, 235)',
    width: '95%',
    color: 'white',
    borderRadius: 10,
    fontSize: 17,
    '&:hover': {
      background: 'rgb(114, 80, 235)',
    },
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
      <Grid className={classes.centerBox} item md={7}>
        <Box display='flex' flexDirection='column'>
          <Box className={classes.name}>{name}</Box>

          <Box>By {supplier}</Box>
          <Box>
            <Rating rate={rating} />
          </Box>
          <Box className={classes.desc}>{desc}</Box>
        </Box>
      </Grid>
      <Grid className={classes.rightBox} item md={2}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box className={classes.price}>${price}</Box>
          <Button className={classes.btn}>
            <AddShoppingCart />
            <Box pl={1}></Box> Add to cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ListItem
