const inquirer  = require('inquirer');

console.log('Hi, welcome to Node Pizza');

const question = [
	{ 
		// 回答y n
		type: 'confirm',
		name: 'toBeDelivered',
		message: 'Is this for delivery?',
		default: false
	},
	{
		// 输入
		type: 'input',
		name: 'phone',
		message: "What's your phone number?",
		// 对结果进行验证
		validate(value) {
			const pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
			if (pass) {
				return true;
			}

			return 'Please enter a valid phone number'
		},
	},
	{
		// 列表
		type: 'list',
	    name: 'size',
	    message: 'What size do you need?',
	    choices: ['Large', 'Medium', 'Small'],
	    // 对最后的值进行过滤
	    filter(val) {
	      return val.toLowerCase();
	    },
	},
	{
	    type: 'input',
	    name: 'quantity',
	    message: 'How many do you need?',
	    validate(value) {
	      const valid = !isNaN(parseFloat(value));
	      return valid || 'Please enter a number';
	    },
	    // 使用类型过滤
	    filter: Number,
  	},
 	{
 		// 展开列表
	    type: 'expand',
	    name: 'toppings',
	    message: 'What about the toppings?',
	    choices: [
	      {
	        key: 'p',
	        name: 'Pepperoni and cheese',
	        value: 'PepperoniCheese',
	      },
	      {
	        key: 'a',
	        name: 'All dressed',
	        value: 'alldressed',
	      },
	      {
	        key: 'w',
	        name: 'Hawaiian',
	        value: 'hawaiian',
	      },
	    ],
	},
  	{
  		// 列表
	    type: 'rawlist',
	    name: 'beverage',
	    message: 'You also get a free 2L beverage',
	    choices: ['Pepsi', '7up', 'Coke'],
	},
	{
	    type: 'input',
	    name: 'comments',
	    message: 'Any comments on your purchase experience?',
	    default: 'Nope, all good!',
	},
	{
	    type: 'list',
	    name: 'prize',
	    message: 'For leaving a comment, you get a freebie',
	    choices: ['cake', 'fries'],
	    // 触发时机
	    when(answers) {
	      return answers.comments !== 'Nope, all good!';
	    },
  	},

];
inquirer.prompt(question).then((answers) => {
	console.log('\n answers');
	console.log(JSON.stringify(answers, null, '  '))
})