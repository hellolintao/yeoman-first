const fg = require('fast-glob');

const stream = fg.stream(['.editorconfig', '**/index.js'], { dot: false });

const entries = fg(['.editorconfig', '**/index.js'], { dot: true }).then((data) => {
	console.log('-----------')
	console.log(data)
})

console.log(stream)


// for await (const entry of stream) {
// 	// .editorconfig
// 	// services/index.js
// 	console.log(entry)
// }