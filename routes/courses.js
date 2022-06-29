import express from 'express';
// import courses from '../libs/courses.js';
import { readCourses } from '../controllers/courses';

const router = express.Router();

router.get('/').get(readCourses);

export default router;