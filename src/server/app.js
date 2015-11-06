import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uploadr</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>Uploadr</h1>
    <input type="file">
    <button>Upload</button>
  </body>
</html>
  `);
});

app.get('/sign-auth', (req, res) => {

});


export default app;
