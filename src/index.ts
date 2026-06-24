import fs from 'fs'

interface Task {
    id: number
    title: string
    completed: boolean
}

let tasks: Task[] = loadTask()

function addTask(title: string): void {
    let newTask: Task = {
        id: tasks.length + 1,
        title,
        completed: false
    }

    tasks.push(newTask)
    saveTasks()
}

function completeTask(id: number): void {
    let findTask: Task | undefined = tasks.find(item => item.id === id)
    if (findTask) {
        findTask.completed = true;
    }
    saveTasks()
}

// function deleteTask(id: number): void {
//     tasks = tasks.filter(item => item.id !== id);
//     saveTasks()
// }

function listTask(): void {
    tasks.forEach(item => console.log(item))
}

function saveTasks(): void {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks))
}

function loadTask():Task[]{
    try {
        let file = fs.readFileSync('tasks.json', 'utf-8');
        if (file) {
            return JSON.parse(file)
        }
    } catch (err) {
        console.log(err)    
    }
    return[]
}

// addTask("Buy groceries")
// addTask("Learn TypeScript")
// addTask("Play cricket")
// // listTask()

// completeTask(2)
// deleteTask(3)
listTask()