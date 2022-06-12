import express from 'express';
import carts from '../libs/carts.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(carts);
})

export default router;