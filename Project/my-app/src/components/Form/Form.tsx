import { ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const Form = (): ReactElement => {
  return (
    <>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained">Contained</Button>)
    </>
  )
}
