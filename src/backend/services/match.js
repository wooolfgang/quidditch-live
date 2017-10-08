import feathersMongo from 'feathers-mongodb';

function matchService(db) {
  return function execute() {
    const app = this;

    app.use('api/matches', feathersMongo({ Model: db.collection('matches') }));

    app.service('api/matches').hooks({
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

export default matchService;
