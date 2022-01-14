"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _utils = require('@/utils');
var _monadic = require('@/lib/monadic');

var _Task = require('@/models/Task'); var _Task2 = _interopRequireDefault(_Task);
var _taskview = require('@/views/task-view'); var _taskview2 = _interopRequireDefault(_taskview);

 class TaskController {
  /**
   * Gets a list of tasks from the database and returns it
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async getTasks({ response }) {
    const [tasks, error] = await _monadic.monadic.call(void 0, () => _Task2.default.find({}).exec())

    if (error) {
      return response.status(500).json({
        message: 'Something went wrong',
        error,
      })
    }

    const sanitizedTasks = tasks.map(_taskview2.default.sanitize)

    return response.status(200).json(sanitizedTasks)
  }

  /**
   * Gets a single task from the database and returns it
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async getTask({ request, response }) {
    const id = request.params.id
    const [task, error] = await _monadic.monadic.call(void 0, () => _Task2.default.findById(id).exec())

    if (error) {
      return response.status(400).json({
        message: "Couldn't get task",
        error,
      })
    }

    const sanitizedTask = _taskview2.default.sanitize(task)
    return response.status(200).json(sanitizedTask)
  }

  /**
   * Creates a task and stores it in the database
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async createTask({ request, response }) {
    const { title, description } = request.body

    if (_utils.isEmpty.call(void 0, title) || _utils.isEmpty.call(void 0, description)) {
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

    const [task, error] = await _monadic.monadic.call(void 0, () => _Task2.default.create(data))

    if (error) {
      return response.status(400).json({
        message: 'Something went wrong',
        error,
      })
    }

    const sanitizedTask = _taskview2.default.sanitize(task)
    return response.status(201).json(sanitizedTask)
  }

  /**
   * Updates a task in the database
   * @param { import('@/lib/http').ContextType } context HTTP request context
   */
  static async updateTask({ request, response }) {
    const taskID = request.params.id
    const updateData = request.body

    const [data, error] = await _monadic.monadic.call(void 0, () =>
      _Task2.default.findByIdAndUpdate(taskID, updateData).exec(),
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
    const [, error] = await _monadic.monadic.call(void 0, () => _Task2.default.findByIdAndDelete(taskID).exec())

    if (error) {
      return response.status(400).json({
        message: `Couldn't delete task with id "${id}"`,
        error: error,
      })
    }

    return response.status(204).json({
      message: 'Successfully deleted task',
    })
  }
} exports.default = TaskController;
