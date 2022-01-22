import { monadic } from '@/lib/monadic'

import Task from '@/models/task'
import TaskView from '@/views/task-view'
import TaskValidator from '@/validators/task-validator'

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

    if (error || !task) {
      return response.status(404).json({
        message: 'The task you were looking for was not found',
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
    const [isValid, errors] = TaskValidator.validate(request.body)

    if (!isValid) {
      return response.status(400).json({
        message:
          'Could not create task, see the errors below for more information',
        error: errors,
      })
    }

    const { title, description } = request.body

    const data = {
      title,
      description,
      completed: false,
    }

    const [task, error] = await monadic(() => Task.create(data))

    if (error) {
      return response.status(500).json({
        message: 'Something went wrong',
        error,
      })
    }

    const sanitizedTask = TaskView.sanitize(task)
    return response.status(201).json(sanitizedTask)
  }

  /**
   * Updates a task in the database
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async updateTask({ request, response }) {
    const taskID = request.params.id
    const updateData = request.body

    const [data, error] = await monadic(() =>
      Task.findByIdAndUpdate(taskID, updateData).exec(),
    )

    if (error) {
      return response.status(400).json({
        message: `Couldn't update task "${taskID}"`,
        error: error,
      })
    }

    return response.status(200).json(data)
  }

  /**
   * Deletes a task in the database
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async deleteTask({ request, response }) {
    const taskID = request.params.id
    const [, error] = await monadic(() => Task.findByIdAndDelete(taskID).exec())

    if (error) {
      return response.status(404).json({
        message: `Couldn't delete task with id "${id}"`,
        error: error,
      })
    }

    return response.status(204).json({
      message: 'Successfully deleted task',
    })
  }
}
