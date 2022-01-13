export default class TaskView {
  static sanitize(task) {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      created_at: task.createdAt,
    }
  }
}
