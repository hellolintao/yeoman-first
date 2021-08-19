const fse = require('fs-extra');

fse.copy('./demo.txt', './demo_copy.txt').then(() => {
	console.log('success')
}).catch(err => {
	console.log(err)
})

async function copy() {
	try {
		await fse.copy('./demo1.txt', './demo_copy.txt');
		console.log('success')
	} catch (err) {
		console.log(err)
	}
}
copy();

fse.readJson('./package.json').then((data) => {
	console.log('success', data)
})