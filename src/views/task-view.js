export default class TaskView {
  /**
   * Maps a source task to an API response valid task
   * @param { Object } task The task to be sanitized
   * @returns { Object } A sanitized task
   */
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
