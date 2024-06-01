class HashMap {
  constructor(initialCapacity = 16) {
    this.buckets = Array(initialCapacity)
      .fill(null)
      .map(() => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.buckets.length > 0.75) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey, value] = bucket[i];
      if (existingKey === key) {
        return value;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array(this.buckets.length)
      .fill(null)
      .map(() => []);
    this.size = 0;
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        keysArray.push(key);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        valuesArray.push(value);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        entriesArray.push([key, value]);
      }
    }
    return entriesArray;
  }

  resize() {
    const newBuckets = Array(this.buckets.length * 2)
      .fill(null)
      .map(() => []);
    const oldBuckets = this.buckets;
    this.buckets = newBuckets;
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}

// Example usage:
const hashMap = new HashMap();
hashMap.set("name", "Alice");
hashMap.set("age", 30);
console.log(hashMap.get("name")); // Outputs: Alice
console.log(hashMap.length()); // Outputs: 2
hashMap.remove("age");
console.log(hashMap.length()); // Outputs: 1
console.log(hashMap.keys()); // Outputs: ["name"]
console.log(hashMap.values()); // Outputs: ["Alice"]
console.log(hashMap.entries()); // Outputs: [["name", "Alice"]]
hashMap.clear();
console.log(hashMap.length()); // Outputs: 0
