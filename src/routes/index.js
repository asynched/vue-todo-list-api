import { Router } from 'express'
import { addContext } from '@/lib/http'
import TaskController from '@/controllers/task-controller'

const router = Router()

router.get('/tasks', addContext(TaskController.getTasks))
router.get('/tasks/:id', addContext(TaskController.getTask))
router.post('/tasks', addContext(TaskController.createTask))

export default router
