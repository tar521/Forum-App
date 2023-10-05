const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

const CONNECTION_URL = 'mongodb://127.0.0.1:27017/forum_app_db';
var postedId = "";

beforeAll(async () => {
    const res = await request(app).post("/thread").send({
        title: "SET UP",
        author: "THREAD, TEST",
        content: "Test content",
        replies: [
            {
                author: "Test author",
                content: "Test content",
            }
        ],
        });
    postedId = res.body._id;    
})

beforeEach(async () => {
    await mongoose.connect(CONNECTION_URL);
  });
  
/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});


  describe("GET /thread", () => {
    it("should return all threads", async () => {
      const res = await request(app).get("/thread");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });


  describe("POST /thread & DELETE /thread", () => {
    it("should create a thread", async () => {
      const res = await request(app).post("/thread").send({
        title: "TEST THREAD API",
        author: "THREAD, TEST",
        content: "Test content",
        replies: [
            {
                author: "Test author",
                content: "Test content",
            }
        ]
        });
      
      expect(res.statusCode).toBe(201);
      expect(res.body.title).toBe("TEST THREAD API");

      const res2 = (await request(app).delete("/thread")).send({
        _id: res.body._id
      });

      expect(res2.statusCode).toBe(200);

    });
    });


    describe("PUT /thread", () => {
        it("should update a thread", async () => {
            
          const res = await request(app)
            .put("/thread")
            .send({
              _id: postedId,
              reply: {
                author: "Test Author",
                content: "Some content"
              }
            });
            expect(res.statusCode).toBe(200);
            expect(res.body.modifiedCount).toBe(1);
            expect(res.body.matchedCount).toBe(1);
        });
    });

    const res2 = (await request(app).delete("/thread")).send({
        _id: res.body._id
      });

      expect(res2.statusCode).toBe(200);