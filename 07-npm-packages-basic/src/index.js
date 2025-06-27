import chalk from "chalk";
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgGreen.italic("Olá! Eu sou "));
console.log(chalk.green.bgCyan.bold("Jarvis"));
console.log(logSymbols.success, chalk.green.italic('Finished successfully!'));
console.log(logSymbols.error,chalk.red.bold('Servidor com Problemas!'));
