import { Router } from 'express'
import { bindContext } from '@/lib/http'
import TaskController from '@/controllers/task-controller'

const router = Router()

router.get('/tasks', bindContext(TaskController.getTasks))
router.post('/tasks', bindContext(TaskController.createTask))

router.get('/tasks/:id', bindContext(TaskController.getTask))
router.delete('/tasks/:id', bindContext(TaskController.deleteTask))
router.put('/tasks/:id', bindContext(TaskController.updateTask))

export default router
