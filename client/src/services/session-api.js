export default {
  login(credentials) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: {},
          token: 'unique-jwt-token'
        });
      }, 300);
    });
  },
  signup(credentials) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: {},
          token: 'unique-jwt-token'
        });
      }, 300);
    });
  }
};
