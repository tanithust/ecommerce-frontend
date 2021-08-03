import React from 'react'
import { GradeRounded, StarBorderRounded } from '@material-ui/icons'

const Rating = ({ rate }) => {
  const Stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) Stars.push(<GradeRounded />)
    else Stars.push(<StarBorderRounded />)
  }
  return <div style={{ color: '#FF9F1C' }}>{Stars}</div>
}

export default Rating
