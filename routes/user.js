const router = require('koa-router')()

router.prefix('/user')

router.post('/login', function (ctx, next) {
  let result = {}
  const name = ctx.request.body.name
  const password = ctx.request.body.password
  console.log(ctx.request.body);
  console.log(name);
  console.log(typeof (name));
  console.log(password);
  console.log(typeof (password));
  if (name !== 'admin' || password !== '888888') {
    result.code = -1
    result.message = '账户名或密码错误（admin/888888）'
  } else {
    result.code = 0
    console.log(typeof (result.code));
    result.message = '上午好' + '，欢迎回来'
    console.log(typeof (result.message));
    result.data = {}
    result.data.user = {
      name: '熊爸',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
      address: '泰安市',
      position: {
        CN: "社畜",
        HK: "計算服務事業群",
        US: "engineer"
      }
    }
    console.log(typeof (result.data.user));
    result.data.token = 'Authorization:' + Math.random()
    console.log(typeof (result.data.token));
    result.data.expireAt = new Date(new Date().getTime() + 30 * 60 * 1000)
    console.log(typeof (result.data.expireAt));
    result.data.permissions = [{ id: 'queryForm', operation: ['add', 'edit'] }]
    console.log(typeof (result.data.permissions));
    result.data.roles = [{ id: 'admin', operation: ['add', 'edit', 'delete'] }]
    console.log(typeof (result.data.roles));
  }
  ctx.body = result
})

module.exports = router
