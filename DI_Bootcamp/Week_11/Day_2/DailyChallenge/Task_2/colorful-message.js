import chalk from 'chalk';

export function displayColorfulMessage() {
    console.log(chalk.blue('This is a blue message!'));
    console.log(chalk.red.bold('This is a bold red message!'));
    console.log(chalk.green.underline('This is an underlined green message!'));
}