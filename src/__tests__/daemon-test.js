import Daemon from '../js/daemon';

test('Daemon is created', () => {
    const newDaemon = new Daemon('person', 'Daemon');
    expect(newDaemon).toEqual({
            name: 'person',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        },
    );
});

