import React, { useState } from 'react'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import SwitchView from '../component/SwitchView'
import SortBy from '../component/SortBy'
import GridView from '../component/GridView'
import ListView from '../component/ListView'
import Header from '../component/Header'

const Products = () => {
  const [view, setView] = useState('grid')
  const [sort, setSort] = useState('')

  return (
    <>
      <Grid container spacing={3} direction='row' justifyContent='center'>
        <Grid item sm={10}>
          <Box
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            mb={3}
          >
            <SwitchView view={view} setView={setView} />
            <Box p={1}></Box>
            <SortBy sort={sort} setSort={setSort} />
          </Box>
          {view === 'grid' ? <GridView /> : <ListView />}
        </Grid>
      </Grid>
    </>
  )
}

export default Products
