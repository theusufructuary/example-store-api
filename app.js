import express from 'express';

import coursesRouter from './routes/courses.js';
import cartsRouter from './routes/carts.js';

const app = express();

app.use('/courses', coursesRouter);
app.use('/carts', cartsRouter);

app.get('/', (req, res) => {
    res.send(`Hello from / route`)
});

app.listen(process.env.PORT, () => console.log(`Server running on port: http://localhost:${process.env.PORT}`))