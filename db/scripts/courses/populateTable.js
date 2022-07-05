import query from "../../connection.js";

export async function createCourse({
    course_id, 
    title, 
    subtitle, 
    subscribe, 
    price, 
    options,
}) {
  const result = await query(
    `INSERT INTO courses (course_id, title, subtitle, subscribe, price, options) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`,
    [course_id, title, subtitle, subscribe, price, options]
  );
  return result.rows;
}