import { getAllCourses } from "../db/scripts/courses/readTable.js";

export async function readCourses(req, res) {
    const courses = await getAllCourses();
    res.status(200).json({
        status: "succeeded",
        message: "Read all courses",
        data: courses,
    });
}