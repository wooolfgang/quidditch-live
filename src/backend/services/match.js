import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';

function matchService(db) {
  return function execute() {
    const app = this;

    app.use('api/matches', feathersMongo({ Model: db.collection('matches') }));

    const matchSchema = {
      include: {
        service: '/api/teams',
        nameAs: 'teams',
        parentField: 'teamIds',
        childField: '_id',
        include: {
          service: '/api/players',
          nameAs: 'players',
          parentField: 'playerIds',
          childField: '_id',
        },
      },
    };

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
        all: [populate({ schema: matchSchema })],
      },
    });
  };
}

export default matchService;
