import Character from "../js/character";

test('Character is created', () => {
    expect(() => new Character('person', 'Bowerman').toEqual({
        name: 'person',
        type: 'Bowerman',
        health: 100,
        level: 1,
    }));
});

test('Character is not created', () => {
    expect(() => new Character('p', 'Bowerman').toThrowError(new Error('Имя пероснажа должно быть > 2 и < 10 букв')));
});

test('Character is not created', () => {
    expect(() => new Character('personperson', 'Bowerman').toThrowError(new Error('Имя пероснажа должно быть > 2 и < 10 букв')));
});

test('Character is not created', () => {
    expect(() => new Character(123, 'Bowerman').toThrowError(new Error('Имя пероснажа должно быть > 2 и < 10 букв')));
});

test('Character is not created no type', () => {
    expect(() => new Character('person', 'Person').toThrowError(new Error('Не верный тип персонажа')));
});

test('Character is not created no type', () => {
    expect(() => new Character('person', 123).toThrowError(new Error('Не верный тип персонажа')));
});