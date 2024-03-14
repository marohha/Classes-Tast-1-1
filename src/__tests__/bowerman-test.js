import Bowerman from '../js/bowerman';

test('Bowerman is created', () => {
    const newBowerman = new Bowerman('person', 'Bowerman');
    expect(newBowerman).toEqual({
            name: 'person',
            type: 'Bowerman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        },
    );
});

