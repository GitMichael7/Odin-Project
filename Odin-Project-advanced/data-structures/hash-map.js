class HashMap {
  constructor() {
    this.store = {};
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    this.store = {};
    this.store[key] = value;
  }

  get(key) {
    if (key in store) {
      return this.store[key];
    } else {
      return null;
    }
  }

  has(key) {
    if (key in store) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    if (key in store) {
      delete this.store[key];
      return true;
    } else {
      return false;
    }
  }

  length() {
    let numberOfKeys = Object.keys(this.store).length;
    return numberOfKeys;
  }

  clear() {
    this.store = {};
  }

  keys() {
    let keys = Object.keys(this.store);
    return keys;
  }

  value() {
    let values = Object.values(this.store);
    return values;
  }
}

let storee = new HashMap();
storee.set("Keyy", "Meee");
console.log(storee.length());
