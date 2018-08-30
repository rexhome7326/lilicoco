function shuffle(target) {
  if (target.length === 0) return [];
  const r = Math.round(Math.random() * (target.length - 1));
  const value = target[r];
  target.splice(r, 1);
  return [value].concat(shuffle(target));
}
const a = [1, 3, 4, 5, 6, 7];
console.log(shuffle(a));
