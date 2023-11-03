import prisma from "../lib/prisma.js";

async function getPosts() {
  const posts = await primsa.post.findMany({
    include: {
      _count : {
        select: { comments: true, upvotes: true}
      },
      author: {
        select: {username: true}
      }
    }
  });

  return posts
}

async function createPost(authorId, title, content) {
  const post = await prisma.post.create({
    data : {
      authorId, //authorId : authorId
      title,
      content,
      dateCreate : new Date(),
    }
  });

  return post;
}

export default { 
  getPosts, 
  createPost, 
};