function shuffle(target) {
  console.log('===');
  if (target.length === 0) return [];
  if (target.length === 1) return target;

  const r = Math.round(Math.random() * (target.length - 1));
  const value = target[r];
  target.splice(r, 1);

  if (target.length < 2) {
    return [value].concat(target);
  }

  const helf = Math.ceil(target.length / 2);
  const left = target.slice(0, helf - 1) || [];
  const right = target.slice(helf - 1, target.length) || [];

  return [value].concat(shuffle(left), shuffle(right));
}
const a = [1, 3, 4, 5, 6, 7];
console.log(shuffle(a));
