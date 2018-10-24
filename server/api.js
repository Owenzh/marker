const Router = require('koa-router');
// const fs = require('fs');
// const path = require('path');

const data = require('./data.js')

var router = new Router({
    prefix: '/api'
});

router.get('/product/:type', (ctx, next) => {
    // let type = ctx.params.type;
    console.log('~~' + ctx.params.type);
    ctx.response.type = 'json';
    ctx.response.body = data[ctx.params.type];
});


module.exports = router;