import restrictToOwner from '../../src/hooks/restrictToOwner';
import { ObjectId } from 'mongodb';

describe('restrictToOwner', () => {
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

  it('Throws an error if not used as a before hook', () => {
    const hook = {
      type: 'after',
      params: {
        provider: 'socketio'
      }
    }
    expect(() => restrictToOwner()(hook)).toThrowError('restrictToOwner should be used as a before hook');
  });

  it('Throws an error if user is not authenicated', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio',
        user: {}
      },
    }
    expect(() => restrictToOwner()(hook)).toThrowError('User is not authenticated');
  });

  it('Throws an error if user is querying multiple items', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketio',
        user: {
          _id: 111
        }
      },
      id: undefined
    }
    expect(() => restrictToOwner()(hook)).toThrowError('Multiple changes not supported yet');
  });

  it('Throws an error if the user is not authorized', async () => {
    const hook = {
      type: 'before',
      params: {
        user: {
          _id: ObjectId('4207BAF9956D3A18A885F6AF')
        },
        provider: 'socketio',
      },
      id: 1,
      service: {
        get: function (id) {
          if (id === 1) {
            return Promise.resolve({ _id: 1, type: 'Cool Item', owner: ObjectId('9207BAF9956D3A18A885F6AF') })
          }
        }
      }
    }

    await expect(restrictToOwner({ ownerField: '_id', idField: 'owner' })(hook)).rejects.toMatchObject(new Error('Not authorized'));
  });

  it('Returns the item owned by the user', () => {
    const hook = {
      type: 'before',
      params: {
        user: {
          _id: ObjectId('4207BAF9956D3A18A885F6AF')
        },
        provider: 'socketio',
      },
      id: 1,
      service: {
        get: function (id) {
          if (id === 1) {
            return Promise.resolve({ _id: 1, type: 'Cool Item', owner: ObjectId('4207BAF9956D3A18A885F6AF') })
          }
          return Promise.resolve(null);
        }
      }
    }

    expect(restrictToOwner({ ownerField: '_id', idField: 'owner' })(hook)).resolves.toBe(hook);
  });
});