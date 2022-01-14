"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _http = require('@/lib/http');
var _taskcontroller = require('@/controllers/task-controller'); var _taskcontroller2 = _interopRequireDefault(_taskcontroller);

const router = _express.Router.call(void 0, )

router.get('/tasks', _http.bindContext.call(void 0, _taskcontroller2.default.getTasks))
router.post('/tasks', _http.bindContext.call(void 0, _taskcontroller2.default.createTask))

router.get('/tasks/:id', _http.bindContext.call(void 0, _taskcontroller2.default.getTask))
router.delete('/tasks/:id', _http.bindContext.call(void 0, _taskcontroller2.default.deleteTask))
router.put('/tasks/:id', _http.bindContext.call(void 0, _taskcontroller2.default.updateTask))

exports. default = router
