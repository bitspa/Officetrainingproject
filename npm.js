const chalk=require('chalk');
console.log(chalk.red('Hello'));
console.log(chalk.yellow('Hi'));
console.log(chalk.bgBlue('I will go tomorrow'));
console.log(chalk.bgGreen('Sure Sure no problem'));
console.log(chalk.underline('Sorry for today'));
console.log(chalk.bold('Sorry for tomorrow'));
console.log(chalk.yellow.bgRed.underline('Okay Goodbye'));
console.log(chalk.hex('#FF8800').bold('Goodbye'));
console.log(chalk.rgb(255, 136, 0).bold('See you soon'));
