const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`server running in http://localhost:${process.env.PORT}`)
});
