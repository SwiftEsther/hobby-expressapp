const uuidv4 = require('uuid/v4');
const helpers = { 
  newHobby(attrs = {}) {
      const hobby = {
        name: attrs.name || '',
        id: uuidv4(), // eslint-disable-line no-undef
      };
  
      return hobby;
    },
  findById(array, id, cb) {
      array.forEach((el) => {
        if (el.id === id) {
          cb(el);
          return;
        }
      });
    }
};

export default helpers;