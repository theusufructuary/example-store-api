import query from "../../connection.js";

const response = await query(
  `CREATE TABLE IF NOT EXISTS courses (course_id SERIAL PRIMARY KEY, title TEXT, subtitle TEXT, subscribe TEXT, price TEXT, options TEXT);`
);

console.log(response);