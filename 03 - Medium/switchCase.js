const toSnakeCase = (str) => {
  const regex = /[A-Z]/g;
  return str.replace(regex, (value) => '_' + value.toLowerCase());
};

const toCamelCase = (str) => {
  const regex = /_[a-z]/g;
  return str.replace(regex, (value) => value[1].toUpperCase());
};

// Tests

// camelCase to snake_case tests
console.log(toSnakeCase('edabit'), 'edabit');
console.log(toSnakeCase('helloEdabit'), 'hello_edabit');
console.log(toSnakeCase('isModalOpen'), 'is_modal_open');
console.log(toSnakeCase('getBackgroundColor'), 'get_background_color');
console.log(toSnakeCase('isLoading'), 'is_loading');
console.log(toSnakeCase('x'), 'x');

// snake_case to camelCase tests
console.log(toCamelCase('edabit'), 'edabit');
console.log(toCamelCase('hello_edabit'), 'helloEdabit');
console.log(toCamelCase('is_modal_open'), 'isModalOpen');
console.log(toCamelCase('get_background_color'), 'getBackgroundColor');
console.log(toCamelCase('is_loading'), 'isLoading');
console.log(toCamelCase('x'), 'x');
