const obj1 = {
    key1: 'value1',
    key2: 'value2'
  };
  function swapKeysAndValues(obj1) {
    const obj2 = Object.entries(obj1).map(
      ([key, value]) => [value, key]
    );
    return Object.fromEntries(obj2);
  }
  console.log(swapKeysAndValues(obj1));
