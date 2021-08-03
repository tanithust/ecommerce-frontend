import React from 'react'
import { CardMedia, Box, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const useStyles = makeStyles({
  root: {
    height: '95%',
    border: '2px solid whitesmoke',
    borderRadius: 10,
    color: 'rgb(134, 134, 134)',
    '&:hover': {
      background: 'whitesmoke',
    },
    '& a:link': {
      textDecoration: 'none',
      color: 'rgb(134, 134, 134)',
    },
    '& a:visited': {
      color: 'rgb(134, 134, 134)',
    },
  },
  img: {
    width: 'auto',
    maxHeight: '14rem',
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    maxHeight: '3rem',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '15px',
    '&:hover': {
      color: 'rgb(114, 80, 235)',
    },
  },
  desc: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
})

const GridItem = ({ id, img, name, price, rating }) => {
  const classes = useStyles()
  console.log(rating)

  return (
    <Box pt={2} px={2} className={classes.root}>
      <Link to={`/products/${id}`}>
        <div className={classes.imgContainer}>
          <CardMedia className={classes.img} image={img} component='img' />
        </div>
        <Box
          className={classes.rating}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box>
            <Rating rate={rating} />
          </Box>
          <Box>
            <h4>{price}$</h4>
          </Box>
        </Box>
        <Box className={classes.name} pb={2}>
          {name}
        </Box>
      </Link>
    </Box>
  )
}

export default GridItem
