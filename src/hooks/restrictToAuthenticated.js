import queryWithCurrentUser from './queryWithCurrentUser';

const restrictToAuthenticated = (options = { idField: 'userId' }) => (hook) => {
  const { idField } = options;

  if (!hook.params.provider) {
    return hook;
  }

  if (hook.type !== 'before') {
    throw new Error('restrictToAuthenticated should be used as a before hook');
  }

  if (hook.params.provider && !hook.params.user) {
    throw new Error('Not authenticated');
  }

  if (!hook.params.query[idField]) {
    return queryWithCurrentUser({ idField: '_id', nameAs: 'userId' })(hook);
  }

  return hook;
};

export default restrictToAuthenticated;

