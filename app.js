import express from 'express';

import coursesRouter from './routes/courses.js';
import cartsRouter from './routes/carts.js';

const app = express();

const PORT = process.env.PORT || process.env.PGPORT;

app.use('/courses', coursesRouter);
app.use('/carts', cartsRouter);

app.get('/', (req, res) => {
    res.send(`Hello from / route`)
});

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default server;