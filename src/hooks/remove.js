const remove = property => (hook) => {
  if (hook.type !== 'after') {
    throw new Error('Remove hook should be used as an after hook');
  }

  if (hook.params.provider !== undefined) {
    (Array.isArray(hook.result) ? hook.result : [hook.result]).forEach((object) => {
      delete object[property];
    });
  }

  return hook;
};

export default remove;
