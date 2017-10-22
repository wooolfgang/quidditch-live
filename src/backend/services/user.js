import feathersMongo from 'feathers-mongodb';
import { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';
import remove from '../../hooks/remove';
import restrictToOwner from '../../hooks/restrictToOwner';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    app.service('api/users').hooks({
      before: {
        find: [],
        get: [auth.hooks.authenticate('jwt')],
        create: [hooks.hashPassword()],
        update: [restrictToOwner({ ownerField: '_id', idField: '_id' })],
        patch: [restrictToOwner({ ownerField: '_id', idField: '_id' })],
        remove: [restrictToOwner({ ownerField: '_id', idField: '_id' })],
        all: [],
      },
      after: {
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
        all: [remove('password')],
      },
    });
  };
}

export default userService;
