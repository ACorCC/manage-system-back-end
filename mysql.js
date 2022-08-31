// 导入mysql模块
const mysql = require('mysql')

// 连接mysql数据库
const db = mysql.createPool({
  host: '127.0.0.1',    // 连接的数据库所在ip地址
  user: 'root',         // 数据库账号
  password: 'admin', // 数据库密码
  database: 'user1', // 指定要操作哪个数据库
})

// 测试mysql能否正常工作
// db.query('SELECT 1', (err, results) => {
//   if (err) return console.log(err.message);
//   // 如果results能打印出 [ RowDataPacket { '1': 1 } ] 的结果，就说明数据库连接正常
//   console.log(results);
// })


// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()

const cors = require('cors')
app.use(cors())

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (request, response) => {
  console.log("监听到get访问");

  // 查询users表中的所有数据
  const sqlStr = 'select * from user11'
  db.query(sqlStr, (err, results) => {
    if (err) return console.log(err.message);
    console.log(results[0].username);
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send(results[0].username)
  })

})

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动，8000端口监听中...");
})

// {
//   // 待插入数据
//   const user = { username: 'Jack', password: 'jack123' }
//   // sql语句，其中的?表示占位符
//   const sqlStr = 'insert into users (username, password) values (?, ?)'
//   // 使用数组的形式作为第二个参数，为?占位符指定具体的值
//   db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('插入数据成功！');
//   })
// }

// {
//   // 待插入数据
//   const user = { username: 'Jack', password: 'jack123' }
//   // sql语句，其中的?表示占位符
//   const sqlStr = 'insert into users set ?'
//   // 使用数组的形式作为第二个参数，为?占位符指定具体的值
//   db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('插入数据成功！');
//   })
// }

// {
//   const user = { id: 7, username: 'aaa', password: '000' }// 要更新的数据对象
//   const sqlStr = 'update users set username=?, password=? where id=?'
//   db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('更新数据成功！');
//   })
// }

// {
//   const user = { id: 7, username: 'aaa', password: '000' }
//   const sqlStr = 'update users set ? where id=?'
//   db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('更新数据成功！');
//   })
// }

// {
//   const sqlStr = 'delete from users where id=?'
//   db.query(sqlStr, 7, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('删除数据成功！');
//   })
// }

// {
//   const sqlStr = 'update users set status=? where id=?'
//   db.query(sqlStr, [1, 7], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('删除数据成功！');
//   })
// }