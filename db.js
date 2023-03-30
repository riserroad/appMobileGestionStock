//在项目中创建一个新文件db.js，用于连接 MongoDB 数据库：
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gestionDeStock', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
