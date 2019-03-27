const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  try {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log("%s %s - %s", ctx.method, ctx.url, ms);
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(async ctx => {
  ctx.body = "Hello World";
});

app.listen(3000);
