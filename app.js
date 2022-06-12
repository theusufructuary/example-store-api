import express from 'express';

import coursesRouter from './routes/courses.js';
import cartsRouter from './routes/carts.js';
import { PGPORT } from './config';
const app = express();

app.use('/courses', coursesRouter);
app.use('/carts', cartsRouter);

app.get('/', (req, res) => {
    res.send(`Hello from / route`)
});

const server = app.listen(PGPORT, () => console.log(`Server running on port: http://localhost:${PGPORT}`))

export default server;