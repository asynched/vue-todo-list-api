"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _modulealias = require('module-alias'); var _modulealias2 = _interopRequireDefault(_modulealias);

_modulealias2.default.addAliases({
  '@': _path2.default.resolve(__dirname, '..'),
})
