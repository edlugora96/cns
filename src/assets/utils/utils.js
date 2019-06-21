export const isBetween = (number, lt, gt, equal = true) => {
  if (typeof number !== 'number' && typeof lt !== 'number' && typeof gt !== 'number') {
    throw Error('Invalid arguments');
  }
  if (equal && number >= lt && number <= gt) {
    return true;
  } else if (!equal && number > lt && number < gt) {
    return true;
  } else {
    return false;
  }
};