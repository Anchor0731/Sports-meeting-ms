const Router = require('@koa/router');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const router = new Router({
  prefix: '/auth'
});

//注册接口
router.post('/register', async(ctx) => {
  const { account, password } = ctx.request.body;  //解构赋值取值

  const one = await User.findOne({
    account
  }).exec();

  if( account === '' || password === '' ){
    ctx.body = {
      code: 0,
      msg: '字段不能为空',
      data: null
    }
    return;
  }//服务端非空校验

  if(one){
    ctx.body = {
      code: 0,
      msg: '已存在该用户',
      data: null
    }
    return;
  }

  const user = new User({
    account: account,
    password: password,
  })

  const res = await user.save();

  ctx.body = {
    code: 1,
    msg: '注册成功',
    data: res
  }
});


//登录接口
router.post('/login', async(ctx) => {
  const { account, password } = ctx.request.body;

  const one = await User.findOne({
    account
  }).exec();

  if( account === '' || password === '' ){
    ctx.body = {
      code: 0,
      msg: '字段不能为空',
      data: null
    }
    return;
  }//服务端非空校验

  if(!one){
    ctx.body = {
      code: 0,
      msg: '用户名或密码错误',
      data: null
    };
    return;
  }

  const user = {
    account: one.account,
    _id: one._id
  }

  if(one.password === password) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: {
        user,
        token: jwt.sign(user, 'sports-meeting')
      }
    };
    return;
  }

  ctx.body = {
    code: 0,
    msg: '用户名或密码错误',
    data: null
  }
})

module.exports = router;