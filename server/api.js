const Router = require('koa-router');
// const fs = require('fs');
// const path = require('path');

const data = require('./data.js');
const query = require('./query.js');

var router = new Router({
    prefix: '/api'
});

router.get('/product/:type', (ctx, next) => {
    ctx.response.type = 'json';
    ctx.response.body = data[ctx.params.type];
});

router.get('/product/info/:id', (ctx, next) => {
    ctx.response.type = 'json';
    let id = ctx.params.id;
    let prod_info = query.findProdInfoById(id);
    ctx.response.body = prod_info;
});

module.exports = router;