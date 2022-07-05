import express from 'express';
// import courses from '../libs/courses.js';
import { readCourses, insertCourse } from '../controllers/courses.js';

const router = express.Router();

router.route('/').get(readCourses).post(insertCourse);

export default router;