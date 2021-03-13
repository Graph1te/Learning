const soldier = { 
  health: 400,
  armor: 100
};

const john = Object.create(soldier);
john['health'] = 100;
console.log(john.armor);
