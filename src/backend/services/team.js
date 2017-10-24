import feathersMongo from 'feathers-mongodb';
import auth from 'feathers-authentication';
import restrictToRoles from '../../hooks/restrictToRoles';

function teamService(db) {
  return function execute() {
    const app = this;

    app.use('api/teams', feathersMongo({ Model: db.collection('teams') }));

    const authorization = [
      auth.hooks.authenticate('jwt'),
      restrictToRoles({ roles: ['admin'], roleField: 'roles' }),
    ];

    app.service('api/teams').hooks({
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
        all: [],
      },
    });
  };
}

export default teamService;
