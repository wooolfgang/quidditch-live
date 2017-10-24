import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';
import auth from 'feathers-authentication';
import restrictToOwner from '../../hooks/restrictToOwner';

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

    const authorization = [
      auth.hooks.authenticate('jwt'),
      restrictToOwner({ ownerField: '_id', idField: 'handler' }),
    ];

    app.service('api/matches').hooks({
      before: {
        find: [],
        get: [],
        update: [...authorization],
        patch: [...authorization],
        remove: [...authorization],
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
