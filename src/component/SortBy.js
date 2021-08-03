import React from 'react'
import { Select, FormControl, MenuItem, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

const useStyles = makeStyles({
  formControl: {
    minWidth: 90,
  },
})

const SortBy = ({ sort, setSort }) => {
  const classes = useStyles()
  return (
    <Box display='flex' flexDirection='row' alignItems='center'>
      <Box pr={2}>Sort By :</Box>
      <FormControl className={classes.formControl}>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <MenuItem value={'price-asc'}>
            <Box display='flex' alignItems='center'>
              Price <ArrowDownward />
            </Box>
          </MenuItem>
          <MenuItem value={'price-dsc'}>
            <Box display='flex' alignItems='center'>
              Price <ArrowUpward />
            </Box>
          </MenuItem>
          <MenuItem value={'rating'}>Rating</MenuItem>
          <MenuItem value={'newest'}>Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SortBy
