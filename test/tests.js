'use strict';
const request = require('supertest');
const expect = require('chai').expect;

const HTTP_200 = 200;
const HTTP_404 = 404;

describe('loading express', () => {
  let server = null;

  beforeEach(() => {
    server = require('../app');
  });
  afterEach(() => {
    //server.close();
  });

  it('responds to /', (done) => {
    request(server)
    .get('/')
    .expect(HTTP_200, done);
  });
  it('responds to /api', (done) => {
    const msg = 'I am a message!';
    request(server)
    .get('/api')
    .end((err, res) => {
      expect(err).to.equal(null);
      expect(HTTP_200);
      expect(res.body.msg).to.equal(msg);
      done();
    });
  });
  it('responds to /api', (done) => {
    const msg = 'I am a message!';
    request(server).post('/api')
    .set('Content-Type', 'application/json')
    .send({msg})
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      expect(HTTP_200);
      expect(res.body.msg).to.equal(msg);
      return done();
    });
  });
  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(HTTP_404, done);
  });
});
