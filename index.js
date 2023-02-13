const chalk = require('chalk');
const readline = require('readline-sync');

let properties = [];
let aux="";

while(aux != 'stop'){

    aux = readline.question("Digite as propriedades do CSS: ");

    properties.push(aux);

    aux = readline.question('Para parar digite "stop", para continuar aperte enter');

    if(aux == 'stop'){
        console.log(chalk.blue(properties.sort().join('\n')));
    }

}