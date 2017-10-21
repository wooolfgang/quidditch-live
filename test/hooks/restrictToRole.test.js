import restrictToRole from '../../src/hooks/restrictToRole';

describe('restrictToRole', () => {
  it('Throws an error if used as an after hook', () => {
    const hook = {
      type: 'after',
      params: {
        provider: 'socketio'
      }
    }
    expect(() => restrictToRole()(hook)).toThrowError('restrictToOwner should be used as a before hook');
  });

  it('Returns the hook when used with the find method', () => {
    const hook = {
      type: 'before',
      method: 'find',
      params: {
        provider: 'socketio'
      }
    }
    expect(restrictToRole()(hook)).toEqual(hook);
  });

  it('Throws an error if used with the wrong service method', () => {
    const hook = {
      type: 'before',
      method: 'not',
      params: {
        provider: 'socketio'
      }
    }
    expect(() => restrictToRole()(hook)).toThrowError('restrictToRole should be only used in get,update,patch,remove methods');
  });

  it('Throws an error if userId is not populated in the query', () => {
    const hook = {
      method: 'get',
      type: 'before',
      params: {
        provider: 'socketio',
        query: {
        }
      },
      data: {
        master: '123'
      },
    }
    expect(() => restrictToRole({ roles: ['master'], idField: 'userId' })(hook)).toThrowError('No user on the query property');
  });

  it('Throws an error if user is not allowed for the service method', () => {
    const hook = {
      method: 'get',
      type: 'before',
      params: {
        provider: 'socketio',
        query: {
          userId: '123',
        }
      },
      data: {
        master: ['121', '122']
      },
    }
    expect(() => restrictToRole({ roles: ['master'], idField: 'userId' })(hook)).toThrowError('User not allowed for this method');
  });

  it('Returns the hook of user is allowed for the service method', () => {
    const hook = {
      method: 'get',
      type: 'before',
      params: {
        provider: 'socketio',
        query: {
          userId: '123',
        }
      },
      data: {
        master: ['121', '111'],
        coolGuys: ['123']
      },
    }
    expect(restrictToRole({ roles: ['master', 'coolGuys'], idField: 'userId' })(hook)).toEqual(hook);
  });
});