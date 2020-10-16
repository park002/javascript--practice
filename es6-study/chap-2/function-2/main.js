//default value
const DEFAULT = 'jaeho';
const sayHi = (aName = DEFAULT) => 'Hello' + aName;
console.log(sayHi());