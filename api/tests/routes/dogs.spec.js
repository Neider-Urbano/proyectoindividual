/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const supertest= require('supertest')
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);

describe('Dogs routes', () => {
  
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  
  beforeEach(() => Dog.sync({ force: true }));

  describe('GET /dogs?name="..."', () => {
    it('deberia devolver 200', async() =>
      await agent.get('/dogs?name=aff').expect(200)
    );
    it('should get 404', async() =>
      await agent.get('/dogs?name=wwwwww').expect(404)
    );
  })

  describe('GET /dog/:idRaza', () => {
    it('Deberia devolver 404', async() =>
      await agent.get('/dogs/****').expect(404)
    );
    it('Deberia devolver 200', async() =>
      await agent.get('/dogs/aff').expect(200)
    );
  });
});
