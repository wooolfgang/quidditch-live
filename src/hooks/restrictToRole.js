const restrictToRole = (options = { roles: [], idField: 'userId' }) => (hook) => {
  const { roles, idField } = options;

  if (!hook.params.provider) {
    return hook;
  }

  if (hook.type !== 'before') {
    throw new Error('restrictToOwner should be used as a before hook');
  }

  if (hook.method === 'find') {
    return hook;
  }

  if (hook.method !== 'get' && hook.method !== 'update' && hook.method !== 'patch' && hook.method !== 'remove') {
    throw new Error('restrictToRole should be only used in get,update,patch,remove methods');
  }

  if (!hook.params.query[idField]) {
    throw new Error('No user on the query property');
  }

  const allowed = (Array.isArray(roles) ? roles : [roles]).some((role) => {
    const roleIds = hook.data[role].map(id => id.toString());
    const userId = hook.params.query[idField].toString();

    if (roleIds instanceof Array && roleIds.includes(userId)) {
      return true;
    } else if (!(roleIds instanceof Array) && roleIds === userId) {
      return true;
    }
    return false;
  });

  if (!allowed) {
    throw new Error('User not allowed for this method');
  }

  return hook;
};

export default restrictToRole;
