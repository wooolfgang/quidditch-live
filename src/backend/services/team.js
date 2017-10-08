import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';

function teamService(db) {
  return function execute() {
    const app = this;

    app.use('api/teams', feathersMongo({ Model: db.collection('teams') }));

    app.service('api/teams').hooks({
      before: {
        find: [],
        get: [],
        update: [],
        patch: [],
        remove: [],
      },
      after: {
        find: [],
        get: [],
        update: [],
        patch: [],
        remove: [],
        all: [],
      },
    });
  };
}

export default teamService;
