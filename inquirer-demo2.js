'use strict';
const inquirer  = require('inquirer');

inquirer
    .prompt([
        {
          type: 'checkbox', // 多选列表
          message: 'Select toppings',
          name: 'toppings',
          choices: [ // 分类
                new inquirer.Separator(' = The Meats = '),
                { // 子选项
                  name: 'Pepperoni',
                },
                {
                  name: 'Ham',
                },
                {
                  name: 'Ground Meat',
                },
                {
                  name: 'Bacon',
                },
                new inquirer.Separator(' = The Cheeses = '),
                {
                  name: 'Mozzarella',
                  checked: true, // 选中
                },
                {
                  name: 'Cheddar',
                },
                {
                  name: 'Parmesan',
                },
                new inquirer.Separator(' = The usual ='),
                {
                  name: 'Mushroom',
                },
                {
                  name: 'Tomato',
                },
                new inquirer.Separator(' = The extras = '),
                {
                  name: 'Pineapple',
                },
                {
                  name: 'Olives',
                  disabled: 'out of stock', // 不可用
                },
                {
                  name: 'Extra cheese',
                },
          ],
          validate(answer) {
            if (answer.length < 1) {
              return 'You must choose at least one topping.';
            }
            return true;
          },
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });