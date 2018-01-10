
const DependentTypes = require('enterprise-edition/dependent-types');

Object.keys(DependentTypes).map(prop => {
    console.log(`DependentTypes.${prop}:`, Object.keys(DependentTypes[prop]));
});

console.log('Done!');
