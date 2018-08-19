import lodash from 'lodash';

const worker = (promise, num) => promise.then((list) => {
  list.push(num * num);
  return list;
});

async function componentDidMount(list) {
  const result = await lodash.reduce(list, async (obj, loc) => {
    const promise = await worker(obj, loc);
    return promise;
  }, Promise.resolve([]));

  // [1, 4, 9]
  // console.log(result);

  // 1
  // console.log(result[0]);

  // this.setState({
  //  result,
  // });

  return result;
}

export default componentDidMount;
