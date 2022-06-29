import query from "../../connection";

export async function getAllCourses() {
    const allCourses = await query(`SELECT * FROM courses;`);
    return allCourses.rows;
}