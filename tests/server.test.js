const port = require('../server/server.js')
const app = require('../server/app.js')
const request = require('supertest')
const server = `http://localhost:${port}`;
const axios = require('axios')
// describe ("router unit tests", () => {

  describe("GET", () => {

    test("should return with a status code of 200", (done) => {
        request(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });

    // it("returns an html file",(done) => {
    //   request(server).get('/')
    //     .expect('text/html; charset=UTF-8')
    //   done();
    // })
     })

    });