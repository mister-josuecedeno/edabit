// https://edabit.com/challenge/5N2g3vGhjhy2QcviD

// Resources

const characters = {
  Knight: {
    attack: 120,
    defense: 140,
    speed: 6,
  },
  Warrior: {
    attack: 180,
    defense: 71,
    speed: 8,
  },
  Fairy: {
    attack: 71,
    defense: 100,
    speed: 16,
  },
  Robot: {
    attack: 160,
    defense: 120,
    speed: 11,
  },
  Giant: {
    attack: 160,
    defense: 200,
    speed: 4,
  },
};

const weapons = {
  SimpleSword: {
    attack: 10,
    gold: 20,
  },
  Katana: {
    attack: 20,
    gold: 40,
  },
  SharpenedSword: {
    attack: 30,
    gold: 60,
  },
  GreatSword: {
    attack: 40,
    gold: 80,
  },
  ForgottenSword: {
    attack: 50,
    gold: 100,
  },
};

const armor = {
  BronzeArmor: {
    defense: 20,
    gold: 30,
  },
  IronArmor: {
    defense: 40,
    gold: 60,
  },
  SteelArmor: {
    defense: 60,
    gold: 90,
  },
  ObsidianArmor: {
    defense: 80,
    gold: 120,
  },
  DragonhideArmor: {
    defense: 100,
    gold: 150,
  },
};

const boots = {
  SimpleBoots: {
    speed: 3,
    gold: 24,
  },
  LeatherBoots: {
    speed: 6,
    gold: 48,
  },
  StrongBoots: {
    speed: 9,
    gold: 72,
  },
  CompoundBoots: {
    speed: 12,
    gold: 96,
  },
  SoftBoots: {
    speed: 15,
    gold: 120,
  },
};

const maxStats = (second) => {
  return;
};

// Tests

console.log(maxStats('Robot', 160), [210, 220, 26]);
console.log(maxStats('Knight', 80), [160, 180, 15]);
console.log(maxStats('Giant', 200), [210, 300, 19]);
console.log(maxStats('Fairy', 90), [111, 160, 25]);
console.log(maxStats('Warrior', 110), [230, 131, 20]);
