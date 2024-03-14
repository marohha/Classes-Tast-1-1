import Swordsman from '../js/swordsman';

test('Swordsman is created', () => {
    const newSwordsman = new Swordsman('person', 'Swordsman');
    expect(newSwordsman).toEqual({
            name: 'person',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        },
    );
});

