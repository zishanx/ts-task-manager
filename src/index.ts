import fs from 'fs'

interface Task {
    id: number
    title: string
    completed: boolean
}

let tasks: Task[] = [JSON.parse(fs.readFileSync('tasks.json'))]

function addTask(title: string): void {
    let newTask: Task = {
        id: tasks.length + 1,
        title,
        completed: false
    }

    tasks.push(newTask)
}

function completeTask(id: number): void {
    let findTask: Task | undefined = tasks.find(item => item.id === id)
    if (findTask) {
        findTask.completed = true;
    }
}

function deleteTask(id: number): void {
    tasks = tasks.filter(item => item.id !== id);
}

function listTask(): void {
    tasks.forEach(item => console.log(item))
}

addTask("Buy groceries")
addTask("Learn TypeScript")
addTask("Play cricket")
// listTask()

completeTask(2)
deleteTask(3)
listTask()