const restrictToOwner = (options = { ownerField: '_id', idField: '' }) => (hook) => {
  const { ownerField, idField } = options;

  if (!hook.params.provider) {
    return hook;
  }

  if (hook.type !== 'before') {
    throw new Error('restrictToOwner should be used as a before hook');
  }

  if (!hook.params.user || !hook.params.user[ownerField]) {
    throw new Error('User is not authenticated');
  }

  if (!hook.id || hook.method === 'find') {
    throw new Error('Multiple changes not supported yet');
    // future version will return a filter hook that filters data by userId
  }

  return hook.service.get(hook.id).then((data) => {
    if (data[idField].toString() === hook.params.user[ownerField].toString()) {
      return hook;
    }
    throw new Error('Not authorized');
  });
};

export default restrictToOwner;
