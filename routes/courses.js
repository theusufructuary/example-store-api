import express from 'express';
import courses from '../libs/courses.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(courses);
})

export default router;