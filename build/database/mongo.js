"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const connectToMongo = async () => {
  await _mongoose2.default.connect(process.env.DATABASE_URL)
}

exports. default = connectToMongo
