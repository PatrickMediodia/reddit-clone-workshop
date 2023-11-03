import express from 'express';
const app = express()
const port = 3000

import postController from './controllers/postController.js';

app.use(postController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})