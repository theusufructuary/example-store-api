import request from 'supertest';

import app from './app.js';

import courses from './libs/courses';
import carts from './libs/carts';

//Carts route

describe("GET /carts", function () {
  test("responds with carts json data", async function () {
      //arrange
        // imported from libs locally
      //actual
      const actual = await request(app).get('/carts');
      //assert
      expect(actual.statusCode).toEqual(200);
      expect(actual.body).toEqual(carts);
    });
  });

  //Courses route

describe("GET /course", function () {
  test("responds with carts json data", async function () {
    //arrange
      // imported from libs locally
    //actual
    const actual = await request(app).get('/courses');
    //assert
    expect(actual.statusCode).toEqual(200);
    expect(actual.body).toEqual(courses);
  });
});