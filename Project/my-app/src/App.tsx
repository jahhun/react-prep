import React from 'react'
import logo from './logo.svg'
import { Title } from './components/Title/Title'
import { Form } from './components/Form/Form'
import { TaskCard } from './components/TaskCard/TaskCard'
import { taskList } from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Title label="Hello World" />;{/* <TaskCard name="abcd" /> */}
      {taskList.map((task) => (
        <TaskCard
          key={task.id}
          name={task.name}
          completed={task.completed}
          id={task.id}
        />
      ))}
    </div>
  )
}

export default App
