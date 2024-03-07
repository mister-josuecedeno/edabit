// https://edabit.com/challenge/nhW7dXvLWrQoepyFs

// Not my solution
const magic = new Proxy(
  {},
  {
    get(target, prop) {
      return function (...args) {
        // The first argument is the object/string/array to operate on
        const [firstArg, ...restArgs] = args;

        if (typeof firstArg === 'string' || Array.isArray(firstArg)) {
          if (typeof firstArg[prop] === 'function') {
            // If it's a function, call it on the firstArg
            return firstArg[prop](...restArgs);
          }
        } else if (typeof firstArg === 'object' && firstArg !== null) {
          // If the property exists on the object, return it
          return firstArg[prop];
        }

        // For normalization, we need to handle it specifically
        if (prop === 'normalize' && typeof firstArg === 'string') {
          return firstArg.normalize(...restArgs);
        }

        // If the property doesn't exist or isn't callable, return undefined
        return undefined;
      };
    },
  }
);
