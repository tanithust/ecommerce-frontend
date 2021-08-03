import React from 'react'
import { Grid } from '@material-ui/core'
import GridItem from './GridItem'
import data from '../assets/data'
const GridView = () => {
  const Products = data.map((item) => {
    return (
      <Grid item xs={6} sm={6} lg={3}>
        <GridItem {...item} />
      </Grid>
    )
  })
  return (
    <Grid container spacing={2}>
      {Products}
    </Grid>
  )
}

export default GridView
