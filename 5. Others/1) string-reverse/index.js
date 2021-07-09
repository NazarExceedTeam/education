function stringReverse(a) {
    return [a.split('')].reverse().join('');
}
/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */


window.stringReverse = stringReverse;

export default stringReverse;