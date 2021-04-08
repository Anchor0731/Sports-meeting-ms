const Koa = require('koa');
const KoaBody = require('koa-body');
const { connect } = require('./db/index');  //注意require的顺序
const registerRoutes = require('./routers/index');
const cors = require('@koa/cors')

const app = new Koa();

connect().then(() => {
  app.use(cors());
  app.use(KoaBody());
  
  registerRoutes(app);

  app.listen(3000, () => {
    console.log('启动成功');
  });
});
