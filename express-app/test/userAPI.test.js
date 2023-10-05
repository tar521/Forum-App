const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../index');

beforeEach(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/forum_app_db');
})

afterEach(async () => {
    await mongoose.connection.close();
})

// beforeAll(done => {
//     done();
// })

afterAll((done) => {
    mongoose.connection.close();
    done();
})

describe('GET /user', () => {
    it('should return all users', async () => {
        const res = await request(app).get('/user');
        expect(res.statusCode).toBe(200);
    })
})

describe('POST /user', () => {
    it('should create a new user', async () => {
        const res = await request(app).post('/user')
                    .send({
                        username: "John",
                        password: "Doe"
                    });
        expect(res.statusCode).toBe(201);
        expect(res.body.username).toBe('John');
        expect(res.body.password).toBe('Doe');
    })
})

describe('POST /auth', () => {
    it("should authenticate the user", async () => {
        const res = await request(app).post('/auth')
                    .send({
                        username: "John",
                        password: "Doe"
                    });
        expect(res.statusCode).toBe(200);
        expect(res.body.username).toBe('John');
    })
})
