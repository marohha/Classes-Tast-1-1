import Zombie from '../js/zombie';

test('Zombie is created', () => {
  const newZombie = new Zombie('person', 'Zombie');
  expect(newZombie).toEqual({
    name: 'person',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
