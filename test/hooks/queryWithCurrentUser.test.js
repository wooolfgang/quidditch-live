import queryWithCurrentUser from '../../src/hooks/queryWithCurrentUser';

describe('queryWithCurrentUser', () => {
  it('It should be used as a before hook', () => {
    const hook = {
      type: 'after',
    }
    expect(() => queryWithCurrentUser()(hook)).toThrowError('queryWithCurrentUser should be used as a before hook');
  });

  it('Throws an error if user does not exist and is called externally', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio'
      },
      user: {
        id: '1'
      }
    }
    expect(() => queryWithCurrentUser()(hook)).toThrowError('User does not exist');
  });

  it('Returns the hook if user does not exist and is called internally', () => {
    const hook = {
      type: 'before',
      params: {
        provider: undefined,
      }
    }
    expect(queryWithCurrentUser()(hook)).toEqual(hook);
  });

  it('Throws an error if userId does not exist in user object', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio',
        user: {}
      },
    }
    expect(() => queryWithCurrentUser()(hook)).toThrowError('Id field does not exist');
  });

  it('Returns a new hook with user id in the query property', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio',
        user: {
          _id: '123',
          cool: 'xxx'
        },
        query: {}
      }
    }
    const expectedHook = {
      ...hook,
      params: {
        ...hook.params,
        query: {
          userId: '123',
        }
      }
    }
    expect(queryWithCurrentUser()(hook)).toEqual(expectedHook);
  });
});