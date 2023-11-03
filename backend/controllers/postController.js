import express, { request } from 'express';
import postRepository from '../repositories/postRepository.js';

const router = express.Router();

router.get("/post", async (req, res) => {
  const posts = await postRepository.getPosts();

  res.json(posts);
});

router.post("/post", async (req, res) => {
  let request = res.json(req.body);

  const authorId = parseInt(req.query.authorId);
  //const {title, content}= req.body;

  const post = await postRepository.createPost(
    authorId, 
    request.title, 
    request.content,
  );

  res.json(post);
});

export default router;