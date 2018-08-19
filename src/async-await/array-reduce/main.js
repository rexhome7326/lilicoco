import lodash from 'lodash';

const worker = (promise, num) => promise.then((list) => {
  list.push(num * num);
  return list;
});

const main = async (list) => {
  const result = await lodash.reduce(list, async (obj, loc) => {
    const promise = await worker(obj, loc);
    return promise;
  }, Promise.resolve([]));

  return result;
  // [1, 4, 9]
  // console.log(result);

  // 1
  // console.log(result[0]);
};

export default main;
