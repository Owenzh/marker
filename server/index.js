const Koa = require('koa');
let router = require('./router');
let api = require('./api');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
};
const error = err => {
    console.error(err.stack);
};
const staticPath = path.join(__dirname.replace('server', 'client'), './dist');
const static = serve(staticPath);

app.use(static);
app.use(logger);
app.use(router.routes());
app.use(api.routes());
app.on('error', error);

app.listen(8000);