import Character from '../Character';
import BowUnd from '../BowUnd';
import MagDaem from '../MagDaem';
import SwordZom from '../SwordZom';

test('Верный ввод лучник', () => {
  const received = new BowUnd('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод нежить', () => {
  const received = new BowUnd('Berny', 'Undead');
  const expected = {
    name: 'Berny',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод маг', () => {
  const received = new MagDaem('Berny', 'Magician');
  const expected = {
    name: 'Berny',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод демон', () => {
  const received = new MagDaem('Berny', 'Daemon');
  const expected = {
    name: 'Berny',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод мечник', () => {
  const received = new SwordZom('Berny', 'Swordsman');
  const expected = {
    name: 'Berny',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод зомби', () => {
  const received = new SwordZom('Berny', 'Zombie');
  const expected = {
    name: 'Berny',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Swordsman')).toThrow();
});

test('Не верный тип лучник', () => {
  expect(() => new BowUnd('Berny', 'Thief')).toThrow();
});

test('Не верный тип нежить', () => {
  expect(() => new BowUnd('Berny', 'Thief')).toThrow();
});

test('Не верный тип маг', () => {
  expect(() => new MagDaem('Berny', 'Thief')).toThrow();
});

test('Не верный тип демон', () => {
  expect(() => new MagDaem('Berny', 'Thief')).toThrow();
});

test('Не верный тип мечник', () => {
  expect(() => new SwordZom('Berny', 'Thief')).toThrow();
});

test('Не верный тип зомби', () => {
  expect(() => new SwordZom('Berny', 'Thief')).toThrow();
});
