import Magician from '../js/magician';

test('Magician is created', () => {
  const newMagician = new Magician('person', 'Magician');
  expect(newMagician).toEqual({
    name: 'person',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
