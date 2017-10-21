import restricToAuthenticated from '../../src/hooks/restrictToAuthenticated';

describe('restrictToAuthenticated', () => {
  it('Throws an error if not used as a before hook', () => {
    const hook = {
      type: 'after',
      params: {
        provider: 'socketio'
      }
    };
    expect(() => restricToAuthenticated()(hook)).toThrowError('restrictToAuthenticated should be used as a before hook');
  });

  it('Throws an error if params is not populated with user', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio',
      }
    }
    expect(() => restricToAuthenticated()(hook)).toThrowError('Not authenticated');
  });

  it('Returns the hook if the user is populated', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio',
        user: { _id: '12' },
        query: {},
      }
    }
    expect(restricToAuthenticated()(hook)).toEqual(hook);
  });
});
