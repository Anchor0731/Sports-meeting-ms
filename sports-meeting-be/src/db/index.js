require('./Schemas/Use');

const mongoose = require('mongoose');

const connect = () => {
  return new Promise(resolve => {
    mongoose.connect('mongodb://127.0.0.1:27017/sports-meeting');

    mongoose.connection.on('open', () => {
      console.log('连接数据库成功');

      resolve();
    });
  });
};

module.exports = {
  connect,
};
