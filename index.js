function map(array, func) {
  let result = [];
  for (const item of array) {
    result.push(func(item));
  }
  return result;
}

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 8953ce7b1e1016b4026e30f159fd62247037bbe0
function reduce(source, func, start){
  let result = !!start ? start : source[0];
  let array = !!start ? source : source.slice(1);
  for (const item of array) {
    result = func(item, result);
=======
function reduce(array, func, start=0) {
  let result = start;
  for (const item of array) {
    result += func(item);
>>>>>>> 7d50e1ee7ba892711430f6caeee42833eb9bf0a4
  }
  return result;
}
