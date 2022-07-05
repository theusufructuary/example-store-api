import { createCourse } from "../db/scripts/courses/populateTable.js";

import { getAllCourses } from "../db/scripts/courses/readTable.js";

import asyncHandler from "express-async-handler";

export async function readCourses(req, res) {
    const courses = await getAllCourses();
    res.status(200).json({
        status: "succeeded",
        message: "Read all courses",
        data: courses,
    });
}

export const insertCourse = asyncHandler(async (req, res) => {
    const { course_id, title, subtitle, subscribe, price, options} =
      req.body;
    if (
      !course_id ||
      !title ||
      !subtitle ||
      !subscribe ||
      !price ||
      !options
    ) {
      throw new Error("Some data fields were missing.");
    }
    const newCourse = await createCourse(req.body);
    res.status(201).json({
      status: "success",
      message: "New course created",
      payload: newCourse,
    });
  });
  