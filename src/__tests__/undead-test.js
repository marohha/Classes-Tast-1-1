import Undead from '../js/bowerman';

test('Undead is created', () => {
  const newUndead = new Undead('person', 'Undead');
  expect(newUndead).toEqual({
    name: 'person',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
