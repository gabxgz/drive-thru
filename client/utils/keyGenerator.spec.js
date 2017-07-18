import { keyGenerator } from './keyGenerator'
describe('Key Generator', () => {
  it('returns unique keys', () => {
    const keys = {};
    let duplicate = false;

    for (let i = 0; i < 1000; i++) {
      setTimeout(() => {
        let key = keyGenerator();

        if (keys[key]) {
          duplicate = true;
          keys[key] = true;
        } else {
          keys[key] = `false ${i}`;
        }
      }, 1);
    }


    expect(duplicate).toEqual(false);
  });
});
