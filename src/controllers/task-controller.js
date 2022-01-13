import { monadic } from '@/lib/monadic'
import Task from '@/models/Task'
import { isEmpty } from '@/utils'
import TaskView from '@/views/task-view'

export default class TaskController {
  /**
   * Gets a list of tasks from the database and returns it
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async getTasks({ response }) {
    const [tasks, error] = await monadic(() => Task.find({}).exec())

    if (error) {
      return response.status(500).json({
        message: 'Something went wrong',
        error,
      })
    }

    const sanitizedTasks = tasks.map(TaskView.sanitize)

    return response.status(200).json(sanitizedTasks)
  }

  /**
   * Gets a single task from the database and returns it
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async getTask({ request, response }) {
    const id = request.params.id
    const [task, error] = await monadic(() => Task.findById(id).exec())

    if (error) {
      return response.status(400).json({
        message: "Couldn't get task",
        error,
      })
    }

    const sanitizedTask = TaskView.sanitize(task)
    return response.status(200).json(sanitizedTask)
  }

  /**
   * Creates a task and stores it in the database
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async createTask({ request, response }) {
    const { title, description } = request.body

    if (isEmpty(title) || isEmpty(description)) {
      return response.status(400).json({
        message: 'Cannot register a task that has empty fields',
        description: 'Either the field title or description was empty',
      })
    }

    const data = {
      title,
      description,
      completed: false,
    }

    const [task, error] = await monadic(() => Task.create(data))

    if (error) {
      return response.status(400).json({
        message: 'Something went wrong',
        error,
      })
    }

    const sanitizedTask = TaskView.sanitize(task)
    return response.status(201).json(sanitizedTask)
  }

  static async updateTask() {}

  static async deleteTask() {}
}
