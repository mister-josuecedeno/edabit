let magnitude = v =>
    Math.sqrt(
        v.map(x => x * x)
         .reduce((x, y) => x + y, 0));
