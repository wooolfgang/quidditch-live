const queryWithCurrentUser = ({ idField = '_id', nameAs = 'userId' }) => (hook) => {
  if (hook.type !== 'before') {
    throw new Error('queryWithCurrentUser should be used as a before hook');
  }

  if (!hook.params.user) {
    if (!hook.params.provider) {
      return hook;
    }

    throw new Error('User does not exist');
  }

  if (!hook.params.user[idField]) {
    throw new Error('Id field does not exist');
  }

  const newHook = { ...hook };
  newHook.params.query[nameAs] = hook.params.user[idField];
  return newHook;
};

export default queryWithCurrentUser;

