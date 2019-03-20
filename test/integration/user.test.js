const { expect } = require("chai");
const request = require("supertest");
const app = require("../../server");
const User = require("../../models/user-model");

describe("Users API", () => {
  let user;
  beforeEach(async () => {
    user = {
      email: 'abc',
      name: 'a3vvv',
      password: '123'
    };
    await User.remove({});
  });
  describe('POST /api/user', () => {
    it('should return created user', () => {
      return request(app)
        .post('/api/users/register')
        .send(user)
        .then(res => {
          // expect(res.name).to.be.a('string');
        })
    })
  });
});
