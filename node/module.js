const express = require('express'); //1 导入 express模块
const router = express.Router() //2 创建路由对象
const cors = require('cors');
const mssql = require('mssql');
//
const session = require('express-session')
//读取资源
const fs = require('fs');
const path = require('path');
const { strict } = require('assert');
const { send } = require('process');

// const { request } = require('express'); 上面如果有这个 见到就删 否则会报错
/* 
中间件
*/
//解析 json
router.use(express.json());
router.use(express.urlencoded({extended:false}));
//解决跨域 
router.use(cors());

//启用 session 中间件
router.use(session({
  secret:"keyboard cat", // secret 的属性值可以是任意字符串
  resave:false ,         //固定写法
  saveUninitialized:true //固定写法
}))

//配置数据库
// const config = {
//   user:'sa',
//   password:'sa',
//   server:'127.0.0.1',
//   //链接的数据集
//   database:'XiaoShuo',
//   //encrypt 是否加密
//   encrypt: false ,
// }

//试链接数据
// mssql.connect(config,(err)=>{
//   if(err) console.log(err)
//   else console.log('数据库链接成功!!');
//   return request = new mssql.Request();
// })

router.get('/x',(req,res)=>{
  res.send('xxxxx')
})

//向外共享路由
module.exports = router;
