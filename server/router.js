const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

var router = new Router();

router.get('/',  (ctx, next) => {
    // ctx.router available
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(path.join(__dirname.replace("server","client"),"dist","index.html"));
    // await next();
});

router.get('/test',  (ctx, next) => {
    // ctx.router available
    ctx.response.type='text';
    ctx.response.body = 'this is test text from server.';
    // await next();
});


module.exports = router;