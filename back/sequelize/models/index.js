const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user')

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// sequelize 메타 데이터
db.sequelize = sequelize;

// sequelize 정의한 모델 데이터
db.User = User

// 모델 설정한 부분
User.init(sequelize)
User.associate(db)


module.exports = db;