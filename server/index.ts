import express from 'express';

const app = express();

app.use(express.json());

const posts: any[] = [];

app.get('/posts', (req, res) => {
    res.send({ posts });
})

app.post('/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.sendStatus(201);
})

app.listen(3000);