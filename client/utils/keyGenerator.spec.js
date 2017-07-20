import keyGenerator from './keyGenerator'

describe('Key Generator', () => {
  describe('#getKey', () => {
    it('returns sequential keys', () => {
      const keys = {};
      let currentKey = keyGenerator.getKey();
      let notSequential = false;

      for (let i = 0; i < 10; i++) {
        let key = keyGenerator.getKey()

        if (key !== currentKey + 1) {
          notSequential = true;
        }

        currentKey = key;
      }

      expect(notSequential).toEqual(false);
    });
  });
});
