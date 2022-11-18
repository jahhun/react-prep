import { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
interface Props {
  label?: string
}

export const Title = (props: Props): ReactElement => {
  return (
    <>
      <Typography variant="h1">{props.label}</Typography>
    </>
  )
}
