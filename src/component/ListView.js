import React from 'react'
import { Grid } from '@material-ui/core'
import ListItem from './ListItem'
import data from '../assets/data'

const ListView = () => {
  const ProductList = data.map((item) => {
    return (
      <Grid item key={item.id} sm={12} lg={12}>
        <ListItem {...item} />
      </Grid>
    )
  })
  return (
    <Grid container spacing={2}>
      {ProductList}
    </Grid>
  )
}

export default ListView
