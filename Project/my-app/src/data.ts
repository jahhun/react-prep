export interface Task {
  name: string
  completed: boolean
  id: string
}

export const taskList: Task[] = [
  { name: 'task #123', completed: true, id: 'task#1' },
  { name: 'task #2', completed: true, id: 'task#2' },
  { name: 'task #3', completed: true, id: 'task#3' },
]
