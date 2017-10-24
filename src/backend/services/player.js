import feathersMongo from 'feathers-mongodb';
import auth from 'feathers-authentication';
import restrictToRoles from '../../hooks/restrictToRoles';

function playerService(db) {
  return function execute() {
    const app = this;

    app.use('api/players', feathersMongo({ Model: db.collection('players') }));

    const authorization = [
      auth.hooks.authenticate('jwt'),
      restrictToRoles({ roles: ['admin'], roleField: 'roles' }),
    ];

    app.service('api/players').hooks({
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
      },
    });
  };
}

export default playerService;
