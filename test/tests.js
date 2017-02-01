var request = require('supertest');
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
  request(server)
    .get('/api')
    .expect(200, done);
  });
  it('responds to /api', function testAPI(done) {
  request(server)
    .post('/api')
    .set('Content-Type', 'application/json')
    .send({ msg: 'I am an object!'})
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
