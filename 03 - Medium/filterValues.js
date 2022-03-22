const filterValues = (obj) => {
  const entries = Object.entries(obj).filter((o) => o[1] >= 5000);
  return Object.fromEntries(entries);
};

console.log(filterValues({}), {});
console.log(filterValues({ piano: 300 }), {});
console.log(filterValues({ tv: 4999, guitar: 5000, fork: 5001 }), {
  guitar: 5000,
  fork: 5001,
});
