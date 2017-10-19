import remove from '../../src/hooks/remove';

describe('removeHook', () => {
  it('Should not remove the props if its called internally', () => {
    const hook = {
      type: 'after',
      result: { name: 'Cool Guy', password: 'xxx' },
      params: {
        provider: null
      }
    }
    expect(remove('password')(hook)).toEqual(hook);
  });

  it('Should do nothing when arg is empty', () => {
    const hook = {
      type: 'after',
      result: 'COOl',
      params: {
        provider: 'external'
      }
    }
    expect(remove()(hook)).toEqual(hook);
  });


  it('Should throw an exception when it is used as a before hook', () => {
    const hook = {
      type: 'before',
      result: { name: 'Cool Guy' },
      params: {
        provider: 'external'
      }
    }
    expect(() => remove()(hook)).toThrow('Remove hook should be used as an after hook');
  });

  it('Should remove the props of an array', () => {
    const hook = {
      type: 'after',
      result: [
        { name: 'Cool Guy', password: 'coolpassword' },
        { name: 'Not cool', password: 'xxx' }
      ],
      params: {
        provider: 'external'
      }
    }
    const expectedHook = {
      type: 'after',
      result: [
        { name: 'Cool Guy' },
        { name: 'Not cool' }
      ],
      params: {
        provider: 'external'
      }
    }
    expect(remove('password')(hook)).toEqual(expectedHook);
  });

  it('Should remove the props of a single object', () => {
    const hook = {
      type: 'after',
      result: { name: 'Cool Guy', password: 'xxxx' },
      params: {
        provider: 'external'
      }
    }
    const expectedHook = {
      type: 'after',
      result: { name: 'Cool Guy' },
      params: {
        provider: 'external'
      }
    }
    expect(remove('password')(hook)).toEqual(expectedHook);
  });
});