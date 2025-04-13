const ke = ['sm', 'md', 'lg', 'xl', 'xxl'];

const q = ke.reduce((acc, key) => {
  acc[key] = null;
  return acc;
}, {});
console.log(q);
