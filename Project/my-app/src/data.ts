export interface Task {
  name: string
  completed: boolean
}

export let taskList: Task[] = [
  { name: 'task #1', completed: true },
  { name: 'task #2', completed: true },
  { name: 'task #3', completed: true },
]
