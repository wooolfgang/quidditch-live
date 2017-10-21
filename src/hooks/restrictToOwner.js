const restrictToOwner = (options = { ownerField: '_id', idField: 'userId' }) => (hook) => {
  const { ownerField, idField } = options;

  if (!hook.params.provider) {
    return hook;
  }

  if (hook.type !== 'before') {
    throw new Error('restrictToOwner should be used as a before hook');
  }

  if (!hook.params.query[idField]) {
    throw new Error('User is not authenticated');
  }

  const filtered = (hook.data instanceof Array ? hook.data : [hook.data]).filter((object) => {
    if (object[ownerField] === hook.params.query[idField]) {
      return object;
    }
  });

  if (filtered.length === 0) {
    throw new Error('Unauthorized access');
  }

  const newHook = hook;
  newHook.data = filtered.length === 1 ? filtered[0] : filtered;
  return newHook;
};

export default restrictToOwner;
