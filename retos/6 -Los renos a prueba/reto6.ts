function maxDistance(movements) {
  const minus = (movements.match(/</gm) || []).length;
  const max = (movements.match(/>/gm) || []).length;
  const asterisco = movements.length - minus - max;
  return Math.abs(max - minus) + asterisco
}