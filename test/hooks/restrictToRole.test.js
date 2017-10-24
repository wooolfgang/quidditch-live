import restrictToRoles from '../../src/hooks/restrictToRoles';

describe('restrictToRoles', () => {
  it('Returns the hook if called internally', () => {
    const hook = {
      params: {
        provider: undefined
      }
    }
    expect(restrictToRoles()(hook)).toEqual(hook);
  });

  it('Throws an error if not used as a before hook', () => {
    const hook = {
      params: {
        provider: 'socketio',
      },
      type: 'after'
    }
    expect(() => restrictToRoles()(hook)).toThrowError('restricToRoles should be used as a before hook');
  });

  it('Throws an error if user is not authenticated', () => {
    const hook = {
      params: {
        provider: 'socketio',
        user: undefined
      },
      type: 'before'
    }
    expect(() => restrictToRoles()(hook)).toThrowError('Not authenticated');
  });

  it('Throws an error if argument roles has no input', () => {
    const hook = {
      params: {
        provider: 'socketio',
        user: { roles: 'admin' }
      },
      type: 'before'
    }
    expect(() => restrictToRoles({ roles: [], roleField: 'roles' })(hook)).toThrowError('No roles input');
  });

  it('Should throw an error if user is not authorized', () => {
    const hook = {
      params: {
        provider: 'socketio',
        user: { roles: ['admin'] }
      },
      type: 'before'
    }
    expect(() => restrictToRoles({ roles: ['newbie'], roleField: 'roles' })(hook)).toThrowError('Not authorized');
  });

  it('Returns the hook if user is authorized', () => {
    const hook = {
      params: {
        provider: 'socketio',
        user: { role: ['admin', 'coolguy'] }
      },
      type: 'before'
    }
    expect(restrictToRoles({ roles: 'coolguy', roleField: 'role' })(hook)).toEqual(hook);
  });
});