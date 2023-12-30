const path = require('node:path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename).dir);
console.log(path.dirname(__dirname));
console.log(path.extname(__dirname));

console.log(path.join(__dirname, "templates", 'hi.ts'));
console.log(path.resolve(__dirname, "templates", '/index.html'));
console.log(path.resolve(__dirname, "./templates", 'index.html'));
