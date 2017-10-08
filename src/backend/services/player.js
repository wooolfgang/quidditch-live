import feathersMongo from 'feathers-mongodb';

function playerService(db) {
  return function execute() {
    const app = this;

    app.use('api/players', feathersMongo({ Model: db.collection('players') }));

    app.service('api/players').hooks({
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
      },
    });
  };
}

export default playerService;
