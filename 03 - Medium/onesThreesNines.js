class OnesThreesNines {
  constructor(num) {
    this.num = num;
  }

  get ones() {
    return this.howMany(1);
  }

  get threes() {
    return this.howMany(3);
  }

  get nines() {
    return this.howMany(9);
  }

  howMany(n) {
    return Math.floor(this.num / n);
  }
}
