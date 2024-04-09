// server.js

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');

const app = new Koa();
const PORT = process.env.PORT || 3000;

// Middleware to log execution time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// Middleware to parse request bodies
app.use(bodyParser());

// Register routes
app.use(routes.routes());
app.use(routes.allowedMethods());

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
