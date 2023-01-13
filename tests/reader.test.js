const { expect } = require("chai");
const request = require("supertest");
const { Reader } = require("../src/models");
const app = require("../src/app");

describe("/readers", () => {
  before(async () => Reader.sequelize.sync());

  beforeEach(async () => {
    await Reader.destroy({ where: {} });
  })

  describe("with no records in the database", () => {
    describe("POST /readers", () => {

      it("creates a new reader in the databse", async () => {
        const response = await request(app).post('/readers').send({
          name: 'George Miller',
          email: 'george@clubpenguin.com',
        });

        const newReaderRecord = await Reader.findByPk(response.body.id, { raw: true });

        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal('George Miller');
        expect(newReaderRecord.name).to.equal('George Miller');
        expect(newReaderRecord.email).to.equal('george@clubpenguin.com');
      });
    });
  });
});
