import restrictToOwner from '../../src/hooks/restrictToOwner';

describe('restrictToOwner', () => {
  it('Throws an error if not used as a before hook', () => {
    const hook = {
      type: 'after',
      params: {
        provider: 'socketio'
      }
    }
    expect(() => restrictToOwner()(hook)).toThrowError('restrictToOwner should be used as a before hook');
  });

  it('Returns the original hook data if it is called internally', () => {
    const hook = {
      type: 'before',
      data: {
        _id: '123',
      },
      params: {
        provider: undefined
      }
    }
    expect(restrictToOwner()(hook)).toEqual(hook);
  });


  it('Throws an error if data array is not owned by the user', () => {
    const hook = {
      type: 'before',
      data: [
        {
          _id: '123'
        },
        {
          _id: '123'
        }
      ],
      params: {
        provider: 'socketio',
        query: {
          userId: '121'
        }
      }
    }
    expect(() => restrictToOwner({ ownerField: '_id', idField: 'userId' })(hook)).toThrowError('Unauthorized access');
  });

  it('Throws an error if the data object is not owned by the user', () => {
    const hook = {
      type: 'before',
      data: {
        _id: '123'
      },
      params: {
        provider: 'socketio',
        query: {
          userId: '121'
        }
      }
    }
    expect(() => restrictToOwner({ ownerField: '_id', idField: 'userId' })(hook)).toThrowError('Unauthorized access');
  });

  it('Returns the item owned by the user', () => {
    const hook = {
      type: 'before',
      data: [{ ownedBy: '123' }, { ownedBy: '123' }, { ownedBy: '122' }],
      params: {
        query: {
          userId: '122'
        },
        provider: 'socketio',
      }
    }
    const expectedHook = {
      type: 'before',
      data: { ownedBy: '122' },
      params: {
        query: {
          userId: '122'
        },
        provider: 'socketio',
      }
    }
    expect(restrictToOwner({ ownerField: 'ownedBy', idField: 'userId' })(hook)).toEqual(expectedHook);
  });
});