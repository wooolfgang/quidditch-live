const restrictToRoles = (options = { roles: [], roleField: 'role' }) => (hook) => {
  const { roles, roleField } = options;

  if (!hook.params.provider) {
    return hook;
  }

  if (hook.type !== 'before') {
    throw new Error('restricToRoles should be used as a before hook');
  }

  if (!hook.params.user || !hook.params.user[roleField]) {
    throw new Error('Not authenticated');
  }

  if (roles.length === 0) {
    throw new Error('No roles input');
  }

  const authorized = (Array.isArray(roles) ? roles : [roles]).some((role) => {
    const userRole = hook.params.user[roleField];
    if (userRole instanceof Array && userRole.includes(role)) {
      return true;
    } else if (!(userRole instanceof Array) && userRole === role) {
      return true;
    }
  });

  if (!authorized) {
    throw new Error('Not authorized');
  }

  return hook;
};

export default restrictToRoles;
