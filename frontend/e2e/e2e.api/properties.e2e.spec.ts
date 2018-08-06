import { requestBuilder } from './request.builder.promise';

describe('/api/properties', () => {

  it('should get properties', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .get();
    expect(response.length).toBeGreaterThan(0);
  });
});

describe('/api/properties', () => {
  it('Get API call should return status code 200', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .get();
    expect(response.statusCode).toBe(200);
  });
});

describe('/api/properties', () => {
  it('should response to post API call ', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .post();
      expect(response.length).toBeGreaterThan(0);
  });
});

describe('/api/properties', () => {
  it('should response to put API call ', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .put();
      expect(response.length).toBeGreaterThan(0);
  });
});

describe('/api/properties', () => {
  it('should response to patch API call ', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .patch();
      expect(response.length).toBeGreaterThan(0);
  });
});

describe('/api/properties', () => {
  it('should response to delete API call ', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .delete();
      expect(response.length).toBeGreaterThan(0);
  });
});



