// Not my solution - still learning lodash

const _ = require("lodash")
//note: _.matches, _.matchesProperty, and _.property are permitted

const partition = (collection, check) => {
  const passed = []
  const failed = []

  const collectionAsArray = Array.isArray(collection) ? collection : Object.values(collection)
  const splitArray = (array, fn) => array.map((d) => (fn(d) ? passed.push(d) : failed.push(d)))

  if (typeof check === "function") splitArray(collectionAsArray, check)
  if (typeof check === 'string') splitArray(collectionAsArray, _.property(check))
  if (Array.isArray(check)) splitArray(collectionAsArray, _.matchesProperty(...check))

  else if (typeof check === "object") splitArray(collectionAsArray, _.matches(check))
  return [passed, failed]
}