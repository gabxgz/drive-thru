let instance = null;

class KeyGenerator {
  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;
    this.key = 0;
  }

  getKey () {
    const exportedKey = this.key;
    this.key++;

    return exportedKey;
  }
}

const keyGenerator = new KeyGenerator();

export default keyGenerator;
