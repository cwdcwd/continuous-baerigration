var request = require('supertest');
var expect = require('chai').expect;

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../app');
  });
  afterEach(function () {
    //server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('responds to /api', function testAPI(done) {
    const msg='I am a message!';
  request(server)
    .get('/api')
    .end(function (err, res) {
      expect(200);
      expect(res.body.msg).to.equal(msg);
      done();
    });
  });
  it('responds to /api', function testAPI(done) {
    const msg='I am a message!';
  request(server).post('/api')
    .set('Content-Type', 'application/json')
    .send({ msg })
    .end(function (err, res) {
      if (err) {
          return done(err);
      }
      expect(200);
      expect(res.body.msg).to.equal(msg);
      done();
    });
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
