"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

require('./config/aliases');
require('./config/environment');

var _routes = require('@/routes'); var _routes2 = _interopRequireDefault(_routes);
var _mongo = require('@/database/mongo'); var _mongo2 = _interopRequireDefault(_mongo);
var _startup = require('@/lib/startup'); var _startup2 = _interopRequireDefault(_startup);

const app = _express2.default.call(void 0, )
const port = process.env.APPLICATION_PORT

app.use(_express2.default.json())
app.use(_cors2.default.call(void 0, ))
app.use('/api', _routes2.default)

_startup2.default.call(void 0, app, port, _mongo2.default)
