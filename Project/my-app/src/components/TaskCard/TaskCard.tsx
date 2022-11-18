import { ReactElement } from 'react'
import { Task } from '../../data'
import { taskList } from '../../data'
import { SwitchLabels } from '../Switch/switch'

import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const TaskCard = (props: Task): ReactElement => {
  return (
    <>
      {/* {taskList.map((task) => (
        <div>
          <h3>{task.name}</h3>
          {task.completed ? 'completed' : 'incomplete'}
        </div>
      ))} */}
      <h3>{props.name}</h3>
      {props.completed ? 'completed' : 'incomplete'}
    </>
  )
}

export function BasicCard() {
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent></CardContent>
      <CardActions>
        <SwitchLabels />
      </CardActions>
    </Card>
  )
}
