const router = require('koa-router')()
router.prefix('/routes')
router.get('/', function (ctx, next) {
  let result = {}
  result.code = 0
  result.data = [
    {
      router: 'root',
      children: [
        {
          router: 'demo',
          path: 'demo',
          name: '演示页',
          icon: 'file-word',
          authority: {role: 'admin'}
        },
        {
          router: 'parent1',
          children: ['exp404','exp403','exp500'],
        },
      ]
    }
  ]
  ctx.body = result
})

module.exports = router